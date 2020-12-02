<template>
    <div class="reply" v-show="visible">
        <div class="pinlunt">
            <el-input
                type="textarea"
                :placeholder="placeholder"
                v-model="content"
                maxlength="2000"
                show-word-limit
                :autosize="{ minRows: 4, maxRows: 6 }"
            ></el-input>
        </div>
        <div class="expression-box">
            <span>添加表情</span>
            <button class="itnavs-button itnavs-button-yellow" @click="submitData">回复</button>
        </div>
    </div>
</template>
<script>
import { apiDiscussAddRevert } from '@/api/discuss'
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        did: {
            type: String | Number,
            default: ''
        },
        item: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            content: ''
        }
    },
    methods: {
        submitData() {
            if (!this.content) {
                this.$message({
                    message: '小可爱，内容不能为空哦！',
                    type: 'warning'
                });
                return false;
            }
            let content = `回复 <a>${this.item.member.username}：</a>${this.content}`
            apiDiscussAddRevert({ did: this.did, content: content }).then((res) => {
                this.$notify({
                    title: '评论',
                    message: '评论成功',
                    type: 'success'
                });
                // this.content = '';
            }).catch((err) => {
                this.$utils.isErrJson(err)
            })
        }
    }
}
</script>
<style lang="less" scoped>
.reply {
    margin-top: 20px;
    .pinlunt {
    }
    .expression-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }
}
</style>