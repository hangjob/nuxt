const handLastUrl = (url) => {
    return `${url}`
}

const baseUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        if (process.server) {
            return 'http://127.0.0.1:8000'
        } else {
            return '/api'
        }
    } else {
        if (process.server) {
            return 'http://www.itnavs.com/api'
        } else {
            return '/api'
        }
    }
}

export {
    handLastUrl,
    baseUrl
}