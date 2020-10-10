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

// 挂载到全局Vue实例
Vue.use({
    install(Vue) {
        Vue.prototype.$utils = {...utils };
    }
});