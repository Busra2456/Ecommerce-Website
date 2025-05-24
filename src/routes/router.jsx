import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import About from "../pages/Homes/About/About";
import Login from "../pages/Homes/Login/Login";
import SignUp from "../pages/Homes/SignUp/SignUp";
import Booking from "../pages/Homes/Services/Booking";
import Bookings from "../pages/Homes/Services/Bookings";
import PrivateRoute from "./PrivateRoute";



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
            },
            {
              path:'book/:id',
              element:<PrivateRoute><Booking></Booking></PrivateRoute>,
              loader:({params}) => fetch(`http://localhost:5000/bus/${params.id}`)
      
            },

            {
              path:'/Bookings',
              element:<PrivateRoute> <Bookings></Bookings></PrivateRoute>
             
            }
            
           
           
             
           
        ]
      },
    ]);

    export default router;