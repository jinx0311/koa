import { get,post } from './http'
export const login = data => post('/users/login',data) 
export const getArticleList = data =>get('/article/getArticleList',data)