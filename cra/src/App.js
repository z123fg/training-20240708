import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo/Todo";
import { useContext, useEffect, useState } from "react";
import Counter from "./components/Counter/Counter";
import TodoContextProvider, { TodoContext } from "./context/TodoContext";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import TodoApp from "./components/Todo/TodoApp";
// import Link from "./components/Routing/Link";
// import Routes from "./components/Routing/Routes";
// import Route from "./components/Routing/Route";
import { Link, Route, Routes } from "react-router-dom";

// jsx - syntax sugar, createElement()
// virtual dom - a representation of the real DOM, saved in the memory, and it's synced with the real DOM. When an update happens, react will generate a new version of the virtual DOM, and compare it (using diffing algorithm) with the previous virtual DOM, React will update the real DOM, where changes happened only. The process React uses to update the actual DOM is called reconciliation.

// babel - compiler
// webpack
// class/functioanl component

// props

// React fragment

// conditional rendering

// BrowserRouter - using contextAPI, store the current path, provide the routing context
// Link - anchor tag, nagivate to another path
// Route - render the element for the path
// Routes - find the route that matches the current path

// history - no reload, use relative pathname
// go, back, pushState, replaceState

// location - cause reload, use full url
// assign, reload, replace

// why we need router
// spa, navigation will not cause reload
// to use url access a specific page, we need have access to the history feature

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <TodoContextProvider>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
      <div>
        {/* {show && <ClassComponent title="class component" />}
      <button onClick={() => setShow(!show)}>toggle show</button> */}

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/todo/test" element={<h1>Test</h1>} />
          <Route path="/todo/:id" element={<TodoApp />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
        {/* <TodoApp /> */}
      </div>
    </TodoContextProvider>
  );
}
