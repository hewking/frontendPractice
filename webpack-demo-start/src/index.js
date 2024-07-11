async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import(
    /* webpackChunkName: "lodash" */ "lodash"
  );

  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
