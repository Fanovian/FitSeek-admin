import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.fanovian.cc:3000/api'
})

export default apiClient