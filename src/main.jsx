import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';

import ListedBooks from './Component/ListedBooks/ListedBooks';
import PagesToRead from './Component/PagesToRead/PagesToRead';
import Root from './Component/Root/Root';
import BookDetail from './Component/BookDetail/BookDetail';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        loader:()=> fetch('/public/json.json'),
        element:<Home></Home>
      },
      {
        path:"/listed",
        loader:()=> fetch('/public/json.json'),
        element:<ListedBooks></ListedBooks>
      },
      {
        path:"/read",
        element:<PagesToRead></PagesToRead>
      },
      {
        path:"/book/:id",
        loader:()=>fetch('/public/json.json'),
        element:<BookDetail></BookDetail>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
