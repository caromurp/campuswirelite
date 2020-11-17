import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const signup = async () => {
    await axios.post('/account/signup', { username, password })
    setMsg('sign up is successful')
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <input placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button value="Signup" onClick={() => signup(username, password, setMsg)} />
        <p>Already have an account?</p>
        <Link to="/login">Log in here!</Link>
        {msg}
      </form>
    </div>
  )
}

export default Signup
