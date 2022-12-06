import React, { useEffect } from 'react'
import { useTodoList } from '../hooks/useTodoList'
import { FormAddTodo } from './FormAddTodo'
import { TodoList } from './TodoList'

export const Todos = () => {

    const { todos, handleAddTodo, handleDeleteTodo, handleToggleTodo, totalTodos, pendingTodos } = useTodoList()

    return (
        <>
            <h1 className='text-center'>Listado de tareas</h1>
            <p className='h6'>Total de todos: {totalTodos}</p>
            <p className='h6'>Todos pendientes: {pendingTodos}</p>

            {/* FORMULARIO */}
            <section className='my-5'>
                <h2>Añadir Todo</h2>
                <FormAddTodo onNewTodo={handleAddTodo} />
            </section>



            {/* TODOLIST */}
            <section className='my-5'>
                <h2>Mostrar tareas</h2>
                <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
            </section>

            {/* TODOITEMS */}
        </>
    )
}
