<template>
    <div class="software">
        <div class="tit">
            <h2>软件下载</h2>
        </div>
        <ul class="clearfix">
            <li>
                <a>
                    <div class="img">
                        <img src="https://www.2qj.com/Public/Upload/Study/3GUWGZ3xlQlu1kW.jpg" alt />
                    </div>
                    <div class="tit">
                        <h4>Ps</h4>
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img">
                        <img src="https://www.2qj.com/Public/Upload/Study/3GUWGZ3xlQlu1kW.jpg" alt />
                    </div>
                    <div class="tit">
                        <h4>Ps</h4>
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img">
                        <img src="https://www.2qj.com/Public/Upload/Study/3GUWGZ3xlQlu1kW.jpg" alt />
                    </div>
                    <div class="tit">
                        <h4>Ps</h4>
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img">
                        <img src="https://www.2qj.com/Public/Upload/Study/3GUWGZ3xlQlu1kW.jpg" alt />
                    </div>
                    <div class="tit">
                        <h4>Ps</h4>
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img">
                        <img src="https://www.2qj.com/Public/Upload/Study/3GUWGZ3xlQlu1kW.jpg" alt />
                    </div>
                    <div class="tit">
                        <h4>Ps</h4>
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <div class="img">
                        <img src="https://www.2qj.com/Public/Upload/Study/3GUWGZ3xlQlu1kW.jpg" alt />
                    </div>
                    <div class="tit">
                        <h4>Ps</h4>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.software {
    .tit {
        margin: 0 0 22px;
        h2 {
            line-height: 30px;
            font-size: 24px;
            color: #666;
        }
    }
    ul {
        margin-right: -20px;
        li {
            width: 244px;
            height: 100px;
            margin: 0 20px 20px 0;
            background: #0dbbe1;
            overflow: hidden;
            border-radius: 4px;
            float: left;
            a {
                display: flex;
                align-items: center;
                height: 100%;
                box-sizing: border-box;
                padding: 10px 15px;

                .img {
                    width: 100px;
                    height: 80px;
                    object-fit: cover;
                    margin-right: 10px;
                    flex-shrink: 0;
                    img {
                        object-fit: cover;
                        height: 100%;
                        width: 100%;
                    }
                }
                .tit {
                    h4 {
                        word-wrap: break-word;
                        word-break: break-all;
                        font-size: 18px;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>