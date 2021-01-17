const handLastUrl = (url) => {
    return `${url}`
}

const baseUrl = () => {
    if (process.server) {
        return 'http://127.0.0.1:8000'
    } else {
        return '/api'
    }
}

export {
    handLastUrl,
    baseUrl
}