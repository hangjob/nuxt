<template>
    <div class="MavonAdd">
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="ruleForm"
        >
            <el-form-item label="网址名称" prop="it_name">
                <el-input placeholder="输入网址名称" v-model="ruleForm.it_name"></el-input>
            </el-form-item>
            <el-form-item label="网站地址" prop="url" v-if="isWrite">
                <el-input placeholder="输入网站地址" v-model="ruleForm.url"></el-input>
            </el-form-item>
            <el-form-item label="上传封面" prop="pic">
                <el-input placeholder="点击上传图片" v-model="ruleForm.pic" readonly>
                    <template slot="append">
                        <span class="uploadImage" @click="uploadImage">上传图片</span>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="选择分类" prop="reclassify">
                <el-radio-group v-model="ruleForm.reclassify" @change="typeChange">
                    <el-radio-button
                        :label="item.id"
                        v-for="(item,index) in detail.data"
                        :key="index"
                    >{{item.name}}</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="选择主题" prop="parentid">
                <el-select v-model="ruleForm.parentid" placeholder="请选择活动区域" style="width:100%">
                    <el-option
                        :label="item.name"
                        :value="item.id"
                        v-for="item in options"
                        :key="item.id"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否公开">
                <el-switch v-model="ruleForm.shows"></el-switch>
            </el-form-item>
            <el-form-item label="关键词" prop="keywords">
                <el-select
                    v-model="ruleForm.keywords"
                    multiple
                    filterable
                    allow-create
                    default-first-option
                    placeholder="选择关键词"
                    style="width:100%"
                >
                    <el-option v-for="item in keywords" :key="item" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="简介" prop="describe">
                <el-input type="textarea" placeholder="输入简介" v-model="ruleForm.describe"></el-input>
            </el-form-item>
        </el-form>
        <div class="editor">
            <h6 class="title">内容描述</h6>
            <div class="editor-body">
                <no-ssr>
                    <mavon-editor
                        class="custom-editor itnavs-markdown"
                        :toolbars="markdownOption"
                        v-model="ruleForm.content"
                        @imgAdd="$imgAdd"
                        ref="md"
                    />
                </no-ssr>
            </div>
        </div>
        <div class="submit">
            <el-button type="primary" @click="submitForm('ruleForm')" :loading="loading">写好了，发 表</el-button>
        </div>
        <Imgcre ref="imgcre" @handleResult="handleResult" />
    </div>
</template>
<script>
import { keywords } from '@/utils/keywords'
import Imgcre from './Imgcre'
import { apiNavtagAppend } from '@/api/index'
import { apiUploadUpimage } from '@/api/upload'
import { photoCompress, showSize, convertBase64UrlToBlob } from '@/utils/compress'
import { Loading } from 'element-ui';
const _utils = {};
_utils.delHtmlTag = function (str) {
    return str.replace(/<[^>]+>/g, "");
}

// 去空格
_utils.trim = function (str, is_global = 'g') {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
}


