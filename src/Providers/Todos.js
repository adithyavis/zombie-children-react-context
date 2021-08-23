import React, { useContext, createContext, useState } from "react";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [value, setValue] = useState({
    todos: [{ id: "1", content: "Item 1" }],
    deleteTodo: (targetId) => {
      setValue((prevValue) => ({
        ...prevValue,
        todos: prevValue.todos.filter(({ id }) => id !== targetId)
      }));
    }
  });

  // value={{todos, deleteTodo}} creates new object
  // for value. Hence, we lift the value into the value state.
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodosContext);
};
