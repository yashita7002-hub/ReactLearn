import './App.css'
import Card from './components/Card'

function App(){

let myObj={
  username:' Yashita',
  age: 21
}

let myArr=[1,2,3]
  
  return (
    <>
<h1 className="bg-green-300 text-black p-4 rounded-2xl w-[1000px]"> Tailwind CSS </h1>
    
< Card username="Riya"    someObj ={myObj}    someArr={myArr} btnText="click me"/>

< Card username="Yashita" btnText ="visit me"/>
    </>
  )
}

export default App
//Above we are passing the object by storing it in a variable and we are passing the array also in a variable.