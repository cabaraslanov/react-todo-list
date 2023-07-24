import React, { useContext, useEffect } from 'react'
import TodoForm from './TodoForm'
import { context } from '../context/TodoContext'
import Todo from './Todo'
import TodoListCount from './TodoListCount'
import TodoEdit from './TodoEdit'



const TodoWrapper = () => {

  const {todos,setTodos,setInputValue} = useContext(context);


  return (
    <div className='TodoWrapper'>
      
      <h2>Todo App</h2>
      <TodoForm />
  
  {
    todos.length != 0 ? (
      <>
      {
        
        todos?.map((todo,index)=>(
          todo.isEditing ? 
          (<TodoEdit edit={todo}/>) 
          :
          (<Todo key={index} todo={todo}/>)
        ))
      }
      </>
    )

     : (<marquee className='listBosdur'>List Empty</marquee>)
  }
    <TodoListCount />



    </div>
  )
    

}

export default TodoWrapper

{/* <TodoForm />
{
  todos?.map((todo,index) =>(            
      <Todo todo={todo} key={index}/>
  ))
} */}