import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import Bag from './routes/Bag.jsx'
import React from 'react'
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.jsx";
import {Provider} from "react-redux";
import myntraStore from "./store/index.js"

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
          <Route path='' element={<Home />}/>
      
         <Route path='/bag' element={<Bag />}/>
      

    </Route>
  )
)




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store ={myntraStore}>
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
);
