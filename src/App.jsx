import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainP from './components/Pages/MainP';
import SubP from './components/Pages/SubP';

const router = createBrowserRouter([ //Creating the router
  {//Main page
    path: '/',
    element: <MainP />,
    errorElement: <MainP />
  },

  {//Subpages, id dependent
    path: '/veranstaltung/:id',
    element: <SubP />
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;