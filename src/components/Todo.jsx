import React, { useContext } from 'react'
import {BsPen,BsTrash} from "react-icons/bs"
import {BsPencilSquare} from "react-icons/bs"
import { context } from '../context/TodoContext'

const Todo = ({todo,edit}) => {

    const {todoDelete,editTodo,todoEdit} = useContext(context);
console.log(todo);
  return (
    <div className='todo'>
      <p className={todo.completed ? "completed" : ""}>{todo.value}</p>
      <div className='todoIcons'>
        <BsPencilSquare onClick={()=>todoEdit(todo.id)}/>
        <BsPen onClick={()=>editTodo(todo.id)}/>
        <BsTrash onClick={()=>todoDelete(todo.id)}/>
      </div>
    </div>
  )
}

export default Todo