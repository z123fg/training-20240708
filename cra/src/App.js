import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo/Todo";

// jsx - syntax sugar, createElement()
// virtual dom - a representation of the real DOM, saved in the memory, and it's synced with the real DOM. When an update happens, react will generate a new version of the virtual DOM, and compare it (using diffing algorithm) with the previous virtual DOM, React will update the real DOM, where changes happened only

// babel - compiler
// webpack
// class/functioanl component

// props

// React fragment

// conditional rendering

const todos = [
  { title: "first todo" },
  { title: "second todo" },
  { title: "third todo" },
];

function App() {
  const deleteHandler = () => {
    console.log("delete");
  };

  const flag = false;

  return (
    <div>
      <TodoForm />
      {flag
        ? todos.map((todo) => {
            return <Todo title={todo.title} deleteHandler={deleteHandler} />;
          })
        : null}
      {/* <Todo title="first todo" />
      <Todo title="second todo" />
      <Todo title="third todo" /> */}
    </div>
  );
}

function TodoForm() {
  return (
    <div>
      <input />
      <button>add todo</button>
    </div>
  );
}

export function foo() {}
export function foo2() {}

export default App;
