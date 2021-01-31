//获取base64图片大小，返回kb数字
function showSize(base64url) {
    //把头部去掉
    var str = base64url.replace('data:image/png;base64,', '');
    // 找到等号，把等号也去掉
    var equalIndex = str.indexOf('=');
    if (str.indexOf('=') > 0) {
        str = str.substring(0, equalIndex);
    }
    // 原来的字符流大小，单位为字节
    var strLength = str.length;
    // 计算后得到的文件流大小，单位为字节
    var fileLength = parseInt(strLength - (strLength / 8) * 2);
    // 由字节转换为kb
    var size = "";
    size = (fileLength / 1024).toFixed(2);
    var sizeStr = size + ""; //转成字符串
    var index = sizeStr.indexOf("."); //获取小数点处的索引
    var dou = sizeStr.substr(index + 1, 2) //获取小数点后两位的值
    if (dou == "00") { //判断后两位是否为00，如果是则删除00                
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
    return size;
}


function photoCompress(base64Url, callback, imgAttr = {}) {
    console.log('压缩前,', showSize(base64Url))
    var img = new Image();
    img.src = base64Url;
    img.onload = function() {
        var that = this;
        // 默认按比例压缩
        var w = that.width,
            h = that.height,
            // 宽高比例
            scale = w / h;
        w = imgAttr.width || w;
        h = imgAttr.height || (w / scale);
        // 默认图片质量为0.7
        var quality = 0.9;
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        canvas.setAttributeNode(anw);
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量（0-1）
        if (imgAttr.quality && imgAttr.quality <= 1 && imgAttr.quality > 0) {
            quality = imgAttr.quality;
        }
        // 重绘后的图片类型
        var imgType = imgAttr.type || 'image/jpeg';
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL(imgType, quality);
        // 回调函数返回base64的值
        console.log('压缩后,', showSize(base64))
        callback && callback(base64);
    };
}


/**
 * 将以base64的图片url数据转换为Blob
 * @param urlData
 * 用url方式表示的base64图片数据
 */
function convertBase64UrlToBlob(urlData) {
    var arr = urlData.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

export {
    photoCompress,
    showSize,
    convertBase64UrlToBlob
}