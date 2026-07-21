import React from 'react'

function About1() {
  return (
    <>
    <div className="">


           <div className="w-[100px]">
              <img 
                  src="https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg"
                  alt="image"
                />

          </div>



          <div className="">

           <nav>
            <ul className='list-none flex justify-around'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>GitHub</li>
            </ul>
           </nav>
        
            
          </div>



          <div className="flex flex-between ">
                  <div>
                       <p>Log in</p>
                 </div>
                 <div>
                      <button className='bg-red-600'>Get Started</button>
                 </div>
                 
             </div>


    </div>
    </>
  )
}

export default About1