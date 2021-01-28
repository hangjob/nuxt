<template>
    <div class="item">
        <div class="container">
            <div class="thumb">
                <a href class="big" style="background:red">
                    <img
                        src="https://www.vipbic.com/uploads/20200225/ilWf3NXWXW1miWabZrsHBCt5mqW8cIeY.png"
                        alt
                    />
                </a>
            </div>
            <div class="info">
                <h2>
                    <a href>源码天空丨网站源码下载平台</a>
                </h2>
                <div class="excerpt">网站地址：https://ccmmmm.com/ 网站介绍： 源码天空提供各类精品源码资源,包含网站模板、小程</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.item {
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #f3f3f3;
    border-right: 1px solid #f3f3f3;
    box-shadow: -1px 0px 0px #f3f3f3;
    margin-bottom: -1px;
    transition: box-shadow 0.3s;
    .container {
        .thumb {
            flex-shrink: 0;
            max-height: 140px;
            min-height: 140px;
            height: 140px;
            a {
                border-radius: 3px;
                position: relative;
                display: block;
                height: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    transition: all 0.3s;
                    -o-object-fit: cover;
                    object-fit: cover;
                    height: 100%;
                }
            }
            a.big {
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: auto;
                    height: auto;
                    max-width: 85%;
                    max-height: 85%;
                    border-radius: 5px;
                }
            }
        }
        .info {
            padding: 10px;
            h2 {
                a {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    font-size: 15px;
                    color: #333;
                }
            }
            .excerpt {
                font-size: 13px;
                color: #999;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-justify: inter-ideograph;
                word-break: break-all;
                margin-top: 5px;
            }
        }
    }
}
</style>