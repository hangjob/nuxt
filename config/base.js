const handLastUrl = (url) => {
    return `${url}`
}

const baseUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        if (process.server) {
            return 'http://www.localityitnavs.com'
        } else {
            return '/api'
        }
    } else {
        if (process.server) {
            return 'https://www.itnavs.com/api'
        } else {
            return '/api'
        }
    }
}

export {
    handLastUrl,
    baseUrl
}
