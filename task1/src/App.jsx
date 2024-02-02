/* eslint-disable no-unused-vars */

import './App.css'
import HomePage from './pages/HomePage'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import User from './pages/User';
import Comment from './pages/Comment';
import Post from './pages/Post';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  const router=createBrowserRouter([{
    path:'/',
    element:<HomePage/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:'/users',
    element:<User/>
  },
  {
    path:'/comments',
    element:<Comment/>
  }
  ,{
    path:'/posts',
    element:<Post/>
  }


]);


  return (
    
      <div>
     <RouterProvider router={router}/>
     

        </div>


      
    
  )
}

export default App
