import { useCallback, useContext, useMemo, useReducer, useState } from "react";
import TodoForm from "./TodoForm";
import TodoContextProvider, { TodoContext } from "../../context/TodoContext";
import MemoTodo from "./Todo";

// useMemo -> cache a calculated value
// useCallback -> cache a function

// useReducer
// pure function -> for the same input, we are going to get the same output

// Context

const countReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return state + 1;
    }
    case "minus": {
      return state - 1;
    }
  }
};

export default function TodoApp() {
  const { todos, addNewTodo, deleteHandler } = useContext(TodoContext);
  const [show, setShow] = useState(true);
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(countReducer, 0);
  console.log(count);

  console.log("todo app re-render");

  // const evenTodos = useMemo(() => {
  //   return todos.filter((todo) => todo.id % 2 === 0);
  // }, [todos]);
  // const evenTodos = todos.filter((todo) => todo.id % 2 === 0);
  // console.log(evenTodos);

  const flag = true;

  /*
          A
        B    C
        D
        E
        F
  */

  // props drilling
  // state lifting

  return (
    <div>
      <div>Todo Counter: {count}</div>
      <button onClick={() => dispatch({ type: "add" })}>
        add one to todo counter
      </button>
      <TodoForm addNewTodo={addNewTodo} />
      {flag
        ? todos.map((todo, index) => {
            return (
              <MemoTodo
                todo={todo}
                deleteHandler={deleteHandler}
                key={index} // not good
              />
            );
          })
        : null}
      {/* <Todo title="first todo" />
      <Todo title="second todo" />
      <Todo title="third todo" /> */}
      {/* <button onClick={() => setShow(!show)}>toggle counter</button> */}
      {/* {show && <Counter />} */}
    </div>
  );
}
