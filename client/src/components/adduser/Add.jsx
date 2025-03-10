import React from "react"
import "./add.css";
import { Link } from "react-router-dom";
const Add = () => {
    return (
        <div className="addUser">
            {/* this will make the link to move back */}
        <Link to="/">Back</Link>   
        <h3>Add New User</h3>  
        <form className="addUserForm">
            <div className="inputGroup">
                {/* just creating a form */}
                {/* label is used to describe a form input, htmlfor links it to an input id so clicking label focuses the input */}
                {/* htmlFor id after clicking it focues on input box */}
                {/* this autocomplete when we saved previous value like name, email,password it autosugges when we hover on input box if we turn on */}
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname" autoComplete="on" placeholder="first Name"></input>
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">LastName</label>
                <input type="text" id="fname" name="fname" autoComplete="off" placeholder="LastName"></input>
            </div>
            <div className="inputGroup">
                <label htmlFor="email">email</label>
                <input type="email" id="fname" name="fname" autoComplete="off" placeholder="emailName"></input>
            </div>
            <div className="inputGroup">
                <label htmlFor="password">password</label>
                <input type="password" id="fname" name="fname" autoComplete="off" placeholder="password"></input>
            </div>
            <div className="inputGroup">
            <button type="submit">Add User</button>
            </div>
        </form>
        </div>
    )
}

export default Add;