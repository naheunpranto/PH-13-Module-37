import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();

    const params = useParams();

    console.log(params.userId);
    

    const {name, website} = user
    

    return (
        <div>
            <h3>User Details here</h3>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;