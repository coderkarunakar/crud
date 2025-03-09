import React from 'react';
import { Link } from 'react-router-dom';


const User = () => {
    return(
        <div className='userTable'>
            <Link to = {"/add"}>Add User</Link>
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
                        <td><button>Delete</button></td>
                        {/* adding a link to move to edit page */}
                        <Link to={'/edit'}>Edit</Link>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default User;