import {useEffect, useState} from "react"
//custom hook
//useEffect is used whenever we want to execute a function/hook after rendering.
function useCurrencyInfo(currency){

    const [data,setData] = useState({})


        useEffect(()=>{
         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
         .then((res)=> res.json() )
         .then((res)=> setData(res[currency]))
        },[currency])

        return data;
}


export default useCurrencyInfo;