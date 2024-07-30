import React, { useState } from "react";

// re-render
// parent component re-render, props change, state change
export default function Counter() {
  // let count = 0;
  let [count, setCount] = useState(0);
  console.log("component re-rendered");

  function addOne() {
    // setState is async, state will not be updated immediately
    setCount(0); // 0
    // setCount(count + 1); // 0
    // setCount((prev) => {
    //   // 0
    //   return prev + 1;
    // });
    // setCount((prev) => {
    //   // 1

    //   return prev + 1;
    // });
    console.log(count);
  }

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={addOne}>Add one</button>
    </div>
  );
}
