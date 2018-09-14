import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routers = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'page2',
            name:'page2',
            component:resolve =>require(['../pages/page2/page2.vue'],resolve)
        }
    ]
})

export default routers;
