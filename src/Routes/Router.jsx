import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../pages/Home';
import CategoryNews from '../pages/categoryNews';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../Layouts/AuthLayout'

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      { path: "/", Component: Home },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader:()=>fetch("/news.json")
      }
    ]
  },
  {
    path:'/auth',
    Component: AuthLayout,
    children:[
      {
        path:"/auth/login",
        Component:Login
      },
      {
        path:"/auth/registher",
        Component:Register
      }
    ]
  }
])

export default router;