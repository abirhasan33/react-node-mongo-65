import React from 'react';

const Adduser = () => {
    const handleSubmet = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = {name, email};

        // send data to the server 
        fetch('http://localhost:5000/user', {
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
            <h1>Home</h1>
            <form onSubmit={handleSubmet}>
                <input type="text" name='name' placeholder='Name' required/>
                <br />
                <input type="email" name='email' placeholder='Email' required/>
                <br />
                <input type="submit" value="ADD USER" />
            </form>
        </div>
    );
};

export default Adduser;