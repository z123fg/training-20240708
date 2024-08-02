import React, { useEffect, useState, useContext } from "react";
import useCounter from "../../hooks/useCounter";
import { TodoContext } from "../../context/TodoContext";
import Counter from "../Counter/Counter";
import { memo } from "react";

// hoc, custom hook
// React.memo -> hoc (higher order component)

const MemoTodo = memo(function Todo({ todo, deleteHandler }) {
  console.log("todo", todo.title);
  const [count, setCount] = useCounter(2);
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => deleteHandler(todo.id)}>delete</button>
      <div>todo count: {count}</div>
    </div>
  );
});

export default MemoTodo;