_utils.delHtmlTagTrim = function (str) {
    return _utils.trim(_utils.delHtmlTag(str));
}
function checkURL(URL) {
    var str = URL;
    //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
    //下面的代码中应用了转义字符"\"输出一个字符"/"
    var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp = new RegExp(Expression);
    if (objExp.test(str) == true) {
        return true;
    } else {
        return false;
    }
}
export default {
    components: {
        Imgcre
    },
    props: {
        isWrite: {
            type: Boolean,
            default: true
        },
        detail: {
            type: Object,
            default: () => { }
        },
        detail2: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        let validateUrl = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('小可爱，请输入网站地址'));
            } else {
                if (value.indexOf('http') === 0) {
                    callback();
                } else {
                    callback(new Error('小可爱，请输入正确的网址'));
                }
            }
        };
        let validatorTitle = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('小可爱，请输入内容'));
            } else {
                if (_utils.delHtmlTagTrim(value) == '') {
                    callback(new Error('小可爱，请输入正确的内容'));
                } else {
                    callback();
                }
            }
        };
        return {
            markdownOption: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: true, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true, // 预览
            },
            handbook: "",
            ruleForm: {
                type: 1,
                it_name: '',
                icon: '',
                parentid: '', // 父级id
                describe: '',
                shows: false,
                content: '写你知道，说你想说的',
                pic: '',
                keywords: [],
                url: '',
                reclassify: ''
            },
            rules: {
                it_name: [
                    { required: true, message: '请输入名称', trigger: 'change', validator: validatorTitle }
                ],
                url: [
                    { required: true, message: '输入网址链接', trigger: 'change', validator: validateUrl }
                ],
                reclassify: [
                    { type: 'number', required: true, message: '选择一级分类', }
                ],
                pic: [
                    { required: true, message: '上传一张首页图片', }
                ],
                keywords: [
                    { required: true, message: '至少选择或者输入一个关键词', }
                ],
                parentid: [
                    { type: 'number', required: true, message: '选择二级分类', }
                ],
                describe: [
                    { required: true, message: '请输入简介', trigger: 'change', validator: validatorTitle }
                ]
            },
            options: [],
            keywords: keywords,
            loading: false
        };
    },
    created() {
        this.ruleForm.type = this.isWrite ? 1 : 2;
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.apiNavtagAppend()
                } else {
                    return false;
                }
            });
        },
        apiNavtagAppend() {
            if (!this.ruleForm.content) {
                this.$message({
                    message: '小可爱，输入内容',
                    type: 'warning'
                });
                return false;
            }
            if (this.ruleForm.content.length <= 60) {
                this.$message({
                    message: '内容不少于60个字符',
                    type: 'warning'
                });
                return false;
            }
            let obj = JSON.parse(JSON.stringify(this.ruleForm));
            obj.keywords = _utils.delHtmlTagTrim(obj.keywords.join(','));
            if (!this.isWrite) {
                obj.title = obj.it_name;
            }
            obj.shows = obj.shows === false ? 0 : 1;
            this.loading = true;
            apiNavtagAppend(obj).then((res) => {
                this.$notify({
                    title: '发表成功',
                    message: `${this.ruleForm.it_name}已发表成功`,
                    type: 'success'
                });
                this.ruleForm.it_name =  '';
                window.location.href = '/'
            }).catch((err) => {
                this.$utils.isErrJson(err, this)
            }).finally(() => {
                this.loading = false;
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        typeChange() {
            this.options = this.manipulationData(this.ruleForm.reclassify)
            this.ruleForm.parentid = this.options[0].id;
        },
        manipulationData(id) {
            let data = JSON.parse(JSON.stringify(this.detail2.data));
            let arr = [];
            data.forEach((item) => {
                if (item.parentid === id) {
                    arr.push(item);
                }
            })
            return arr;
        },
        uploadImage() {
            this.$refs.imgcre.handleOpen();
        },
        handleResult(res) {
            this.ruleForm.pic = res.data.path;
            this.ruleForm.icon = res.data.path;
        },
        $imgAdd(pos, file) {
            // 第一步.将图片上传到服务器.
            photoCompress(file.miniurl, (base64) => {
                if (showSize(base64) > 500) {
                    this.$message({
                        message: '小可爱，图片太大了',
                        type: 'warning'
                    });
                    this.$refs.md.$img2Url(pos, '');
                    return false;
                }
                let bl = convertBase64UrlToBlob(base64);
                let formdata = new FormData()
                formdata.append("file", bl, Date.parse(new Date()) + ".jpg");
                let loadingInstance = Loading.service({ fullscreen: true, text: '图片正在压缩上传中...' });
                apiUploadUpimage(formdata).then((res) => {
                    this.$refs.md.$img2Url(pos, this.$utils.imgsrc(res.data.path));
                }).finally(() => {
                    this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                        loadingInstance.close();
                    });
                })
            }, { quality: 0.8 })
        }
    }
};
</script>
<style lang="less" scoped>
.MavonAdd /deep/ .el-select .el-input {
    width: 100%;
}
.MavonAdd {
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px 0;
    border-radius: 6px;
    .uploadImage {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    .ruleForm {
        padding-right: 20px;
    }
    .editor {
        padding: 20px;
        .title {
            vertical-align: middle;
            font-size: 14px;
            color: #606266;
            line-height: 40px;
            padding: 0 12px 0 0;
            box-sizing: border-box;
            font-weight: 400;
        }
        &-body {
            border: 1px solid #f5f5f5;
        }
    }
    .custom-editor {
        box-shadow: none !important;
        min-height: 400px;
    }
    .submit {
        padding: 20px;
    }
}
</style>