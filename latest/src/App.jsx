import {useState} from 'react'
import './App.css'

function App() {

  const name="riya";

  let [counter,setCounter]= useState(0);
  
  addValue =()=>{
    counter= counter+1;
    setCounter(counter);


  }

  removeValue =()=>{
     counter=counter-1;
     setCounter(counter);
  }

  return (
    <>
    
    <h1>Counter</h1>
    <button onClick ></button>
      </>
  )
}

export default App
