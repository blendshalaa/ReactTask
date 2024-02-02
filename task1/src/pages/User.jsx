/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import '../App.css';

function User(){

    const[users,setUsers]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')
       .then (res=>setUsers(res.data))
        .catch(err=>console.log('Error fetching users:',err));
    },[]);

    return(
        <>
            <div className="table">
                <h1>Users:</h1>
                <ul>
                    {users.map(user=>(
                        <li key={user.id} className="tableItem">{user.name} </li>
                    ))}
                </ul>

            </div>

        </>
    )
}

export default User