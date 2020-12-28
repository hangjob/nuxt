<template>
    <div class="widget">
        <div class="widget_wrapper">
            <div class="popular_emoji">
                <div class="popular_list">
                    <a href="/zh-hans/emoji/%F0%9F%A5%B0" class="emoji_font line tooltip">
                        🥰
                        <span class="tooltip_info">喜笑颜开</span>
                    </a>
                    <a href="/zh-hans/emoji/%F0%9F%98%82" class="emoji_font line tooltip">
                        😂
                        <span class="tooltip_info">笑哭了</span>
                    </a>
                    <a href="/zh-hans/emoji/%F0%9F%98%8D" class="emoji_font line tooltip">
                        😍
                        <span class="tooltip_info">花痴</span>
                    </a>
                    <a href="/zh-hans/emoji/%F0%9F%8D%93" class="emoji_font line tooltip">
                        🍓
                        <span class="tooltip_info">草莓</span>
                    </a>
                    <a href="/zh-hans/emoji/%F0%9F%90%B5" class="emoji_font line tooltip">
                        🐵
                        <span class="tooltip_info">猴头</span>
                    </a>
                </div>
                <h2>
                    <a href>流行Emoji</a>
                    <i class="iconfont icon-huochai"></i>
                </h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.widget {
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 30px;
    margin-top: 30px;
    .widget_wrapper {
        .popular_emoji {
            position: relative;
            padding: 15px 0;
            margin: 0;
            background-image: radial-gradient(
                    rgba(255, 255, 255, 0.3) 15%,
                    rgba(0, 0, 0, 0) 16%
                ),
                linear-gradient(to left, #63c39e, #0eb5ca);
            background-size: 5px 5px, 100% 100%;
            background-position: 0 0;
            border-radius: 5px;
            .popular_list {
                padding-left: 30px;
                .emoji_font {
                    font-size: 20px;
                    margin: 0 0 0 -15px;
                    width: 40px;
                    height: 40px;
                    line-height: 34px;
                    text-align: center;
                    vertical-align: middle;
                    border-radius: 50px;
                    border: 3px solid #fff;
                    background-color: #ff5e3a;
                    .tooltip_info {
                        font-size: 14px;
                        color: #fff;
                        line-height: normal;
                        font-family: initial;
                        position: absolute;
                        display: block;
                        left: 15%;
                        bottom: 100%;
                        font-style: normal;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 160px;
                        padding: 8px 12px;
                        border-radius: 5px;
                        background-color: #ff5e3a;
                        box-shadow: 0 5px 25px -6px rgba(41, 128, 185, 0.2);
                        transition: 0.33s;
                        opacity: 0;
                        visibility: hidden;
                        transform: translateY(5px);
                        &::before {
                            content: '';
                            display: block;
                            position: absolute;
                            bottom: -5px;
                            left: 0;
                            width: 0;
                            height: 0;
                            border: 0;
                            border: 10px solid transparent;
                            border-top: 10px solid #ff5e3a;
                            border-bottom: 0;
                        }
                    }
                }
            }
            h2 {
                padding-left: 15px;
                padding-top: 10px;
                display: flex;
                color: #ffff;
                justify-content: space-between;
                padding-right: 15px;
                a {
                    padding: 0;
                    border: none;
                    color: #fff;
                }
            }
        }
    }
}
</style>