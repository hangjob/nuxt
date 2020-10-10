import http from '@/plugins/request.js'

/**
 * 获取博客详情
 * @param id 博客ID
 */
export function getUser(id) {
    return http({
        url: 'blog/detail/' + id,
        method: 'get'
    })
}