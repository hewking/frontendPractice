function getObjectValuesInOrder(obj) {
  const keys = Object.keys(obj);
  const values = [];
  const entries = Object.entries(obj);

  console.log(keys);
  console.log(entries);

  keys.forEach((key) => {
    values.push(obj[key]);
  });

  return values;
}

const obj = { a: 1, b: 2, c: 3 };

const categoryTypeObj = {
  0: "材料",
  3: "设备",
  4: "租赁",
  1: "专业分包",
  2: "劳务分包",
  5: "专业服务",
};

const categoryTypeMap = new Map([
  [0, "材料"],
  [3, "设备"],
  [4, "租赁"],
  [1, "专业分包"],
  [2, "劳务分包"],
  [5, "专业服务"],
]);

const orderedValues = getObjectValuesInOrder(categoryTypeObj);

console.log(orderedValues); // 输出 [1, 2, 3]
console.log(Array.from(categoryTypeMap.values()));
console.log(categoryTypeMap.get(1));
console.log(Array.from(categoryTypeMap.keys()));