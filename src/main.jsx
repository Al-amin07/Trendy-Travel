import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import AddTourist from "./Components/AddTourist.jsx";
import AllTourist from "./Components/AllTourist.jsx";
import MyList from "./Components/MyList.jsx";
import Private from "./Components/Private.jsx";
import AllTourDetails from "./Components/AllTourDetails.jsx";
import CardDetails from "./Components/CardDetails.jsx";
import ListUpdate from "./Components/ListUpdate.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/addTourist',
        element: <Private><AddTourist></AddTourist></Private>
      },
      {
        path: '/allTourists', 
        element: <AllTourist></AllTourist>,
        loader: () => fetch('http://localhost:5000/tourists')
      },
      {
        path: '/myList',
        element: <Private><MyList></MyList></Private>
      },
      {
        path: '/details/:id',
        loader: ({params}) => fetch(`http://localhost:5000/tourists/${params.id}`),
        element: <AllTourDetails></AllTourDetails>
      },
      {
        path: '/cardDetails/:id',
        element: <CardDetails></CardDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/tourists/${params.id}`)
      },
      {
        path: '/update/:id',
        loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`),
        element: <Private><ListUpdate></ListUpdate></Private>,
      }
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
