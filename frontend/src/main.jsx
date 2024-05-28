import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, BrowserRouter, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Login from '../pages/Login.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: < Layout />,
//     children: [{
//       path: '',
//       element:<Home/>
//     },
//     {
//       path: 'about',
//       element:<About/>
//     }]
    
  
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='login' element={<Login/>} />
      {/* <Route to='register' element={<Home/>} /> */}
      
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,

)
