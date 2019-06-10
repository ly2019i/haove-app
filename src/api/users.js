import { get, post } from '../utils/requets'
import { getLocalStorages } from '../untile/auth'
const token = `Bearer ${getLocalStorages('token')}`
console.log(token)
export const getUser = () =>
  get('/api/v1/users/info', {
    headers: {
      authorization: token,
    },
  })

// eslint-disable-next-line import/prefer-default-export
export const login = data => post('/api/v1/auth/login', data);
