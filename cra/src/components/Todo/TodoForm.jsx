import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

export default function TodoForm({ addNewTodo }) {
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
