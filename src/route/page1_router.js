import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routers = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'page1',
            component:(resolve) =>require(['../pages/page1/page1.vue'],resolve),
            //多页面作二级子路由有坑，有大坑
            // children:[
            //     {
            //         path:'test1',
            //         name:'test1',
            //         component:(resolve) =>require(['../pages/page1/test1.vue'],resolve),
            //     },
            //     {
            //         path:'test2',
            //         name:'test2',
            //         component:(resolve) =>require(['../pages/page1/test2.vue'],resolve),
            //     }
            // ]
        },
        {
            path:'/test1',
            name:'test1',
            component:(resolve) =>require(['../pages/page1/test1.vue'],resolve),
        },
        {
            path:'/test2',
            name:'test2',
            component:(resolve) =>require(['../pages/page1/test2.vue'],resolve),
        }
    ]
})

routers.beforeEach((to, from, next) => {
    console.log(to,from)
    next();
})

export default routers;
