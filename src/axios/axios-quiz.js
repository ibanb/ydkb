import axios from 'axios'

export default axios.create({
  baseURL: 'https://quiz-ydkb-default-rtdb.firebaseio.com/'
})