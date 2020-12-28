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
                <button class="itnavs-button">发布</button>
            </div>
            <div class="input_name">
                <input
                    name="username"
                    type="text"
                    class="name"
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