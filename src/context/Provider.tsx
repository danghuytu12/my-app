import React, { useState } from "react";

export const Context = React.createContext({});

const Provider = (props: any) => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Shopping", completed: false },
    { id: 2, name: "Tidying up", completed: false }
  ]);

  const toggleTodo = (id: any) => {
    const modifiedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    setTodos(modifiedTodos);
  };

  return (
    <Context.Provider
      value={{
        todos,
        toggleTodo: (id: any) => toggleTodo(id)
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default Provider;
