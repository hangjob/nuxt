import { post } from '@/http/request'
const prefix = '/itapi';

// 登录
const apiLogin = (params) => {
    return post(`${prefix}/login`, params)
}

// 用户信息
const apiLoginUserinfo = (params) => {
    return post(`${prefix}/login/userinfo`);
}
const apiRegister = (params) => {
    return post(`${prefix}/login/register`, params)
}



export {
    apiLogin,
    apiLoginUserinfo,
    apiRegister
}