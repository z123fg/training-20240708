import React, { useEffect, useState } from "react";
import useCounter from "../../hooks/useCounter";

export default function Todo({ todo, deleteHandler }) {
  const [count, setCount] = useCounter(2);
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => deleteHandler(todo.id)}>delete</button>
      <div>todo count: {count}</div>
    </div>
  );
}
