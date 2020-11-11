<template>
    <div class="pick-special">
        <div class="item-thumb">
            <a href>
                <img
                    src="https://www.vipbic.com/uploads/20191211/297c3b4b6536f7702632b99444d2c073.png"
                    alt
                />
            </a>
            <div class="number">专题:1期</div>
        </div>
        <div class="item-info">
            <h2>游戏动画</h2>
            <p>07月26日-制作流畅有力的游戏动画</p>
        </div>
        <div class="item-nav">
            <ul>
                <li>
                    <span>1</span>
                    <a>createjs-CreateJS中文网致力于CreatreateJS中文网致力于CreateJS在中国的推内reateJS中文网致力于CreateJS在中国的推内eJS在中国的推内容</a>
                </li>
                <li>
                    <span>2</span>
                    <a>createjs-CreateJS中文网致力于CreatreateJS中文网致力于CreateJS在中国的推内reateJS中文网致力于CreateJS在中国的推内eJS在中国的推内容</a>
                </li>
                <li>
                    <span>3</span>
                    <a>createjs-CreateJS中文网致力于CreatreateJS中文网致力于CreateJS在中国的推内reateJS中文网致力于CreateJS在中国的推内eJS在中国的推内容</a>
                </li>
                <li>
                    <span>4</span>
                    <a>createjs-CreateJS中文网致力于CreatreateJS中文网致力于CreateJS在中国的推内reateJS中文网致力于CreateJS在中国的推内eJS在中国的推内容</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.pick-special {
    width: 640px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    .item-thumb {
        height: 225px;
        position: relative;
        overflow: hidden;
        a {
            display: block;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        .number {
            padding: 8px 18px;
            position: absolute;
            z-index: 2;
            left: 0;
            top: 30px;
            border-radius: 0 4px 4px 0;
            font-size: 13px;
            background-color: #e32c28;
            color: #fff;
        }
    }
    .item-info {
        border-bottom: 1px solid #efefef;
        padding: 15px;
        h2 {
            font-size: 20px;
            font-weight: 700;
        }
        p {
            font-size: 12px;
            color: #999;
            margin-top: 5px;
        }
    }
    .item-nav {
        ul {
            padding: 10px 0;
            li {
                padding: 10px 15px;
                font-size: 15px;
                display: flex;
                line-height: 1.4;
                align-items: center;
                box-sizing: border-box;
                span {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    text-align: center;
                    line-height: 20px;
                    background-color: #b0b0b0;
                    border-radius: 50%;
                    color: #fff;
                    margin-right: 5px;
                }
                a {
                    color: #5d5d5d;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    flex: 1;
                    display: inline-block;
                }
                &:nth-of-type(1) {
                    span{
                        background-color: #fd9800;
                    }
                }
                &:nth-of-type(2) {
                    span{
                        background-color: #ff3366;
                    }
                }
                &:nth-of-type(3) {
                    span{
                        background-color: #469bfa;
                    }
                }
            }
        }
    }
}
</style>