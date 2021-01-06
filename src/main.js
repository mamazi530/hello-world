import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'
import axios from 'axios'

Vue.prototype.axios = axios

Vue.config.productionTip = false
// axios.defaults.baseURL = process.env.publicPath

Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
