import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([]);
    const{id} = useParams()

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const DeleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/user/${id}`);
            // Refresh the user list after successful deletion
            loadUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
            // Handle error gracefully, e.g., display a notification to the user
        }
    };
    

    return (
        <table className="table border shadow">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link className="btn btn-outline-primary mx-3" to ={`/viewuser/${user.id}`}>View</Link>
                            {/* string interpolations -->Passing dynamic values*/}
                            <Link className="btn btn-outline-primary mx-3" to ={`/edituser/${user.id}`}>Edit</Link>
                            <button className="btn btn-danger mx-3"
                            onClick={()=>DeleteUser(user.id)}
                            >Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
