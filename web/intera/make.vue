<template>
    <div class="make clearfix">
        <div class="input_box2">
            <textarea
                name="content"
                cols
                rows
                class="input"
                id="content"
                onpropertychange="textCounter(this, 500)"
                onfocus="if (value =='写下你想说的，开始我们的对话'){value =''}"
                onblur="if (value ==''){value='写下你想说的，开始我们的对话'}"
            >写下你想说的，开始我们的对话</textarea>
        </div>
        <div class="input_ok clearfix">
            <div class="input_submit">
                <input
                    type="submit"
                    class="itnavs-button botton"
                    onclick="return checkdata();"
                    value="发 布"
                />
            </div>
            <div class="input_name">
                <input
                    name="username"
                    type="text"
                    class="itnavs-button name"
                    id="username"
                    value="你的名字"
                    onpropertychange="textCounter(this, 6)"
                    onfocus="if (value =='你的名字'){value =''}"
                    onblur="if (value ==''){value='你的名字'}"
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {

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
    }
    .input_ok {
        height: 45px;
        width: 100%;
        .input_submit {
            height: 40px;
            float: right;
            width: 100px;
            padding-right: 10px;
            padding-left: 7px;
            .button {
                height: 40px;
                width: 100px;
                font-size: 14px;
                line-height: 40px;
                background-color: #333;
                text-align: center;
                color: #ffffff;
                border-radius: 20px;
                border-top-style: none;
                border-right-style: none;
                border-bottom-style: none;
                border-left-style: none;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                transform: rotate(0deg);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
            }
        }
        .input_name {
            height: 19px;
            width: 123px;
            background-size: 18px 18px;
            float: right;
            padding-right: 17px;
            padding-left: 35px;
            background-repeat: no-repeat;
            background-position: 13px 11px;
            padding-top: 10px;
            padding-bottom: 11px;
            background-color: #eeeeee;
            border-radius: 20px;
            .name {
                height: 18px;
                width: 120px;
                font-size: 14px;
                line-height: 18px;
                color: #999999;
                border: 1px solid #eeeeee;
                background-color: #eeeeee;
                outline: none;
            }
        }
    }
}
</style>