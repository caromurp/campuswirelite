import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const login = async () => {
    await axios.post('/account/login', { username, password })
    setMsg('log in is successful')
  }

  return (
    <div>
      <h1>Log In</h1>
      <form>
        <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <input placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button value="Login" onClick={() => login(username, password, setMsg)} />
        <p>Don`t have an account?</p>
        <Link to="/signup">Sign up here!</Link>
        {msg}
      </form>
    </div>
  )
}

export default Login
