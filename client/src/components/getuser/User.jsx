import React, {useState, useEffect } from 'react';
import "./user.css";
import { Link } from 'react-router-dom';
import axios from 'axios';


// our main Screen

const User = () => {
const [users,setUsers] = useState([]);
    useEffect(()=>{
        const fetchData = async() => {
           await axios.get("http://localhost:8000/api/getAll").then((respones)=>{
                setUsers(respones.data.data);
            }).catch((error)=>{
                console.log(error);
            })
        }
        fetchData();
    },[])
    return(
        <div className='userTable'>
            <Link to = {"/add"} className='addButton'>Add User</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>user Name</th>
                        <th>User Email</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>{
                            return(
                       
                    
                    <tr key={user._id || index}> 
                        <td>{index+1}</td>
                        <td>{user.fname}{user.lname}</td>
                        <td>{user.email}</td>
                        <td className='actionButtons'>
                            <button>
                                <i className="fa-solid fa-trash"></i> 
                                </button>
                           
                                  <Link to={`/edit/` + user._id}><i className="fa-solid fa-pen-to-square"></i></Link> 
                               
                            </td>
                    </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default User;