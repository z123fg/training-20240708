import { createContext, useState } from "react";

export const TodoContext = createContext({});

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const deleteHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addNewTodo = (newTodoValue) => {
    const newTodos = [...todos, { id: todos.length + 1, title: newTodoValue }]; // immutable
    setTodos(newTodos);
  };
  return (
    <TodoContext.Provider value={{ todos, deleteHandler, addNewTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
