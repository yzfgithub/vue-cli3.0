<template>
    <div id="app">
        <el-container>
            <el-main>
                test1
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import myMeader from '../../components/header/header'
    export default {
        name: 'app',
        components: {
            myMeader
        },
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
