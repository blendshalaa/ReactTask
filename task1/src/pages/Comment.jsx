/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import '../App.css';
import axios from "axios";
import { useEffect } from "react";

function Comment(){
    const[comments,setComments]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
       .then (res=>setComments(res.data))
        .catch(err=>console.log('Error fetching comments:',err));
    },[]);
    

    return(
        <>
        <div className="table">
            <h1>Comments :</h1>
            <ul>
               {comments.map(comment=>(
                <li key={comment.id} className="tableItem">{comment.name}</li>
               ))}
            </ul>

        </div>
    
        
        
        </>
    )
}
export default Comment