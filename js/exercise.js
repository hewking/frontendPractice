function queryParam(url) {
  // check param
  const obj = {};
  return url
    .split("?")[1]
    .split("&")
    .reduce((result, cur) => {
      const params = cur.split("=");
      result[params[0]] = params[1];
      return result;
    }, obj);
}

console.log(
  "queryParam",
  queryParam(
    "https://www.google.com/search?q=%E7%BF%BB%E8%AF%91&rlz=1C1GCEU_zh-CNHK911HK911&oq=%E7%BF%BB%E8%AF%91&aqs=chrome.0.69i59j35i39j0i512l7.827j0j7&sourceid=chrome&ie=UTF-8"
  )
);


function boxNum(m, n){
  
  const result = new Array(m);

  while(n > 0) {
    for(let i = 0; i < m && n > 0; i++) {
      const obj = result[i];
      if (obj == undefined) {
        result[i] = {box: i + 1, count: 1};
      } else {
        obj.count = obj.count + 1;
      }
      n--;
    }
  }

  return result;

}

console.log(boxNum(4, 55));

class Node {
  left;
  value;
  right;

  constructor(value){
    this.value = value;
  }

}

function createTree(array){

  let root = new Node();

  for (const e of array) {
    
  }


  return root;

}

const array = [{
  id: 1, parent_id : 6,
  id: 2, parent_id : 5,
  id: 3, parent_id : 5,
  id: 4, parent_id : 6,
  id: 5, parent_id : 7,
  id: 6, parent_id : 7, 
  id: 7, 
}];

function pushTree(value, node){
  if (node == null) {
    node = new Node();
    node.value = value;
  } else {
    if (value > node.value) {
      pushTree(value, node.left);
    } else {
      pushTree(value, node.right);
    }
  }
  return node;
}

// 最后一层子节点 1， 4， 3，2

// console.log(createTree(array));

let node;

console.log(pushTree(1, node))
console.log(pushTree(4, node))
console.log(pushTree(3, node))
console.log(pushTree(2, node))