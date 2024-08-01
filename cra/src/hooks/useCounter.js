import React, { useEffect, useState, useRef } from "react";

export default function useCounter(initValue) {
  const [count, setCount] = useState(initValue);

  // const intervalRef = useRef(null);

  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     console.log(count);
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, [count]);

  return [count, setCount];
}
