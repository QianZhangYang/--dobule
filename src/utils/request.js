import axios from 'axios'
const serve = axios.create({
  baseURL: '',
  timeout: 5000
})
export default serve
