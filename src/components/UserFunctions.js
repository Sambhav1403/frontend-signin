import axios from 'axios'

//Registering the user from recieved data
export const register = newUser => {
  return axios
    .post('user/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

//Logging in the user and then storing token in the local storage
export const login = user => {
  return axios
    .post('user/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(response.data.token)
      localStorage.setItem('usertoken', response.data.token)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

//Helps in getting the profile of the logged in user
export const getProfile = user => {
  return axios
    .get('user/profile', {
      
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}