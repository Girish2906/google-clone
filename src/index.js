import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.js';
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom" ; 
import Home from "./pages/Home" ; 
import Search from './pages/Search';
import {Link} from "react-router-dom" ; 

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("shit ") ; 

const AppLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
      path: "/", 
      element: <AppLayout/> , 
      children: [
          {
              path: "/" , 
              element : <Home/>
          } ,
          {
              path: "/search" , 
              element : <h1>This is the search page</h1>
          } 
      ]
  }
]) ; 

root.render(<RouterProvider router = {appRouter} />)
