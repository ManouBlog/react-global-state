import { createContext, useReducer } from "react";

export const TodoContext = createContext(null);

const todosInitialState = {
  todos: [
    { id: 1, text: "Méditation" },
    { id: 2, text: "Café" },
    { id: 3, text: "coder" },
  ],
};

function todosReducer(state, action) {
  switch (action.type) {
    case "delete":
      let filterTodo = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: filterTodo };
    case "Add":
      let addTodo = [...state.todos, action.payload];
        return { ...state, todos: addTodo };
    case "edit":
      let editIndexTodo = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      console.log("editIndexTodo", editIndexTodo);
      console.log("action.payload", action.payload);
      let updateTodo = [
        ...state.todos.slice(0, editIndexTodo),
        action.payload,
        ...state.todos.slice(editIndexTodo + 1),
      ];
      console.log("updateTodo", updateTodo);
      return { ...state, todos: updateTodo };
    default:
      return todosInitialState;
  }
}
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
