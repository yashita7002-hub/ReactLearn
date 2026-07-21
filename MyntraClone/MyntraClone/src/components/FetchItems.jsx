import {useSelector} from "react-redux";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store/itemSlice";

import { fetchStatusActions } from "../store/fetchStatusSlice";




const FetchItems = () =>{
const fetchStatus =  useSelector((store) => store.fetchStatus);
const dispatch = useDispatch();
console.log(fetchStatus)


useEffect(()=>{

       if(fetchStatus.fetchDone)
                   return ;
   
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8081/items",{signal})
    .then((res)=>res.json())
    .then(({items})=>{
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.marKFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
    });
 

    return ()=>{
    
        controller.abort();
    };
},[fetchStatus]);











return (<>

<div>
     Fetch Done : {fetchStatus.fetchDone}
     Currently Fetching: {fetchStatus.currentlyFetching}
</div>






</>
)};

export default FetchItems;