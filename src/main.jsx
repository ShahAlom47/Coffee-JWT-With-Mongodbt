import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

import AddCoffee from './Component/AddCoffee.jsx';
import UpdateCoffee from './Component/UpdateCoffee.jsx';
import Home from './Component/Home.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import AuthProvider from './AuthProvider.jsx';
import Users from './Component/Users.jsx';
import PrivetRoute from './Component/PrivetRoute.jsx';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/add-coffee",
    element: <PrivetRoute><AddCoffee></AddCoffee></PrivetRoute>,
  },
  {
    path: "/update-coffee/:id",
    element:<PrivetRoute> <UpdateCoffee></UpdateCoffee> </PrivetRoute>,
    loader:({params})=>fetch(`http://localhost:3000/coffee/${params.id}`)
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/users",
    element:<PrivetRoute> <Users></Users></PrivetRoute>
  },
]);

// send request cookies data in server
axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
