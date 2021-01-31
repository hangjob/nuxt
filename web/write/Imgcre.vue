<template>
    <div class="imgcre">
        <el-dialog
            title="图片裁剪"
            width="1440px"
            top="50px"
            :visible.sync="dialogVisible"
            :before-close="handleClose"
        >
            <div class="container">
                <div class="up">
                    <ImgCutter
                        ref="imgCutterModal"
                        label="选择图片"
                        :crossOrigin="true"
                        crossOriginHeader="*"
                        rate
                        toolBgc="none"
                        :isModal="false"
                        :showChooseBtn="true"
                        :lockScroll="true"
                        :boxWidth="1000"
                        :boxHeight="604"
                        :cutWidth="800"
                        :cutHeight="300"
                        :sizeChange="false"
                        :moveAble="true"
                        :originalGraph="false"
                        WatermarkText="全栈导航"
                        WatermarkTextFont="12px Sans-serif"
                        WatermarkTextColor="#00ff00"
                        :WatermarkTextX="0.95"
                        :WatermarkTextY="0.95"
                        :smallToUpload="true"
                        :saveCutPosition="true"
                        :scaleAble="true"
                        @cutDown="cutDown"
                        @onPrintImg="onPrintImg"
                    >
                        <div class="btn btn-primary" slot="open">选择图片</div>
                        <div slot="cancel"></div>
                        <div slot="confirm"></div>
                        <div slot="choose">
                            <el-button v-show="isClick" type="danger" plain>重新上传</el-button>
                        </div>
                    </ImgCutter>
                </div>
                <div class="down">
                    <div class="icon">
                        <h2>小图</h2>
                        <div class="img">
                            <img :src="dataURL" alt />
                        </div>
                    </div>
                    <div class="pic">
                        <h2>大图</h2>
                        <div class="img">
                            <img :src="dataURL" alt />
                        </div>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">关闭</el-button>
                <el-button type="primary" :loading="loading" @click="handleConfirm">上传图片</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { apiUploadUpimage } from '@/api/upload'
import { photoCompress, showSize, convertBase64UrlToBlob } from '@/utils/compress'
export default {

    data() {
        return {
            dialogVisible: false,
            dataURL: '',
            loading: false,
            isClick: false
        }
    },
    mounted() {
        // setTimeout(() => {
        //     this.dialogVisible = true;
        // },2000)
        this.dataURL = require('@/assets/images/userhand.png');
    },
    methods: {
        handleClose() {
            this.dialogVisible = false;
        },
        handleConfirm() {

            if (!this.isClick) {
                this.$message({
                    message: '小可爱，请选择图片',
                    type: 'warning'
                });
                return false;
            }
            photoCompress(this.dataURL, (base64) => {
                if (showSize(base64) > 300) {
                    this.$message({
                        message: '小可爱，图片太大了',
                        type: 'warning'
                    });
                    return false;
                }
                let bl = convertBase64UrlToBlob(base64);
                let formdata = new FormData()
                formdata.append("file", bl, Date.parse(new Date()) + ".jpg");
                this.loading = true;
                apiUploadUpimage(formdata).then((res) => {
                    this.handleClose()
                    this.$emit('handleResult', res);
                }).finally(() => {
                    this.loading = false;
                })
            })

        },
        handleOpen() {
            this.dialogVisible = true;
        },
        cutDown(obj) {
            this.getImageInfo(obj.dataURL, (res) => {
                console.log(res)
            })
        },
        getImageInfo(base64, callback) {
            let img = new Image();
            img.onload = function () {
                callback && callback({ w: img.width, h: img.height })
            };
            img.src = base64;
        },
        onPrintImg(obj) {
            this.file = obj;
            this.isClick = true;
            this.dataURL = obj.dataURL;
        }
    }
}
</script>
<style lang="less" scoped>
.imgcre /deep/ .canvasSelectBox {
    border-radius: 6px;
}
.imgcre /deep/ .el-dialog__body {
    padding: 0 20px;
}
.imgcre {
    .container {
        display: flex;
        .up {
            width: 1000px;
        }
        .down {
            width: 440px;
            margin-left: 20px;
            .img {
                width: 100%;
                text-align: center;
            }
            h2 {
                margin-bottom: 20px;
            }
            .icon {
                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    border: 1px solid #dddd;
                    object-fit: cover;
                }
                margin-bottom: 20px;
            }
            .pic {
                img {
                    width: 100%;
                    border-radius: 6px;
                    border: 1px solid #dddd;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>