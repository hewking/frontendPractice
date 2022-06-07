function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
      )
    }
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

function createDom(fiber) {
  const dom =
    fiber.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);
  const isProperty = key => key !== "children";
  Object.keys(fiber.props)
  .filter(isProperty)
  .forEach(name => {
    dom[name] = fiber.props[name];
  });

  return dom;
}

function render(element, container) {
  // 创建一个新的 fiber 节点, 只有这里有值了， 下面的
  // requestIdleCallback 才能执行
  wipRoot = {
    dom: container,
    props: {
      children: [element]
    },
    alternate: currentRoot
  }
  deletions = []; 
  nextUnitOfWork = wipRoot;
  
}

function commitRoot(){
  commitWork(wipRoot.child);
  deletions.forEach(commitWork);
  currentRoot = wipRoot
  wipRoot = null;
}

function commitWork(fiber) {
  if (!fiber) {
    return;
  }

  let domParentFiber = fiber.parent;
  while(!domParentFiber.dom) {
    domParentFiber = domParentFiber.parent;
  }

  let domParent = domParentFiber.dom;
 
  if (fiber.effectTag === "PLACEMENT" &&
   fiber.dom != null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === "UPDATE"){
    updateDOM(fiber.dom, fiber.props, fiber.alternate.props);
  } else {
    commitDelection(fiber, domParent);
  }

  commitWork(fiber.child);
  commitWork(fiber.sibling);

}

function commitDelection(fiber, domParent){
  if (fiber.dom) {
    domParent.removeChild(fiber.dom);
  } else {
    commitDelection(fiber.child, domParent);
  }
}


const isEvent = key => key.startsWith("on")
const isProperty = key =>
  key !== "children" && !isEvent(key)
const isNew = (prev, next) => key =>
  prev[key] !== next[key]
const isGone = (prev, next) => key => !(key in next)
function updateDom(dom, prevProps, nextProps) {
  //Remove old or changed event listeners
  Object.keys(prevProps)
  .filter(isEvent)
  .filter(
    key =>
      !(key in nextProps) ||
      isNew(prevProps, nextProps)(key)
  )
  .forEach(name => {
    const eventType = name
      .toLowerCase()
      .substring(2)
    dom.removeEventListener(
      eventType,
      prevProps[name]
    )
  })

  // Remove old properties
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach(name => {
      dom[name] = ""
    })
​
  // Set new or changed properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      dom[name] = nextProps[name]
    })

     // Add event listeners
  Object.keys(nextProps)
  .filter(isEvent)
  .filter(isNew(prevProps, nextProps))
  .forEach(name => {
    const eventType = name
      .toLowerCase()
      .substring(2)
    dom.addEventListener(
      eventType,
      nextProps[name]
    )
  })

}

let nextUnitOfWork = null;
let wipRoot = null;
let currentRoot = null;
let deletions = null;


function workLoop(deadline) {
  let shouldYield = false;

  while(nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  if(!nextUnitOfWork && wipRoot) {
    commitRoot();
  }

  requestIdleCallback(workLoop);
    
}

requestIdleCallback(workLoop);

/**
  fiber 节点完成三件事
  1. 把 element 添加到 DOM 上
  2. 为该 fiber 节点的子节点新建 fiber
  3. 挑出下一个任务单元

  element 持有三个引用
  1. child
  2. parent
  3. sibling

  这个方法完成了但是有一个问题， 在执行performUnitOfWork 过程中，在浏览器执行过程中会中断，fiber树添加节点到dom 中的执行
  用户会看到未完成的页面

 */
function performUnitOfWork(fiber) {

  /**
   * 1. 函数组件的 fiber 没有 DOM 节点
     2. 并且子节点由函数运行得来而不是直接从 props 属性中获取
   */
  const isFunctionComponent =
    fiber.type instanceof Function
  if (isFunctionComponent) {
    updateFunctionComponent(fiber)
  } else {
    updateHostComponent(fiber)
  }

  if (fiber.child) {
    return fiber.child;
  }

  let nextFiber = fiber;

  while(nextFiber) {
    if(nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }

  return nextFiber;

}

let wipFiber = null;
let hookIndex = null;

function updateFunctionComponent(fiber) {
  wipFiber = fiber;
  hookIndex = 0;
  wipFiber.hook = [];

  const children = fiber.type(fiber.props);
  reconcileChildren(fiber, children);
}

function updateHostComponent(fiber){
  if(!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  const elements = fiber.props.children;
  reconcileChildren(fiber, elements);
}

function useState(initial){
  let oldHook = wipFiber.alternate && wipFiber.alternate.hook &&
    wipFiber.alternate.hook[hookIndex];

  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  }

  const actions = oldHook ? oldHook.queue : [];
  actions.forEach(action => {
    hook.state = action(hook.state);
  });

  const setState = action => {
    hook.queue.push(action);
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    }
    nextUnitOfWork = wipRoot;
    deletions = [];
  }

  wipFiber.hooks.push(hook);
  hookIndex ++; 

  return [hook.state, setState]

}


function reconcileChildren(wipFiber, elements) {
  let index = 0;
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
  let prevSibling = null;

  while(index < elements.length 
    || oldFiber != null) {
    const element = elements[index];
    let newFiber = null;
    let sameType = oldFiber && element && element.type == oldFiber.type;

    if (sameType) {
      // 相同类型的节点，更新 props
     newFiber = {
        type: oldFiber.type,
        props: oldFiber.props,
        parent: wipFiber,
        dom: oldFiber.dom,
        alternate: oldFiber,
        effectTag: "UPDATE"
      }
    }

    if (element && !sameType) {
      // 新的节点，添加到 DOM 上
      newFiber = {
        type: element.type,
        props: element.props,
        parent: wipFiber,
        dom: null,
        alternate: null,
        effectTag: "PLACEMENT"
      }
    }

    if (oldFiber && !sameType) {
      // 删除旧的节点
      oldFiber.effectTag = "DELETION";
      deletions.push(oldFiber);
    }

    if(index === 0) {
      wipFiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
  }
}



const Didact = {
  createElement,
  render, 
  userState,
};

/** @jsx Didact.createElement */
const element = (
  <div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Didact</h2>
  </div>
);
const container = document.getElementById("root");
Didact.render(element, container);
