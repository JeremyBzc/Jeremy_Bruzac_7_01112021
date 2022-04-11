import axios from 'axios'

const apiGrp = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  // Authorization: `Bearer ${userToken}`, DEFINIR ?
  // Authorizarion: 'Bearer ' + localStorage.getItem('userToken')
})

export default apiGrp
