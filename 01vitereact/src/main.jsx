import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import React from 'react'
import ReactDOM from 'react-dom/client'
//We are supposed to enter these two libraries so that we can access reactElement

//If we create the function that was initially created in app.jsx inside main.jsx then also the function will work properly.
function MyApp(){
  return (
    <div>
    
      <h1>Custom App!</h1>
    
    </div>
  )
  // React converts all this code into tree structure/object..why not inject my element? My element was not working cuz I created it bymyself not acc to react
  }

/*
const reactElement = {
    type:'a',
    props:{
        href: 'https://google.com',
        target: '_blank'

    },
    children: 'Click me to visit google'
}


If we write this here and enter reactElement inside createRoot like reactElement then this code will not work.
It is because of the fact that in react object/parameters that we are passing in reactElement are predefined. 
We cannot access them using ReactDOM if the text is not in predefined format.
*/


const anotherElement =(
  <a href="https://google.com"  target='_blank'>Visit google</a>
)
//To your suprise yeh chal jayega kyunki react mein issi format mein stored hai


const anotherUser = "chai aur react"
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target:'_blank'},
    'click me to visit Google',
 
//this is the pre defined syntax/way in which we can create a react element.
//This will work cuz in react the format is defined in this way basically.
         anotherUser
)
//After the injection of trees, all the variables are injected at end like (anotherUser)
//It means first this reactElement gets injected into the tree followed by variable



ReactDOM.createRoot(document.getElementById('root')).render(

    //<MyApp />
    //we can write it like My App() also



    /*   reactElement{this command creates an react element. We passed it like this because
                        it is an object} 
                        matlab jab website chalegi toh uspr https://google.comchaiaurcode likha hua aayega*/

         reactElement                                                   

)
