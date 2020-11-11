<template>
    <div class="header">
        <div class="header_wap wp">
            <div class="logo"><img src="@/assets/images/logo.png" alt=""></div>
            <div class="menus">
                <ul>
                    <li v-for="item in items" :key="item.id"><a href="" @click.prevent="handClickItem(item)">{{item.title}}</a></li>
                </ul>
            </div>
        </div>
        <Search :dialogTableVisible.sync="dialogTableVisible"/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dialogTableVisible:false,
            items:[{title:'首页',id:1},{title:'主题',id:2},{title:'社区',id:3},{title:'搜索',id:9},{title:'精选',id:10},{title:'公众号',id:6},{title:'开源',id:12},{title:'联系我们',id:5},{title:'登录',id:7}]
        }
    },
    methods:{
        handClickItem(item){
            if(item.title === '搜索'){
                this.dialogTableVisible = true;
            }
        }
    }
}
</script>
<style lang="less" scoped>
.header {
    height: 60px;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(197, 197, 197, 0.1);
    margin-bottom: 10px;
    &_wap {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo{
        img{
            height: 60px;
        }
    }
    .menus{
        ul{
            li{
                display: inline-block;
                a{
                    padding: 0 20px;
                    font-size: 13px;
                        color: #8590a6;
                    line-height: 60px;
                    height: 60px;
                    display: inline-block;
                }
                &:last-child{
                    a{
                        padding-right: 0;
                    }
                }
            }
        }
    }
}
</style>