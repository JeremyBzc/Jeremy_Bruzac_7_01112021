import axios from 'axios'

const apiGrp = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default apiGrp
