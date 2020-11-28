import { post } from '@/http/request.js'

const apiLogin = (params) => {
    return post('itapi/login', params)
}

const apiUserinfo = (optons) => {
    return post('itapi/login/userinfo', optons)
}
const apiRegister = (params) => {
    return post('itapi/login/register', params)
}

export {
    apiLogin,
    apiUserinfo,
    apiRegister
}