//funcion que se va a encargar del funcionamiento de los todos

import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todoCollection')) || [];
}

export const useTodoList = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todoCollection', JSON.stringify(todos))
    }, [todos])

    const handleAddTodo = (newTodo) => {
        console.log('add todo hola', newTodo);
        const action = {
            type: '[TODO] add-todo',
            payload: newTodo
        };

        dispatch(action);

    };

    const handleDeleteTodo = (id) => {
        console.log('remove todo', id);
        const action = {
            type: '[TODO] delete-todo',
            payload: id
        };

        dispatch(action);
    };


    const handleToggleTodo = (id) => {
        console.log('toggle todo', id);
        const action = {
            type: '[TODO] toggle-todo',
            payload: id
        };

        dispatch(action);
    };






    return {
        todos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
        totalTodos: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length
    }
}
