<template>
	<!-- 底部 -->
	<div class="Login">
		<h1></h1>
		<div class="login-box">
			<p class="lsolid"></p>
			<div class="login">
				<router-link to='/login'>登录</router-link>
				<span></span>
				<router-link to='/reg'>注册</router-link>
			</div>
			<p class="rsolid"></p>
		</div>
		<div class="log_ipt">
			<Input :label="'账 号'" type="text" v-model = 'username'/><!-- :value="username" @input="checkUser" -->
			<Input :label="'密 码'" type="password" v-model = 'password'/><!-- :value="password"  @input="checkPw" -->
		</div>
		<div class="footbox">
			<BottonRes text="登 录" @click = "login"/>
			<a href="javascript:;" class="tishi">忘记密码？</a>
		</div>
	</div>
</template>

<script>
	import Input from '../components/Input.vue' 
	import BottonRes from '../components/BottonRes.vue'
	import HeaderTitle from '../components/nav/HeaderTitle.vue'
	export default {
		name: 'Login',
		props: {},
		data() {
			return {
				username:'',
				password:''
			}
		},
		components: {
			Input,
			HeaderTitle,
			BottonRes
		},
		mounted() {},
		updated() {},
		methods: {
			// checkUser(val){
			// 	this.username = val
			// },
			// checkPw(val){
			// 	this.password = val
			// }
			login(){
				axios({
					url:'/api/login',
					method:'post',
					data:{
						username:this.username,
						password:this.password
					}
				}).then(
					res=>{
						//种user信息，
						// console.log(res.data);
						window.localStorage.setItem('token',res.data.token)
						//跳转到user页面
						if(this.$route.query.p){
							this.$router.replace(this.$route.query.p)
						}else{
							this.$router.replace('/user')
						}
					}
				)
			}
		}
	}
</script>

<style>
	.Login h1 {
		margin: 1.3rem auto 0;
		width: 2rem;
		height: 2rem;
		border-radius: 1rem;
		background: #FFF000;
		background-size: 100%;
	}

	.login {
		width: 2.0rem;
		height: 0.38rem;
		margin: 0 auto;
		margin-top: 0.85rem;
	}

	.login a {
		width: 0.97rem;
		height: 0.38rem;
		font-size: 0.35rem;
		line-height: 0.38rem;
		float: left;
		color: #4c4f50;
		text-align: center;
	}

	.login span {
		float: left;
		height: 0.38rem;
		border-left: 1px solid #4c4f50;
	}

	.rsolid {
		width: 1.96rem;
		height: 0.18rem;
		border-bottom: 1px solid #4c4f50;
		position: absolute;
		top: 0;
		right: 0.1rem;
		margin: 0;
	}

	.lsolid {
		width: 1.96rem;
		height: 0.18rem;
		border-bottom: 1px solid #4c4f50;
		position: absolute;
		top: 0;
		left: 0.1rem;
		margin: 0;
	}

	.login-box {
		position: relative;
	}

	.log_ipt {
		width: 5.78rem;
		height: 1.92rem;
		border: 1px solid #e5e7e8;
		background: #fff;
		margin: 0 auto;
		margin-top: 0.68rem;
	}

	.footbox {
		width: 4.65rem;
		height: 0.65rem;
		margin: 0 auto;
		margin-top: 0.62rem;
	}
	.tishi {
	    width: 1.4rem;
	    font-size: 0.25rem;
	    margin-top: 0.28rem;
	    display: block;
	}
</style>
