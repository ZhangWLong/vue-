import Vue from 'vue'
import App from './layouts/App.vue'

import './assets/css/base.css'
import './assets/iconfont/iconfont.css' 
import './assets/js/font.js'

//引入路由
import router from './plugins/router.js'

//引入服务端配置模块
import server from './config/server.js'

import axios from "./plugins/axios.js"

Vue.prototype.$baseUrl = server.baseServerUrl;

new Vue({
	data:{
		bFoot:false,
		bHeader:false,
		bHeaderTitle:false
	},
    render: h => h(App),
    router//定义路由
}).$mount('#app') 
