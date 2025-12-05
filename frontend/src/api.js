
import axios from 'axios'

// In docker-compose, Nginx in the frontend container proxies /api/* to the backend container.
// So we can safely use a relative baseURL the browser can reach.
const api = axios.create({
  baseURL: '/api/auth'
})

export default api
