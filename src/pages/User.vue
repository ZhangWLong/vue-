<template>
	<!-- 底部 -->
	<footer class="User">
		<UserPic :data="user"/>
		<Hei style='height: 0.4rem;' />
		<Cell :data="{_id:1,title:'订单',iconfont:'&#xe68f;'}" apiName="user"/>
		<Cell :data="{_id:2,title:'我的消息',iconfont:'&#xe6ed;'}" apiName="user"/>
		<Hei style='height: 0.1rem;background: #ccc;' />
		<Cell :data="{_id:3,title:'设置',iconfont:'&#xe60e;'}" apiName="user"/>
		<Cell :data="{_id:4,title:'帮助与客服',iconfont:'&#xe653;'}" apiName="user"/>
		<div class="footbox">
			<BottonRes text="退出登录" @click = "logOut"/>
		</div>
	</footer>
</template>

<script>
	import UserPic from '../components/UserPic.vue'
	import Cell from '../components/Cell.vue'
	import Hei from '../components/Hei.vue'
	import BottonRes from '../components/BottonRes.vue'
	export default {
		beforeRouteEnter(to,from,next){
			let local = window.localStorage.getItem('token')
			if(!local){
				next('/login')
				return;
			}else{
				axios({
					url:'/api/user',
				}).then(
					res=>{
						if(res.data.err==0){
							// console.log(res.data.data);
							next(_this=>_this.user = res.data.data)
						}else{
							next('/login')
						}
					}
				)
			}
		},
		name: 'User',
		props: {},
		data() {
			return {
				user:{}
			}
		},
		components: {
			UserPic,Cell,Hei,BottonRes
		},
		mounted() {},
		updated() {},
		methods: {
			//注销登录
			logOut(){
				//删除本地token
				window.localStorage.removeItem('token')
				//跳转到登录页面
				this.$router.push('/login')
			}
		}
	}
</script>

<style>
	.User {
		padding: 0 0.3rem;
		display: flex;
		flex: 1;
		flex-flow: column;
		overflow: auto;
	}
</style>
