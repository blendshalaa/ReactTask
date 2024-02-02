/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import React from "react";
import '../App.css';


function NotFoundPage(){
    return(
        <> 
    <div>404 Not Found</div>
    <Link to="/">Home from Link</Link>
</>
    )
}




export default NotFoundPage