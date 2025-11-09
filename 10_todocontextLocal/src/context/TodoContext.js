import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
    {
        id : 1,
        todo : "test",
        completed: false,
    }
],
addTodo : (todo) => {},
updateTodo : (id, todo) => {},
deleteTodo : (id) => {},
toggleComplete : (id) => {}, 

})

export const TodoProvider = TodoContext.Provider

export const Usetodo = () => {
    return useContext(TodoContext)
}