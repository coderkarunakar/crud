import React from "react";
import "../adduser/add.css";
import { useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
 const Edit =() => {
    const users = {
        fname : "",
        lname : "",
        email : ""
    }
    //with the help of useParams we can fetch the id of the http url
    const {id} = useParams();
    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputChangeHandler = (e) =>{
        //it extracts the entered value
        const {name,value} = e.target;
        setUser({...user,[name]:value});
        console.log(user);
    }


    //this method will hit(render) after every id value changes
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getallbyId/${id}`).then((response)=>{
            setUser(response.data.data);
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    },[id]);



const submitForm = async(e) =>{
     //stops default behaviour of like page refresh, navigation, form submission
     e.preventDefault();
     await axios.put(`http://localhost:8000/api/update/${id}`,user)
     .then((response) => {
         toast.success(response.data.msg,{position:"top-right"});
         console.log(response);
         //after succesful creation it navigates to the home page
         navigate("/");
     }).catch((error) => {
         console.log(error);
     })
     
}

    return(
        <div className="addUser">
        {/* this will make the link to move back */}
    <Link to="/">Back</Link>   
    <h3>Update User</h3>  
    <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
            {/* just creating a form */}
            {/* label is used to describe a form input, htmlfor links it to an input id so clicking label focuses the input */}
            {/* htmlFor id after clicking it focues on input box */}
            {/* this autocomplete when we saved previous value like name, email,password it autosugges when we hover on input box if we turn on */}
            <label htmlFor="fname">First Name</label>
            <input type="text" value={user.fname}  onChange = {inputChangeHandler} id="fname" name="fname" autoComplete="on" placeholder="first Name"></input>
        </div> 
        <div className="inputGroup">
            <label htmlFor="lname">LastName</label>
            <input type="text" id="lname"  value={user.lname} onChange = {inputChangeHandler} name="lname" autoComplete="off" placeholder="LastName"></input>
        </div>
        <div className="inputGroup">
            <label htmlFor="email">email</label>
            <input type="email" value={user.email}  id="fname" onChange = {inputChangeHandler} name="email" autoComplete="off" placeholder="emailName"></input>
        </div>
        <div className="inputGroup">
        <button type="submit">Update User</button>
        </div>
    </form>
    </div>
    )
 }
 export default Edit;