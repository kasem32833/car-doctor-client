import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../assets/Pages/Home/Home";
import Login from "../assets/Pages/Login/Login"
import Register from "../assets/Pages/Register/Register"
import AboutUs from "../assets/Pages/AboutUs/AboutUs";
import Services from "../assets/Pages/Services/Services";
import Checkout from "../assets/Pages/Checkout/Checkout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path : '/login',
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/aboutus",
          element: <AboutUs></AboutUs>
        },
        {
          path: "/services",
          element: <Services></Services>,
          loader: ()=> fetch('http://localhost:5000/services')
        },
        {
          path: "/checkout/:id",
          element: <Checkout></Checkout>,
          loader:({params})=>fetch(`http://localhost:5000/${params._id}`)
        }
      ]
    },
  ]);

  export default router