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
    }
  }

  nextUnitOfWork = wipRoot;
  
}

function commitRoot(){
  commitWork(wipRoot.child);
}

function commitWork(fiber) {
  if (!fiber) {
    return;
  }

  let domParent = fiber.parent.dom;
  domParent.appendChild(fiber.dom);
  commitWork(fiber.child);
  commitWork(fiber.sibling);

}

let nextUnitOfWork = null;
let wipRoot = null;

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
  if(!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  const elements = fiber.props.children;

  let index = 0;

  while(index < elements.length) {
    const element = elements[index];
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    }
    if(index === 0) {
      fiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
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





const Didact = {
  createElement,
  render
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
