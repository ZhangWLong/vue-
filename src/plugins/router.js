import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/Home.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Column from '../pages/Column.vue'
import Detail from '../pages/Detail.vue'

let routes = [
	{path:'/home',component:Home},
	{path:'/user',component:User},
	{path:'/login',component:Login},
	{path:'/reg',component:Reg},
	{path:'/column',component:Column},
	{path:'/detail/:_id',component:Detail,name:'Detail'},
	{path:'/',redirect:'/home'},
];

let router = new VueRouter({
	routes
})

export default router;