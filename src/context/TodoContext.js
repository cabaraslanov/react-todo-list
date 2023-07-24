import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

export const context = createContext();

const Provider = ({ children,edit }) => {
  // todos?.map((item)=>{
  //   item.value
  // })
  const [inputValue, setInputValue] = useState("");
  const [inputValueEdit, setInputValueEdit] = useState("");
  const [todos, setTodos] = useState([]);
  const [listCount,setListCount] = useState(0)
  var   [completedCount,setCompletedCount] = useState(0)
  
  useEffect(()=>{
    const todosSaved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(todosSaved);
    const completedSaved = JSON.parse(localStorage.getItem("completed"));
    setCompletedCount(completedSaved)
    const listSaved = JSON.parse(localStorage.getItem("listSaved"));
    setListCount(listSaved)
  }, [])


  const handleSubmit = (e)=>{
    e.preventDefault();

    if(inputValue.trim() == ""){
      toast.error('List bosdur !');

    }else{
    
      setTodos([...todos,item])
      localStorage.setItem("todos",JSON.stringify([...todos,item]))
      setInputValue("");
      
      setListCount(listCount+1);
      localStorage.setItem("listSaved", JSON.stringify(listCount+1))

      toast.success('List elave edildi !');

    }
  }


  const handleChange = (e)=>{
    setInputValue(e.target.value);
  }


  const handleSubmitEdit = (e)=>{
    e.preventDefault()
    setTodos()
  }


  const handleChangeEdit = (e)=>{
    setInputValueEdit(e.target.value);
  }
  console.log(inputValueEdit);

  const todoEdit = (id) => {
    const mapTodoEdit = todos.map((item)=>{
       if (item.id === id) {
         item.isEditing = !item.isEditing;
         setInputValue(item.value)
         console.log();
       }
      
       return item
     })
     setTodos(mapTodoEdit)
     setInputValue(inputValue)
   }

  const todoDelete = (id)=>{
    let filtered = todos.filter(todo=>todo.id !== id)
    setTodos(filtered)
    // console.log(filtered,"filtered");
    setListCount(listCount-1)
    localStorage.setItem("listSaved",JSON.stringify(listCount-1))

    localStorage.setItem("todos",JSON.stringify(filtered))

    todos.map((item)=>{
      console.log(item,"item");
      if (item.id === id) {
        item.completed = item.completed;

        if(item.completed === true){
          completedCount--;
          // toast('List tamamlandi !')
        }
      }
      return item;
    })
    setCompletedCount(completedCount);

    localStorage.setItem("completed",JSON.stringify(completedCount));
  }

  const allDelete = () => {
    setTodos([]);
    // localStorage.setItem("todos",JSON.stringify(todos));
    localStorage.removeItem("todos")
    
    setListCount(0);
    localStorage.setItem("listSaved",JSON.stringify(0))
    setInputValue("");
    setCompletedCount(0)
    localStorage.setItem("completed",JSON.stringify(0));

    toast.dark('List sifirlandi!')
    



  }


  const editTodo = (id) => {
    const editFilter = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;

        if(item.completed === true){
          completedCount++;
          toast('List tamamlandi !')
        }else{
          completedCount--
 
        }
      }

      return item
    });
    setTodos(editFilter);
    localStorage.setItem("todos",JSON.stringify(editFilter))
    setCompletedCount(completedCount);
    localStorage.setItem("completed",JSON.stringify(completedCount));
  }





  // console.log(todoEdit.value);



  // const editTodoForm = (id) => {
  //   todos?.map((item)=>{
  //     if(item.id === id){
  //       item.isEditing = !item.isEditing
  //     }
  //   })
  // }


  const item = {
    id:Math.floor(Math.random()*1000),
    value:inputValue,
    completed:false,
    isEditing:false
  }

  const data = {
    handleSubmit,
    handleChange,
    handleSubmitEdit,
    handleChangeEdit,
    todoEdit,
    todos,
    setTodos,
    item,
    todoDelete,
    editTodo,
    listCount,
    completedCount,
    allDelete,
    setInputValue
    // editTodoForm
  }

  return(
    <context.Provider value={data}>
        {children}
    </context.Provider>
  )

}
export default Provider;

// const editTodoForm = (id) => {
//     setTodos(todos.map(todo=>todo.id === id ? {...todo, isEditing:!todo.isEditing} : todo))
// }

// const editTask = (id) => {
//     setTodos(todos.map(todo=>todo.id === id ? {...todo, inputValue, isEditin:!todo.isEditing} : todo))
// }

//     const data = {
//         inputValue,
//         setInputValue,
//         handleSubmit,
//         handleChange,
//         todos,
//         setTodos,
//         delet,
//         toggleCompleted,
//         // editTodoForm,
//         // editSubmit
//    }

// const handleSubmit = (e) => {
//     e.preventDefault();

//     addTodo(inputValue);

//     setInputValue("")

// }
// const handleChange = (e) => {
//     setInputValue(e.target.value);
// }

// const item = {
//     id:Math.floor(Math.random()*1000),
//     value:inputValue,
//     completed:false,
//     isEditing:false
// }
// const addTodo = ()=>{
//     setTodos([...todos,item])
//     console.log(todos);
// }

// ??? const toggleCompleted = (id) => {
//     setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
// }

// const delet = (id) => {
//    setTodos(todos.filter((filt)=>filt.id !== id));

// }
