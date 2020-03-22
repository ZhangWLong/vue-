<template>
	<div id="app">
		<HeaderTitle label='返回' v-if="$root.bHeaderTitle" />
		<Header v-if="$root.bHeader" />
		<!-- <Home/> -->
		<router-view></router-view>
		<!-- <User/> -->
		<Footer v-if="$root.bFoot" />
		<!-- <Login/> -->
	</div>
</template>

<script>
	import Header from './Header.vue'
	import Footer from './Footer.vue'
	import HeaderTitle from '../components/nav/HeaderTitle.vue'
	// import Home from '../pages/Home.vue'
	// import Login from '../pages/Login.vue'
	// import User from '../pages/User.vue'
	export default {
		name: 'app',
		components: {
			Header,
			Footer,
			HeaderTitle, //Home,User,Login,
		},
		watch: {
			$route: {
				handler(nextValue, PrevValue) {
					
					let path = nextValue.path
					console.log('路由变化了', nextValue)
					if (/home|user/.test(path)) {
						this.$root.bHeader = this.$root.bFoot = true
						this.$root.bHeaderTitle = false
					}
					
					if (/reg|login|detail|column/.test(path)) {
						this.$root.bHeader = this.$root.bFoot = false
						this.$root.bHeaderTitle = true
					}

					// if (true) {
					// 	this.$root.bHeaderTitle = true
					// }
				},
				immediate: true
			}
		}
	}
</script>

<style>
	#app {
		display: flex;
		flex-flow: column;
		height: 100%;
	}
</style>
