
import { useState } from 'react'
import api from './api'

export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const sayHello = async () => {
    try {
      const { data } = await api.get('/hello')
      setMessage(String(data))
    } catch (err) {
      setMessage('Error calling /hello: ' + (err?.message || 'Unknown error'))
    }
  }

  const signup = async () => {
    try {
      const { data } = await api.post('/signup', { username, password })
      setMessage('Signed up: ' + JSON.stringify(data))
    } catch (err) {
      setMessage('Signup failed: ' + (err?.message || 'Unknown error'))
    }
  }

  const login = async () => {
    try {
      const { data } = await api.post('/login', { username, password })
      setMessage(String(data))
    } catch (err) {
      setMessage('Login failed: ' + (err?.message || 'Unknown error'))
    }
  }

  return (
    <div className="card">
      <h2>Spring Boot Auth Demo (React)</h2>

      <div className="row">
        <button onClick={sayHello}>Call GET <code>/hello</code></button>
      </div>

      <div className="row">
        <label>Username</label>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
      </div>

      <div className="row">
        <button onClick={signup}>POST <code>/signup</code></button>
        <button onClick={login}>POST <code>/login</code></button>
      </div>

      <div className="row">
        <strong>Response:</strong>
        <pre>{message}</pre>
      </div>
    </div>
  )
}
