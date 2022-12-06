import React from 'react'

export const TodoItem = ({ todo: todoItem, onDeleteTodo, onToggleTodo }) => {

  const { id, todo, description, done } = todoItem;

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <div style={{color: done && 'grey'}}>
        <strong>{todo}</strong>-<span>{description}</span>
      </div>

      <div>
        <button className={`${done ? 'btn-success':'btn-dark'} btn me-2 btn-sm`} onClick={() => onToggleTodo(id)}>{done ? 'finalizada' : 'pendiente'}</button>
        <button className='btn btn-dark me-2 btn-sm' onClick={() => onDeleteTodo(id)}><i className="bi bi-trash"></i></button>
      </div>

    </li>
  )
}
