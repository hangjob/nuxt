import Vue from 'vue'

const utils = {};

// 复制
utils.copy = () => {
    let target = null;

    target = document.createElement('div');
    target.id = 'tempTarget';
    target.style.opacity = '0';
    target.innerText = text;
    document.body.appendChild(target);

    try {
        let range = document.createRange();
        range.selectNode(target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    } catch (e) {}

    target.parentElement.removeChild(target);
}

utils.isErrJson = function(res) {
    if (res.code != 1) {
        let str = res.message || '小可爱出错了';
        if (Object.prototype.toString.call(res.message) === "[object Object]") {
            for (let i in res.message) {
                if (res.message[i]) {
                    str = res.message[i];
                    break;
                }
            }
        }
        window.vm.$message.warning(str)
    }
}


utils.isEmail = (str) => {
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return pattern.test(str)
}

utils.navLink = (item) => {
    // 文章
    if (item.isArticle === true) {
        return `/article/${item.id}`
    } else {
        if (item.pic) {
            return `/thread/${item.id}`
        } else {
            return `/navdet/${item.id}`
        }
    }
}


// 挂载到全局Vue实例
Vue.use({
    install(Vue) {
        Vue.prototype.$utils = {...utils };
    }
});