import React, { useState } from "react"
import "./add.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Add = () => {
//hooks first keeping all the object empty
    const users = {
        fname : "",
        lname : "",
        email: "",
        password : ""
    }
    const [user,setUser] = useState(users);
    const navigate = useNavigate();


    const inputHandler = (e) => {
        //e.target gives you what you have typed in the text field
        const {name, value} = e.target;
        // console.log("namevaluecheck",name,value);
        //the below line means what ever the previous data is there keep it astise and the new key,value simply append in the previous object
        //spread operatior creates a copy of the object
         setUser({...user, [name]: value});
        //  console.log(user);
    }


    const submitForm = async(e) => {
        //stops default behaviour of like page refresh, navigation, form submission
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create",user)
        .then((response) => {
            toast.success(response.data.msg,{position:"top-right"});
            console.log(response);
            //after succesful creation it navigates to the home page
            navigate("/");
        }).catch((error) => {
            console.log(error);
        })
        
    }
    return (
        <div className="addUser">
            {/* this will make the link to move back */}
        <Link to="/">Back</Link>   
        <h3>Add New User</h3>  
        <form className="addUserForm" onSubmit={submitForm}>
            <div className="inputGroup">
                {/* just creating a form */}
                {/* label is used to describe a form input, htmlfor links it to an input id so clicking label focuses the input */}
                {/* htmlFor id after clicking it focues on input box */}
                {/* this autocomplete when we saved previous value like name, email,password it autosugges when we hover on input box if we turn on */}
                <label htmlFor="fname">First Name</label>
                <input type="text"  onChange = {inputHandler} id="fname" name="fname" autoComplete="on" placeholder="first Name"></input>
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">LastName</label>
                <input type="text" onChange = {inputHandler} id="lname" name="lname" autoComplete="off" placeholder="LastName"></input>
            </div>
            <div className="inputGroup">
                <label htmlFor="email">email</label>
                <input type="email"onChange = {inputHandler}  id="email" name="email" autoComplete="off" placeholder="emailName"></input>
            </div>
            <div className="inputGroup">
                <label htmlFor="password">password</label>
                <input type="password" onChange = {inputHandler} id="password" name="password" autoComplete="off" placeholder="password"></input>
            </div>
            <div className="inputGroup">
            <button type="submit">Add User</button>
            </div>
        </form>
        </div>
    )
}

export default Add;