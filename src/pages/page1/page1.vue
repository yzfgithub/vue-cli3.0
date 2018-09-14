<template>
    <div id="app">
        <el-container>
            <el-header>
                <myMeader></myMeader>
            </el-header>
            <el-main>
                <hello></hello>
                <span @click="totest" style="padding: 5px 10px;background-color: green;">test1</span>
                <router-link to="/test2" style="padding: 5px 10px;background-color: blue;">test2</router-link>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import myMeader from '../../components/header/header'
    import hello from '../../components/hello/hello'
    export default {
        name: 'app',
        components: {
            myMeader,hello
        },
        methods:{
            totest(){
                this.$router.push('test1')
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
