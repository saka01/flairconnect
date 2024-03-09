import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')


  const handleLogin = () => {
    e.preventDefault();
    //async function, set error
  };

  return (
    <div>
      <h2>Sign In to HutsyConnect.</h2>
      {error ? (
        <span>Error: {error}</span>
      ) : (
        <span>Enter your details below.</span>
      )}
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;