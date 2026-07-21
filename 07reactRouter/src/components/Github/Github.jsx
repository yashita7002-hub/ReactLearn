import React from 'react'
import {useState, useEffect} from 'react'
import {useLoaderData} from 'react-router-dom'
//useLoaderData is a hook provided by react router dom itself.

function Github(){

    const data = useLoaderData()
    console.log(data)
        return(
        <div className='text-center m-4 bg-orange-700 text-white p-4 text-3xl '>
        Github followers: {data.followers}
        <img className='text-center' src={data.avatar_url}
        alt="Git picture" width={300} />
        
        </div>
    )
}

export default Github

export const githubInfoLoader = async ()=> {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}

//If data belongs to a route/page, use loader
// If data belongs to a component action, use useEffect
 
/*
  const [data, setData] = useState([])

    useEffect(()=>{
         fetch('https://api.github.com/users/hiteshchoudhary')
         .then(response => response.json())
         .then(data =>{
            console.log(data);
            setData(data)
         })
    },[])

*/