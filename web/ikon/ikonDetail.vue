<template>
    <div class="ikonDetail">
        <el-dialog width="960px" custom-class="detail" :visible.sync="visible">
            <div slot="title"></div>
            <div class="detail-container">
                <h1>{{content.it_name}}</h1>
                <div class="avatar">
                    <div class="img">
                        <img :src="content.member.userhead" alt />
                    </div>
                    <div class="info">
                        <h6>{{content.member.username}}</h6>
                        <p>发表于 {{content.create_time}}</p>
                    </div>
                </div>
                <div class="content">
                    <no-ssr>
                        <mavon-editor
                            class="detail-md itnavs-markdown"
                            :value="content.content"
                            :subfield="false"
                            :defaultOpen="'preview'"
                            :toolbarsFlag="false"
                            :editable="false"
                        />
                    </no-ssr>
                </div>
                <div class="leave">
                    <a href="javascript:;" @click="openUrl">前往[{{content.it_name}}]官网</a>
                </div>
            </div>
            <div slot="footer"></div>
        </el-dialog>
        <Attention :url="content.url" ref="attention"></Attention>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            content: {
                member: {},
                content: ''
            }
        }
    },
    methods: {
        openUrl() {
            this.$refs.attention.openWechat()
        }
    }
}
</script>
<style lang="less">
.ikonDetail {
    .detail {
        border-radius: 5px;
    }
}
</style>
<style lang="less" scoped>
.ikonDetail {
    .detail {
        &-container {
            display: flex;
            flex-direction: column;
            h1 {
                font-size: 28px;
                font-weight: bold;
                color: rgba(0, 0, 0, 0.85);
                margin-bottom: 30px;
            }
            .avatar {
                display: flex;
                height: 60px;
                .img {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: 10px;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .info {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                }
            }
            .leave {
                text-align: center;
                margin-top: 30px;
                a {
                    color: #fff;
                    display: inline-block;
                    padding: 8px 20px;
                    font-size: 14px;
                    border-radius: 4px;
                    background-color: #ffd100;
                    border-color: #ffd100;
                    color: #fff;
                    width: 60%;
                }
            }
        }
    }
}
</style>