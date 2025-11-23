import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../pages/Home';
import CategoryNews from '../pages/categoryNews';

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
  }
])

export default router;