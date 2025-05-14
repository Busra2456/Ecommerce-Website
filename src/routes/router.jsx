import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import About from "../pages/Homes/About/About";
import Login from "../pages/Homes/Login/Login";
import SignUp from "../pages/Homes/SignUp/SignUp";

const router = createBrowserRouter([
      {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                  path:'/',
                  element:<Home></Home>
            },
            {
              path:'/About',
              element:<About></About>
            },
            {
              path:'/Login',
              element:<Login></Login>
            },
            {
              path:'/SignUp',
              element:<SignUp></SignUp>
            }
        ]
      },
    ]);

    export default router;