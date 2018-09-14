import Vue from 'vue'
import App from './page2.vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elementUI)
Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
