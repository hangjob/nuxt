export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: '全栈导航——找工具，就上全栈导航',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'keywords', content: '全栈导航,互联网职员导航,运营导航,产品经理导航,UI设计导航,前端开发导航,后端开发导航,工具导航,学习导航' },
            { hid: 'description', name: 'description', content: '全栈导航一个分享互联网优秀资源的导航网站，专注分享产品运营、产品经理、UI设计师、前端开发工程师、后端开发工程师，为互联网职员收录国内外优质网站。互联网职员，找工具，就上 全栈导航' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
        ],
        script: [
            { src: 'https://cdn.bootcdn.net/ajax/libs/showdown/1.9.1/showdown.min.js' }
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
            '@/assets/style/theme.less',
            '@/assets/style/style.less',
            '@/assets/style/markdown-ui.less'
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
    cache: true,

    plugins: [
        '@/plugins/element-ui',
        { src: '@/plugins/swiper.js', ssr: false },
        { src: '@/plugins/viewer.js', ssr: false },
        { src: '@/plugins/utils.js' },
        { src: '@/plugins/tool.js', mode: 'server' },
        { src: '@/plugins/vue-mavon-editor', ssr: false },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [

    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt',
        '@nuxtjs/dayjs',
        '@nuxtjs/axios'
    ],

    axios: {
        proxy: true, // 表示开启代理
        prefix: '/api', // 表示给请求url加个前缀 /api
        credentials: true // 表示跨域请求时是否需要使用凭证
    },

    dayjs: {
        locales: ['en', 'ja'],
        defaultLocale: 'en'
    },

    proxy: {
        '/api': {
            target: 'http://127.0.0.1:8000/', // 目标接口域名
            pathRewrite: {
                '^/api': '/', // 把 /api 替换成 /
                changeOrigin: true // 表示是否跨域
            }
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [/^element-ui/]
    }
}