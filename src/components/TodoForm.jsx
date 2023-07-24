import React, { useContext }  from 'react'
import { context } from '../context/TodoContext'


const TodoForm = () => {

 const {handleSubmit,handleChange,item} = useContext(context)


  return (
    <>
    <form onSubmit={handleSubmit} className='todoForm'>
       <input value={item.value} onChange={handleChange} className='todoInput' type="text" placeholder='What is a task today'/>
       <button className='todoBtn'>Add Task</button>
    </form>

    </>


  )
}

export default TodoForm