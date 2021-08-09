<template>
    <div class="ceshi">
        <div class="item">
            <h1>请求类型</h1>
            <div class="list">
                <el-table
                    :data="tableData"
                    highlight-current-row
                    @current-change="handleCurrentChange"
                    style="width: 100%"
                >
                    <el-table-column prop="title" label="名称" width="180"></el-table-column>
                    <el-table-column prop="des" label="描述" width="180"></el-table-column>
                    <el-table-column prop="create_time" label="时间"></el-table-column>
                </el-table>
            </div>
            <div style="margin-top:30px;width: 800px;">
                <el-input v-model="fromData.title" placeholder="请输入名称"></el-input>
                <el-input v-model="fromData.des" placeholder="请输入描述" style="margin-top:10px"></el-input>
            </div>
            <div class="btn">
                <el-button type="primary" @click="handGet">发送GET请求</el-button>
                <el-button type="primary" @click="handPost">发送POST请求</el-button>
                <el-button type="primary" @click="handPostDelete">发送POST请求delete</el-button>
                <el-button type="primary" @click="handPut">发送PUT请求</el-button>
                <el-button type="primary" @click="handDelete">发送DELETE请求</el-button>
            </div>
        </div>
        <div class="item">
            <h1>Content-Type类型</h1>
            <div class="btn">
                <el-button
                    type="primary"
                    @click="handXWwwFormUrlencodedGet"
                >x-www-form-urlencoded-get</el-button>
                <el-button
                    type="primary"
                    @click="handXWwwFormUrlencodedPost"
                >x-www-form-urlencoded-post</el-button>
                <el-button type="primary" @click="handApplicationJsonPost">application/json-post</el-button>
                <!-- <el-button type="primary" @click="handApplicationJsonGet">application/json-get</el-button> -->
            </div>
        </div>
    </div>
</template>
<script>
import { axios } from '@/http/request'
const prefix = '/itapi';

export default {
    data() {
        return {
            tableData: [],
            fromData: { title: '', des: '' }
        }
    },
    mounted() {
        window.avoidJump = function () {
            return false;
        }
    },
    methods: {
        handleCurrentChange(val) {
            console.log(val)
            this.currentRow = val;
        },
        handGet() {
            axios.get(`/api/${prefix}/test/items`).then((res) => {
                const { data } = res.data;
                this.tableData = data
            })
        },
        handPost() {
            axios.post(`/api/${prefix}/test/items`).then((res) => {
                const { data } = res.data;
                this.tableData = data
            })
        },
        handPut() {
            axios.put(`/api/${prefix}/test/put`, this.fromData).then((res) => {
                this.handGet();
            })
        },
        handDelete() {
            axios.delete(`/api/${prefix}/test/delete`, { data: { id: this.currentRow.id } }).then((res) => {
                this.handGet();
            })
        },
        handXWwwFormUrlencodedGet() {
            axios.get(`/api/${prefix}/test/add`, { params: this.fromData }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then((res) => {
                this.handGet();
            })
        },
        handXWwwFormUrlencodedPost() {
            console.log( this.fromData);
            axios.post(`/api/${prefix}/test/add`, this.fromData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then((res) => {
                this.handGet();
            })
        },
        handApplicationJsonPost() {
            axios.post(`/api/${prefix}/test/add`, this.fromData, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
                this.handGet();
            })
        },
        handApplicationJsonGet() {
            axios.get(`/api/${prefix}/test/add`, { params: this.fromData }, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
                this.handGet();
            })
        },

        handPostDelete() {
            axios.post(`/api/${prefix}/test/delete`, { id: this.currentRow.id }, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
                this.handGet();
            })
        }
    }
}
</script>
<style lang="less" scoped>
.ceshi {
    padding: 20px;
    .item {
        margin-bottom: 20px;
    }
    .list {
        width: 800px;
    }
    .btn {
        margin-top: 30px;
    }
}
</style>