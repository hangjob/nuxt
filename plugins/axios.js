export default function({ $axios, redirect, context }) {

    $axios.interceptors.request.use(
        config => {
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )

    $axios.onRequest(config => {})

    $axios.interceptors.response.use(
        response => {
            const res = response;
            if (res.status === 200) {
                return res.data;
            } else {
                redirect('/404')
            }
            return Promise.reject(res)
        },
        error => {
            // context.error({ statusCode: 404, message: '页面未找到或无数据' }) //跳转
            return Promise.reject(error)
        }
    )

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/404')
        } else if (code === 500) {
            redirect('/500')
        }
    })
}