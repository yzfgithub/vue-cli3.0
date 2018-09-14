import Vue from 'vue'
import App from './page1.vue'
import elementUI from 'element-ui'
import router from '../../route/page1_router'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elementUI)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
