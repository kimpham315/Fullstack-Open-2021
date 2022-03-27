import React, { useState, useEffect } from 'react'

const Login = ({ user, handleLogin, handleLogout }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault()
    handleLogin(username, password)
    setUsername('')
    setPassword('')
  }

  const handleClick = (event) => {
    handleLogout()
    setUsername('')
    setPassword('')
  }

  if (user === null) {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    )
  }

  return (
    <div>
      {user.name} logged in
      <button type="submit" onClick={handleClick}>logout</button>
      <p></p>
    </div>
  )
}

export default Login