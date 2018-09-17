<template>
    <div>
        <!--<hello></hello>-->
        <div>
            <router-link to="/test1" style="padding: 5px 10px;background-color: blue;">test1</router-link>
            <router-link to="/test2" style="padding: 5px 10px;background-color: blue;">test2</router-link>
        </div>
        <!--<el-row :gutter="20">-->
            <!--<el-col :span="8"><div class="grid-content bg-purple" @click="toOne">page1</div></el-col>-->
            <!--<el-col :span="8"><div class="grid-content bg-purple" @click="toTwo">page2</div></el-col>-->
            <!--<el-col :span="8"><div class="grid-content bg-purple" @click="toThree">page3</div></el-col>-->
        <!--</el-row>-->
    </div>
</template>
<script type="text/ecmascript-6">
    import hello from '../hello/hello'
    export default {
        data(){
            return{

            }
        },
        components:{hello},
        methods:{
            toOne(){
                this.$router.push('page1')
            },
            toTwo(){
                this.$router.push('page2')
            },
            toThree(){
                this.$router.push('page3')
            },
        },
        mounted(){

        }
    }
</script>
<style lang="css">

</style>
