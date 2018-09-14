<template>
    <div id="app">
        <el-container>
            <el-header>
                <myMeader></myMeader>
            </el-header>
            <el-main>
                <about></about>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import myMeader from '../../components/header/header'
    import about from '../../components/about/aboout'
    export default {
        name: 'app',
        components: {
            myMeader,about
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
