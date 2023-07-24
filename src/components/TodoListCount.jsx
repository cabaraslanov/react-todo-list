import React, { useContext } from 'react'
import { context } from '../context/TodoContext'

const TodoListCount = () => {

    const {listCount,completedCount,allDelete} = useContext(context);


  return (
    <div className='TodoListCount'>
        <div className='TodoList'>List: {listCount}</div>
        <div className='TodoCompleted'>Completed: {completedCount}</div>
        <button onClick={allDelete} className='AllDelete'>AllDelete</button>
    </div>
  )
}

export default TodoListCount;