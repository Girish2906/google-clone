import './App.css';
import Home from "./pages/Home" ; 
import Search from "./pages/Search" ; 
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom" ; 

console.log("fuck that") ; 

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
              element : <Search/>
          } 
      ]
  }
]) ; 

export default App;
