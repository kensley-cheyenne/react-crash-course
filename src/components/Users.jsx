import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';

function Users() {
    const { username } = useParams();

    // useEffect(() => {
    //     // fetch(`https://api.instagram.com/users/${username}`)
    // }, []);

    return <h1>{username}</h1>
}

export default Users;