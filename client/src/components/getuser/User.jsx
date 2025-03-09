import React from 'react';
import "./user.css";
import { Link } from 'react-router-dom';


const User = () => {
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
                    <tr>
                        <td>1.</td>
                        <td>Karunakar</td>
                        <td>Karunakar@gmail.com</td>
                        <td className='actionButtons'>
                            <button>
                                <i className="fa-solid fa-trash"></i> 
                                </button>
                           
                                  <Link to={'/edit'}><i className="fa-solid fa-pen-to-square"></i></Link> 
                               
                            </td>
                       
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default User;