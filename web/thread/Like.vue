<template>
    <div class="like">
        <div class="wp">
            <div class="like-zan">
                <i></i>
            </div>
            <div class="like-describe">
                -
                <span>5</span>位站酷推荐设计师推荐 -
            </div>
            <div class="like-user">
                <a href>
                    <img
                        src="https://img.zcool.cn/community/0434d357280b30000001797059c050.jpg@80w_80h_1c_1e_1o_100sh.jpg"
                        alt
                    />
                </a>
                <a href>
                    <img
                        src="https://img.zcool.cn/community/0434d357280b30000001797059c050.jpg@80w_80h_1c_1e_1o_100sh.jpg"
                        alt
                    />
                </a>
                <a href>
                    <img
                        src="https://img.zcool.cn/community/0434d357280b30000001797059c050.jpg@80w_80h_1c_1e_1o_100sh.jpg"
                        alt
                    />
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.like {
    background-color: #fff;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    &-zan {
        width: 118px;
        height: 72px;
        position: relative;
        display: flex;
        flex-flow: column;
        align-items: center;
        background-color: #ffe300;
        margin: 0 auto;
        border-radius: 50px;
        cursor: pointer;
        box-sizing: border-box;
    }
    &-describe {
        text-align: center;
        margin-top: 20px;
    }
    &-user {
        text-align: center;
        a {
            display: inline-block;
            margin: 20px 10px 0;
            img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
        }
    }
}
</style>