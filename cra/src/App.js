import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo/Todo";
import { useContext, useEffect, useState } from "react";
import Counter from "./components/Counter/Counter";
import TodoContextProvider, { TodoContext } from "./context/TodoContext";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import TodoApp from "./components/Todo/TodoApp";

// jsx - syntax sugar, createElement()
// virtual dom - a representation of the real DOM, saved in the memory, and it's synced with the real DOM. When an update happens, react will generate a new version of the virtual DOM, and compare it (using diffing algorithm) with the previous virtual DOM, React will update the real DOM, where changes happened only. The process React uses to update the actual DOM is called reconciliation.

// babel - compiler
// webpack
// class/functioanl component

// props

// React fragment

// conditional rendering

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <TodoContextProvider>
      <div>
        {/* {show && <ClassComponent title="class component" />}
      <button onClick={() => setShow(!show)}>toggle show</button> */}

        <TodoApp />
      </div>
    </TodoContextProvider>
  );
}
