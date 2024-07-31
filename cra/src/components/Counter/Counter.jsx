import React, { useEffect, useState, useRef } from "react";
import useCounter from "../../hooks/useCounter";

// re-render
// parent component re-render, props change, state change
export default function Counter() {
  const [count, setCount] = useCounter(1);
  // let count = 0;
  // const countRef = useRef(0);

  // console.log(intervalRef);

  console.log("component re-rendered");

  function addOne() {
    // setState is async, state will not be updated immediately
    setCount(count + 1); // 0 -> updating the state immutabaly
    // countRef.current = countRef.current + 1; // directly mutating the ref
    // setCount(count + 1); // 0
    // setCount((prev) => {
    //   // 0
    //   return prev + 1;
    // });
    // setCount((prev) => {
    //   // 1

    //   return prev + 1;
    // });
  }

  // no dependency array -> triggered during mounting and updating
  // empty dependency array -> only triggered during mounting
  // non-empty -> triggered when any of the variables in dependency array changes

  // useEffect(() => {
  //   console.log("in useEffect");
  //   console.log(count);
  //   // setCount(count + 1); // don't do this
  // }, [count]);

  // useEffect(() => {
  //   console.log()
  // }, []);

  /*
  cb
  mounting -> cb()
  cleanup
  #1 updating -> cb()
  cleanup
  #2 updating -> cb()
  .
  .

  */

  // useEffect(() => {
  //   console.log("initial load");
  //   return () => {
  //     console.log("clean up"); // will run during unmounting
  //   };
  // }, []);

  // pure => no side effect, with the same input, it always gives us the same output
  return (
    <div>
      <div>Counter: {count} </div>
      <button onClick={addOne}>Add one</button>
    </div>
  );
}
