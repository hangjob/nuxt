export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'nuxt-itnavs',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    // 创建环境变量
    env: {
        baseUrl: 'https://www.xxx.com' //process.env.NODE_ENV
    },
    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'element-ui/lib/theme-chalk/index.css',
        "swiper/css/swiper.css",
        '@/assets/style/reset.css',
        '@/assets/iconfont/iconfont.css'
    ],
    styleResources: {
        less: [
            './assets/style/theme.less',
            './assets/style/style.less'
        ]
    },
    router: {
        middleware: ['auth']
    },
    /**
     *mode属性: 
     * 不写mode属性, 表示前端客户端和前端服务端都生效
     * mode: 'client'   表示是仅在前端客户端生效
     * mode: 'server'   表示是仅在前端服务端生效
     */
    plugins: [
        '@/plugins/element-ui',
        { src: '@/plugins/swiper.js', ssr: false },
        { src: '@/plugins/axios.js', mode: 'server' },
        { src: '@/plugins/utils.js', mode: 'client' },
        { src: '@/componentsFication/notify/index.js', mode: 'client' },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [

    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        'cookie-universal-nuxt'
    ],
    axios: {
        proxy: true, // 表示开启代理
        prefix: '/api', // 表示给请求url加个前缀 /api
        credentials: true // 表示跨域请求时是否需要使用凭证
    },

    proxy: {
        '/api': {
            target: 'https://www.vipbic.com/api', // 目标接口域名
            pathRewrite: {
                '^/api': '/', // 把 /api 替换成 /
                changeOrigin: true // 表示是否跨域
            }
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [/^element-ui/],
    }
}