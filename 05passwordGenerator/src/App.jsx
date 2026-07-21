import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'
//We are using callback over here for optimisation. To store the functions and values in cache not memory.
//We are using use effect for changes on the ui. It is responsible for running the code
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const [password,setPassword]  = useState("")


  //useRef Hook
  //During rendering, useRef gets attached (connected) to the <input> via the ref attribute.
//Later, when copyPasswordToClipboard runs, it uses that ref to access the DOM element
  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0,3)

    window.navigator.clipboard.writeText(password)
    //window is not available on server in node js
  },
   [password])



  const passwordGenerator = useCallback( ()=>{ 
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+= "012356789";
    if(charAllowed) str+= "!@#$%^&()_-+=[]{}~`'"


    for(let i=1;i<=length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    } 

      setPassword(pass)

  },
  [length,numberAllowed,charAllowed,setPassword])
//if you would have passed Password over here, you would have gone into infinite loop. It would be better to write setPassword so that password gets set

 
  useEffect(()=>{
    passwordGenerator()
  },
   [length,numberAllowed,charAllowed,setPassword])
   //If you will write only passwordGenerator() then it will not work so we used Use Effect.




  return (
    < >
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px- my-8 text-orange-500 bg-slate-600 ">
           <h1 className="text-yellow-500 text-center text-2xl pt-5">Password Generator</h1>
           <div className="flex shadow rounded-lg px-4 mt-8 overflow-hidden mb-4">
             <input 
              type="text" 
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly  
              ref={passwordRef}      
             />
             <button
              onClick={copyPasswordToClipboard}
              className="outline-none bg-blue-700 text-white 
              px-3 py-0.5 shrink-0 ">COPY
             </button>
            </div>


             <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1 px-4 mt-11 pb-8">
              <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
            
            
              />
              <label> Length: {length}</label>
           </div>


 
             <div className="flex items--center gap-x-1 mt-11 pb-8">
              <input 
                type="checkbox"
                defaultChecked ={numberAllowed}
                id="numberInput"
                onChange={()=> {
                setNumberAllowed((prev)=> !prev);
                //setNumberAllowed(true)
                //If we did this then our setNumberAllowed will be set to true only and will not change on next command
                }}
              />

             <label htmlFor="numberInput">Numbers</label>
            </div>


            <div className="flex items-center gap-x-1 mt-11 pb-8">
             <input
               type="checkbox"
               defaultChecked={charAllowed}
               id="characterInput"
               onChange={() => {
               setCharAllowed((prev) => !prev )
              }}
             />

             <label htmlFor="characterInput">Characters</label>
             </div>
      </div>
    </div>
    </>
  )
}

export default App


/*USE EFFECT
Its job is to automatically generate a new password whenever the UI options change.

Those UI options are:

length

numberAllowed

charAllowed


React first renders the UI:

slider

checkboxes

input field

At this time:
❌ passwordGenerator() is NOT called during render



“Okay, UI is ready. Now I’ll run this effect.”

So:
✅ A password is generated
✅ setPassword(pass) updates state
✅ UI updates with the new password



❌ If you write this directly:
passwordGenerator()


Inside the component body, this would:

Run on every render

Call setPassword

Trigger another render

Cause infinite loop

🚨 React crash

✅ Correct way → useEffect

useEffect:

Runs after render

Runs only when dependencies change

Perfect for side-effects like:

generating password

updating state based on other states







/*During rendering, useCallback memorizes the function reference based on its dependencies.
After rendering, useEffect runs, and when it calls that function, the cached version from useCallback is executed.*/