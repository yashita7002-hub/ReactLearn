import React from 'react'

function TodoForm1() {
    [Todo,setTodo] = useState("")
  return (
    <>
    <div className="">
       <input 
       type= 'text'
       placeholder='Write a todo...'
       className=''
       value={todo}
       onChange={(e)=>setTodo(e.target.value)}


       









       />
    </div>
    <div className="">
        Add
    </div>
    </>
  )
}

export default TodoForm1