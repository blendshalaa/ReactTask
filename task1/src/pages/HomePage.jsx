/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";

import '../App.css';

import { Link } from "react-router-dom";


function HomePage(){


    return(
        <>
        <h1>Homepage</h1>
       
  
    
        <Link to="/users" className='btn'>Go to Users</Link>
        <Link to="/comments" className='btn'>Go to Comments</Link>
        <Link to="/posts" className='btn'>Go to Posts</Link>
      </>
    )
}
export default HomePage