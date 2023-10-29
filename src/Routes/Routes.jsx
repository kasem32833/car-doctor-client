import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../assets/Pages/Home/Home";
import Login from "../assets/Pages/Login/Login"
import Register from "../assets/Pages/Register/Register"
import AboutUs from "../assets/Pages/AboutUs/AboutUs";
import Services from "../assets/Pages/Services/Services";

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
          element: <Services></Services>
        }
      ]
    },
  ]);

  export default router