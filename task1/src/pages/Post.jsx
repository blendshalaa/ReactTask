/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import '../App.css'
import { useEffect } from "react";

function Post(){
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
       .then (res=>setPosts(res.data))
        .catch(err=>console.log('Error fetching posts:',err));
    },[]);

    return(
        <>
        <div className="table">
            <h1>Posts:</h1>
            <ul>
                {posts.map(post=>(
                    <li key={post.id} className="tableItem">{post.title}</li>
                ))}
            </ul>
        </div>

        </>
    )

}
export default Post