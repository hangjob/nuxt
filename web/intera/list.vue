<template>
    <div class="list_user_content">
        <div class="left">
            <img src="@/assets/images/user_2020_02.jpg" alt />
        </div>
        <div class="right">
            <div class="list_user_content_message">
                <a href="../book/?so=adad" title="只看有关“adad”的对话">大大大：</a>二万五千二群二
            </div>
            <div class="list_user_content_reply">
                <div class="reply_content">三十岁的设计师不正年轻着吗？ ／ 00:08</div>
            </div>
            <div class="content_information_k">
                <div class="content_information">12月17日 10:22 江苏 · 盐城</div>
                <div class="look_img"></div>
            </div>
            <div class="content_lc">10538</div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.list_user_content {
    background-color: #fff;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    padding: 30px;
    .left {
        width: 80px;
        img {
            display: inline-block;
            height: 54px;
            width: 54px;
            vertical-align: top;
            border-radius: 52px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
        }
    }
    .right {
        flex: 1;
        position: relative;
        .list_user_content_message {
            a {
                color: #333;
                text-decoration: none;
                font-weight: bold;
            }
        }
        .list_user_content_reply {
            background-color: #f5f5f5;
            border-radius: 10px;
            padding: 10px 0;
            margin-top: 20px;
            .reply_content {
                font-size: 13px;
                line-height: 24px;
                color: #333333;
                text-indent: 24px;
            }
        }
        .content_information_k {
            margin-top: 20px;
            font-size: 12px;
            color: #999999;
            .content_information {
            }
            .look_img {
            }
        }
        .content_lc {
            position: absolute;
            bottom: -25px;
            right: 0;
            font-family: BrandonText-Black;
            letter-spacing: -3px;
            font-size: 36px;
            color: #ebebeb;
        }
    }
}
</style>