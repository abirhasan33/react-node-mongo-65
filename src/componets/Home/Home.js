import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [user, setUser] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUser(data))
    },[]);
    const handleUserDelet = id => {
        const proceed = window.confirm("Are you sure you want to delet?")
        if(proceed){
            console.log("deletting user with id", id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url , {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deleteCount > 0){
                    console.log('deleted');
                    const remaing = user.filter(user=> user._id !== id);
                    setUser(remaing);
                }
            })
        }
    }
    return (
        <div>
            <h2>Availed Users: {user.length}</h2>
            <ul>
                {
                    user.map(user => <li key={user._id}> {user.name}:: {user.email}
                    <Link to={`/updete/${user._id}`}><button>Updete</button></Link>
                    <button onClick={() => handleUserDelet(user._id)}>X</button></li> )
                }
            </ul>
        </div>
    );
};

export default Home;