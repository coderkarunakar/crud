import React, {useState, useEffect } from 'react';
import "./user.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";


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


    const deleteUser = async(userId) =>{
        //with this api the data which is in database it will be deleted but to delete in our frontend hooks we are writing logic for setUsers
            await axios.delete(`http://localhost:8000/api/delete/${userId}`)
            .then((respones)=>{
             //here userId is the thing where we want to delete , and it keeps the user.Id and removes userId from the user list,and keeping only user in the prevUser and updating the state setUsers
            //  note here in filter first it creates a duplicate then it keeps only the values which are true ,and excludes which are false thats why here we used !==,
                setUsers((prevUser)=>prevUser.filter((user)=>user._id !== userId));
                toast.success(respones.data.msg,{position:"top-right"});
                console.log(respones);
            }).catch((error)=>{
                console.log(error);
            })
        }
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
                            {/* passing id  */}
                            <button type='button' onClick={()=> deleteUser(user._id)}>
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