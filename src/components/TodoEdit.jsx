import React, { useContext }  from 'react'
import { context } from '../context/TodoContext'
import { useState } from 'react'


const TodoEdit = ({edit}) => {
const {handleSubmitEdit,handleChangeEdit,inputValueEdit,setInputValueEdit} = useContext(context)

// setInputValueEdit(edit.value)


console.log(edit);
  return (
    <>
    <form onSubmit={handleSubmitEdit} className='todoForm'>
       <input value={edit.value} onChange={handleChangeEdit} className='todoInput' type="text" placeholder='Update Task'/>
       <button className='todoBtn'>Update Task</button>
    </form>

    </>


  )
}

export default TodoEdit