import { useState } from "react";
import TodoForm from "./TodoForm";
import { TodoContext } from "../../context/TodoContext";
import MemoTodo from "./Todo";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  console.log("todo app re-render");

  const deleteHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addNewTodo = (newTodoValue) => {
    const newTodos = [...todos, { id: todos.length + 1, title: newTodoValue }]; // immutable
    setTodos(newTodos);
  };

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
      <button onClick={() => setCount(count + 1)}>
        add one to todo counter
      </button>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoContext.Provider value={[{ id: 1, title: "first todo" }]}>
        {flag
          ? todos.map((todo, index) => {
              return (
                <MemoTodo
                  todo={todo}
                  // deleteHandler={deleteHandler}
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
      </TodoContext.Provider>
    </div>
  );
}
