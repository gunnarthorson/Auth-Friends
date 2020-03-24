import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = props => {
    const [login, setLogin] = useState({
        username: 'Lambda School',
        password: 'i<3Lambd4'
    })

    const handleChanges = e => {
        setLogin({
            ...login, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', login)
        .then(res => {
            console.log(res)
            window.localStorage.setItem("token", res.data.payload);
            props.history.push('/friends')
        })
        .catch(err => console.log(err));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="username"
                placeholder="User Name"
                onChange={handleChanges}
                value={login.username}
                />
                <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChanges}
                value={login.password}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
