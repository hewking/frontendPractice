import { useEffect, useState } from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>我是标题</h1>
        <p>我是第一段话</p>
        <p>我是第二段话</p>
        <CountState/>
      </div>
    </div>
  );
}

function CountState(){
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log("count :" + count);
    }, 10 * 1000);
  }, []);
  const fn = countFn(() => {
    setCount(count + 1);
    console.log("click times");
  });
  return (<div>
    <button onClick={fn}>按钮</button>
  </div>);
}

function countFn(fn){
  let count = 0;
  return (...args) => {
    count ++;
    fn(args);
    console.log("count times :" + count);
  }
}
