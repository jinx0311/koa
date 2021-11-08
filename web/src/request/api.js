import { get,post } from './http'
export const login = data => post('/users/login',data) //SSP账户列表