import jsonp from 'jsonp'
import querystring from 'querystring';

const baidu = (parame) => {
    let q = querystring.encode(parame);
    return new Promise((resolve, reject) => {
        jsonp('https://suggestion.baidu.com/su' + '?' + q, { param: 'cb' }, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const sougou = (parame) => {
    parame.type = 'web';
    var q = querystring.encode(parame);
    return new Promise((resolve, reject) => {
        window.sogou = {
            sug: function(json) {
                resolve(json)
            }
        }
        jsonp('https://www.sogou.com/suggnew/ajajjson' + '?' + q, { prefix: 'sogou', name: 'sug' }, function(err) {
            if (err) {
                reject(err)
            }
        })
    })
}


const haosou = (parame = {}) => {
    parame = Object.assign({ encodein: 'utf-8', format: 'json' }, parame)
    var q = querystring.encode(parame);
    return new Promise((resolve, reject) => {
        jsonp('https://sug.so.360.cn/suggest' + '?' + q, { param: 'callback' }, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

export {
    baidu,
    sougou,
    haosou
}