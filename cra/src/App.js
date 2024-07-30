import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo/Todo";
import { useState } from "react";
import Counter from "./components/Counter/Counter";

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
  const deleteHandler = () => {
    console.log("delete");
  };

  const addNewTodo = (newTodoValue) => {
    const newTodos = [...todos, { title: newTodoValue }];
    setTodos(newTodos);
  };

  const flag = true;

  return (
    <div>
      <TodoForm addNewTodo={addNewTodo} />
      {flag
        ? todos.map((todo, index) => {
            return (
              <Todo
                title={todo.title}
                deleteHandler={deleteHandler}
                key={index}
              />
            );
          })
        : null}
      {/* <Todo title="first todo" />
      <Todo title="second todo" />
      <Todo title="third todo" /> */}
      <Counter />
    </div>
  );
}

function TodoForm({ addNewTodo }) {
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
