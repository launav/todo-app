import React, { useRef } from 'react'

export const FormAddTodo = ({ onNewTodo }) => {

    const inputRef = useRef();
    const textRef = useRef();

    const resetForm = () => {
        inputRef.current.value = '';
        textRef.current.value = '';
    };

    const handleAddTodo = (ev) => {
        ev.preventDefault();

        if (inputRef.current.value.trim().length <= 1) return;


        const newTodo = {
            id: Date.now(),
            todo: inputRef.current.value,
            description: textRef.current.value,
            done: false,
            date: new Date()
        };

        onNewTodo(newTodo);

        resetForm();

        // console.log(inputRef.current.value)
        // console.log(ev.target.tarea.value)
    };



    return (
        <form onSubmit={handleAddTodo} autoComplete='off'>
            <input
                type="text"
                name='tarea'
                id='tarea'
                placeholder='Añadir tarea'
                className='form-control mb-2'
                ref={inputRef} />

            <textarea
                name="descripcion"
                id="descripcion"
                className='form-control mb-2'
                rows="5"
                placeholder='Descripción de la tarea'
                ref={textRef} />

            <div className='d-grid'>
                <button type='submit' className='btn btn-dark'>Añadir Todo</button>
            </div>
        </form>
    )
}
