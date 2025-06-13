import { createBrowserRouter } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Register from "../Auth/Register";
import Login from "../Auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
