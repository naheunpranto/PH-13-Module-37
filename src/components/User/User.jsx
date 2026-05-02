import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {

    const {id, name, email, phone} = user;

    const [showInfo, setShowInfo] = useState(false);

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    const userStyle = {
        border: "2px solid yellow",
        borderRadius: "20px",
        padding: "10px",
        margin: "10px"
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? "Hide" : "Show"} info</button>
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails2 userPromise = {userPromise}/>
                </Suspense>
            }
        </div>
    );
};

export default User;