import { useState } from 'react'
//You need to mention the hook that you are using inside the curly braces like Use state
import './App.css'


function App() {

let [Counter,setCounter]= useState(15)

//Counter is a default value and here it is set to 15
//setCounter is a function in which we are setting the value of counter
  
const addValue = ()=>{
    
    
   
    if(Counter<20){
      Counter=Counter+1;
     setCounter(Counter);
    /*
    setCounter(prevCounter=> prevCounter +1)
     setCounter(prevCounter=> prevCounter +1)
       setCounter(prevCounter=> prevCounter +1)
         setCounter(prevCounter=> prevCounter +1)
        */
    }
  }
 
const removeValue = ()=>{


  if(Counter>0){
  Counter= Counter - 1;
  setCounter(Counter);
  /* setCounter(prevCounter=> prevCounter -1)
   setCounter(prevCounter=> prevCounter -1)
   setCounter(prevCounter=> prevCounter -1)
   setCounter(prevCounter=> prevCounter -1)
   */


  }
}

  return (
    <>
    <h1> Sunday is Funday</h1>
    <h2>Counter value: {Counter}</h2>
    <button
    onClick ={addValue}
    > Add value {Counter}</button>
    <br />
    <button
      onClick ={removeValue}>
      remove value {Counter} </button>
    </>
  )
}

export default App


