import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.js';
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom" ; 
import Home from "./pages/Home" ; 
import Search from './pages/Search';
import {Link} from "react-router-dom" ; 
import reducer , {initialState} from "./reducer" ; 
import { StateProvider } from './StateProvider';
import SearchPage from './pages/SearchPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("shit ") ; 

const AppLayout = () => {
  return (
    <div>
        <StateProvider initialState={initialState} reducer = {reducer} >
           <Outlet/>
        </StateProvider>
    </div>
  )
}

const hideButtons = false ; 
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
              // element : <h1>This is the search page</h1>
              element: <SearchPage hideButtons = {hideButtons}/>
          } 
      ]
  }
]) ; 

root.render(<RouterProvider router = {appRouter} />)
