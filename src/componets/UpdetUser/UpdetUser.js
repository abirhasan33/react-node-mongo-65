import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdetUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);
    useEffect(()=> {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    },[]);

    const handleUpdetUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = {name, email};

        // send data to the server 
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('Users Added successfully!!');
            event.target.reset();
        })
    }
    return (
        <div>
            <h1>UpdetUser :{id}</h1>
            <h1>UpdetUser :{user.name}</h1>
            <form onSubmit={handleUpdetUser}>
                <input type="text" name='name' placeholder='Name' required/>
                <br />
                <input type="email" name='email' placeholder='Email' required/>
                <br />
                <input type="submit" value="ADD USER" />
            </form>
        </div>
    );
};

export default UpdetUser;