import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routers = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/page3',
            name:'page3',
            component:resolve =>require(['../pages/page3/page3.vue'],resolve)
        }
    ]
})

export default routers;
