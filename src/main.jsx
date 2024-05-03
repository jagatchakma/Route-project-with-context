import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import MainPage from './MainPage/MainPage.jsx';
import Page2 from './pages/Page2/Page2.jsx';
import Page3 from './pages/Page3/Page3.jsx';
import Page4 from './pages/Page4/Page4.jsx';
import Page5 from './pages/Page5/Page5.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: ()=> fetch("https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json")
        loader: ()=> fetch("data.json")
      },
      {
        path: '/page2',
        element: <Page2></Page2>
      },
      {
        path: '/page3',
        element: <Page3></Page3>
      },
      {
        path: '/page4',
        element: <Page4></Page4>
      },
      {
        path: '/page5',
        element: <Page5></Page5>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
