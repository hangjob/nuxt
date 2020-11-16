<template>
    <div class="MavonAdd">
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="ruleForm"
        >
            <el-form-item label="网址名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="网址地址" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="上传封面" prop="name">
                <el-input v-model="ruleForm.name">
                    <template slot="append">上传图片</template>
                </el-input>
            </el-form-item>
            <el-form-item label="选择分类" prop="resource">
                <el-radio-group v-model="ruleForm.type">
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="选择主题" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width:100%">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否公开" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="关键词" prop="delivery">
                <el-select
                    v-model="ruleForm.delivery"
                    multiple
                    filterable
                    allow-create
                    default-first-option
                    placeholder="请选择文章标签"
                    style="width:100%"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
        </el-form>
        <div class="editor">
            <h6 class="title">内容描述</h6>
            <div class="editor-body">
                <mavon-editor class="custom-editor" :toolbars="markdownOption" v-model="handbook" />
            </div>
        </div>
        <div class="submit">
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
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
            handbook: "#### how to use mavonEditor in nuxt.js",
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            },
            options: [{
                value: 'HTML',
                label: 'HTML'
            }, {
                value: 'CSS',
                label: 'CSS'
            }, {
                value: 'JavaScript',
                label: 'JavaScript'
            }],
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>
<style lang="less" scoped>
.MavonAdd /deep/ .el-select .el-input {
    width: 100%;
}
.MavonAdd {
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
            font-weight:400;
        }
        &-body {
            border: 1px solid #f5f5f5;
        }
    }
    .custom-editor {
        box-shadow: none !important;
    }
    .submit {
        padding: 20px;
    }
}
</style>