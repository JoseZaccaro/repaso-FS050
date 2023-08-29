import React, { useState, useEffect } from 'react'
import ListadoDeMentores from './pages/ListadoDeMentores.jsx'
import MainLayout from './layouts/MainLayout';
import Contador from './pages/Contador';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Contador />,
      },
      {
        path: '/lista',
        element: <ListadoDeMentores />,
      },
      {
        path: '/lista/:valor',
        element: <ListadoDeMentores />,
      },
    ]
  },
  // {
  //   path: '/',
  //   element: <Contador />,
  // },
  // {
  //   path: '/lista',
  //   element: <MainLayout> <ListadoDeMentores /> </MainLayout>,
  // },

])

function App(props) {

  // estado[0]
  // estado[1]

  // useEffect(() => {
  //   console.log('me monte App');
  //   console.log('me actualice App');
  //   return () => {
  //     console.log('me desmonte App');
  //   }
  // }, [count])

  // useEffect(() => {
  //   console.log('me actualice App');

  // }, [count])

  // console.log("fuera", count)


  return (
    // <MainLayout>
    <RouterProvider router={mainRouter} />

  )
}

export default App
