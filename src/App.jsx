import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import MainP from './components/Pages/MainP';
import SubP from './components/Pages/SubP';
import Sidebar from './components/Navigation/Sidebar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainP />,
    errorElement: <MainP />
  },
  {
    path: '/veranstaltung',
    element: <SubP />,
    children: [
      {
        path: '/veranstaltung/:id',
        element: <Header />
      }]
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;