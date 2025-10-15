import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)
    console.log(setUser)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitting:", username, password);

        setUser({username, password})
    }

    return (
         <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
    )
}

export default Login
