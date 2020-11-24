import { post } from '@/plugins/request.js'

const apiLogin = (params) => {
    return post('login.html', params)
}

export {
    apiLogin
}