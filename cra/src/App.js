import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo/Todo";
import { useContext, useEffect, useState } from "react";
import Counter from "./components/Counter/Counter";
import { TodoContext } from "./context/TodoContext";

// jsx - syntax sugar, createElement()
// virtual dom - a representation of the real DOM, saved in the memory, and it's synced with the real DOM. When an update happens, react will generate a new version of the virtual DOM, and compare it (using diffing algorithm) with the previous virtual DOM, React will update the real DOM, where changes happened only. The process React uses to update the actual DOM is called reconciliation.

// babel - compiler
// webpack
// class/functioanl component

// props

// React fragment

// conditional rendering

function App() {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(true);
  const deleteHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addNewTodo = (newTodoValue) => {
    const newTodos = [...todos, { id: todos.length + 1, title: newTodoValue }];
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
      <TodoForm addNewTodo={addNewTodo} />
      <TodoContext.Provider value={[{ id: 1, title: "first todo" }]}>
        {flag
          ? todos.map((todo, index) => {
              return (
                <Todo
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
        <button onClick={() => setShow(!show)}>toggle counter</button>
        {show && <Counter />}
      </TodoContext.Provider>
    </div>
  );
}

function TodoForm({ addNewTodo }) {
  // Context API
  const todo = useContext(TodoContext);
  console.log(todo);
  // controlled component/ two way binding
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input id="input" value={inputValue} onChange={handleInputChange} />
      <button
        onClick={() => {
          addNewTodo(inputValue);
        }}
      >
        add todo
      </button>
    </div>
  );
}

export function foo() {}
export function foo2() {}

export default App;
