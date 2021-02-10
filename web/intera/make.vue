<template>
    <div class="make clearfix">
        <div class="input_box2">
            <textarea
                name="content"
                cols
                rows
                class="input"
                maxlength="200"
                id="content"
                v-model="subData.content"
                placeholder="写下你想说的，开始我们的对话"
            >写下你想说的，开始我们的对话</textarea>
        </div>
        <div class="input_ok clearfix">
            <div class="input_submit">
                <button class="itnavs-button" @click="submit">发布</button>
            </div>
            <div class="input_name">
                <input
                    v-model="subData.username"
                    name="username"
                    type="text"
                    class="name"
                    placeholder="你的名字"
                />
            </div>
        </div>
        <no-ssr>
            <v-mini-weather class="weather" size="small" type="oneline" color="000000"></v-mini-weather>
        </no-ssr>
    </div>
</template>
<script>
import { apiLeaveAdd } from '@/api/leave'
import jsonp from 'jsonp';
function checkUserName(str) {
    var flag = 1;
    var v = str;
    //[\u4e00-\u9fa5]为汉字的unicode编码，/i表示匹配的时候不区分大小写。
    var rx = /[a-z\d]/i, rxcn = /[\u4e00-\u9fa5]/, num = 0, chr;
    for (var i = 0, j = v.length; i < j; i++) {
        chr = v.charAt(i);
        if (rx.test(chr)) {
            num += 1;
        } else if (rxcn.test(chr)) {
            num += 2;
        } else {
            flag = 3;
            break;
        }
    }
    if (flag != 3) {
        if (num > 15) {
            return '长度最多为6个汉字或12个字母数字！';
        } else if (num < 1) {
            return '不能为空！';
        }
        return true;
    } else {
        return '不能包含特殊符号！'
    }
}

export default {
    data() {
        return {
            subData: {
                content: '',
                username: '',
                weather: '',
                tempHigh: '',
                city: '',
                ip: '',
                pro: '',
                addr: '',
                shortWea: '',
                pinyin: ''
            }
        }
    },
    mounted() {
        this.getIp();
        this.getWeatherInfo();
    },
    methods: {
        getIp() {
            
        },
        getWeatherInfo() {
            jsonp('https://tianqi.2345.com/api/getWeatherInfo.php', { name: 'callback' }, (err, data) => {
                console.log(data)
                const { weather, tempHigh, shortWea } = data.day1;
                this.subData.city = data.cityNameWithSuffix;
                this.subData.pro = data.prov;
                this.subData.weather = weather;
                this.subData.tempHigh = tempHigh;
                this.subData.shortWea = shortWea;
                this.subData.pinyin = data.pinyin;
                this.subData.nongli = data.nongli;
            })
        },
        submit() {
            if (!this.$utils.delHtmlTagTrim(this.subData.content)) {
                this.$notify({
                    title: '文字描述',
                    message: `小可爱，内容不能为空`,
                    type: 'warning'
                });
                return false;
            }
            let str = checkUserName(this.subData.username);
            if (str != true) {
                this.$notify({
                    title: '用户昵称',
                    message: `小可爱，${str}`,
                    type: 'warning'
                });
                return false;
            }
            apiLeaveAdd(this.subData).then((res) => {
                this.$notify({
                    title: this.subData.username,
                    message: '留言成功',
                    type: 'success'
                });
                this.subData.content = '';
                this.$emit('addSuccess');
            }).catch((err) => {
                this.$utils.isErrJson(err, this)
            })
        }
    }
}
</script>
<style lang="less" scoped>
.make {
    width: 100%;
    padding-top: 25px;
    background-color: #fff;
    height: 212px;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.06);
    position: relative;
    .weather {
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .input_box2 {
        height: 135px;
        padding-right: 30px;
        padding-left: 30px;
        .input {
            height: 120px;
            border: 1px solid #fff;
            font-size: 16px;
            line-height: 23px;
            color: #333333;
            background-color: #fff;
            outline: none;
            width: 100%;
        }
        .textarea {
            max-height: 87px;
        }
    }
    .input_ok {
        height: 45px;
        width: 100%;
        .input_submit {
            float: right;
            padding-right: 10px;
            padding-left: 7px;
            button {
                height: 34px;
                color: #333333;
                cursor: pointer;
            }
        }
        .input_name {
            float: right;
            padding-right: 10px;
            padding-left: 7px;
            .name {
                height: 34px;
                line-height: 34px;
                width: 175px;
                font-size: 14px;
                color: #999999;
                border: 1px solid #eeeeee;
                background-color: #eeeeee;
                outline: none;
                border-radius: 4px;
                text-indent: 14px;
            }
        }
    }
}
</style>