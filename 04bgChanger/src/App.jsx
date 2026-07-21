import { useState } from "react";


/*Code	Meaning
setColor	function reference
setColor()	function call
() => setColor()	function wrapper
() => setColor("red")	callback with arguments

onClick expects a function reference. Writing setColor() executes the function immediately and passes its return value, so we wrap it in an arrow function to defer execution until the click event occurs.
*/
function App() {
  const [color, setColor] = useState("black ");

  return (
    <div 
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-3">
        <div className="flex flex-wrap justify-between gap- bg-white px-4 py-3 rounded-3xl">
        <button
           onClick={() => setColor("violet")}
           className ="outline-2 px-4 py-2 m-2 rounded-full text-black shadow-lg"
           style={{backgroundColor: "violet"}}

       >Violet</button>

        <button
           onClick={() => setColor("Indigo")}
           className ="outline-2 px-4 py-2 rounded-full m-2 text-black shadow-lg"
           style={{backgroundColor: "indigo"}}

       >Indigo</button>


    <button
           onClick={() => setColor("Blue")}
           className ="outline-2 px-4 py-2 rounded-full m-2 text-black shadow-lg"
           style={{backgroundColor: "blue"}}

       >Blue</button>

    <button

           onClick={() => setColor("Green")}
           className ="outline-2 px-4 py-2 rounded-full m-2 text-black shadow-lg"
           style={{backgroundColor: "Green"}}

       >Green</button>

    <button
           onClick={() => setColor("Yellow")}
           className ="outline-2 px-4 py-2 rounded-full m-2 text-black shadow-lg"
           style={{backgroundColor: "Yellow"}}

      >Yellow</button>

    <button
           onClick={() => setColor("Orange")}
           className ="outline-2 px-4 py-2 rounded-full m-2  text-black shadow-lg"
           style={{backgroundColor: "Orange"}}

       >Orange</button>

    <button
           onClick={() => setColor("red")}
           className ="outline-none px-4 py-2 rounded-full m-2  text-black shadow-lg"
           style={{backgroundColor: "red"}}

       >Red</button>
      </div>
      </div>
      
    </div>
  );
}

export default App;
