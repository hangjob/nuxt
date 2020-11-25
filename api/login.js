import { post } from '@/plugins/request.js'

const apiLogin = (params) => {
    return post('login', params)
}

const apiUserinfo = (params) => {
    return post('login/userinfo', params)
}
const apiRegister = (params) => {
    return post('login/register', params)
}

export {
    apiLogin,
    apiUserinfo,
    apiRegister
}