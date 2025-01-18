import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'
import Contact from './Component/Contact/Contact'


export default function App() {
  const router = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },

      ]
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
