<template>
    <div id="app1">
        <el-container>
            <el-main>
                <myMeader></myMeader>
                    <!--<div>-->
                        <!--<router-link to="/test1" style="padding: 5px 10px;background-color: blue;">test2</router-link>-->
                        <!--<router-link to="/test2" style="padding: 5px 10px;background-color: blue;">test2</router-link>-->
                    <!--</div>-->
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import myMeader from '../../components/header/header'
    import hello from '../../components/hello/hello'
    export default {
        name: 'app1',
        components: {
            myMeader,hello
        },
        methods:{

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
