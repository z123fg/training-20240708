import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCounter } from "../../redux/slices/CounterSlice";
import { decrement, increment } from "../../redux/slices/RTKCounterSlice";
import store from "../../redux/RTKstore";

// RTK
export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  console.log(store.getState());

  /*
  action object 
  {
    type: "counter/increment"
    payload:
  }
  */

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>add one</button>
      Counter: {counter}
      <button onClick={() => dispatch(increment())}>add one</button>
    </div>
  );
}

// Redux core
// export default function Counter() {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);
//   return (
//     <div>
//       Counter: {counter}
//       <button onClick={() => dispatch(addToCounter("payload"))}>add one</button>
//     </div>
//   );
// }
