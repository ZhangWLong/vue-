<template>
	<!-- 底部 -->
	<footer class="Footer">
		<router-link class="F__b--l" to='/home' exact-active-class="active" tag="div">
			<i class="iconfont">&#xe60d;</i>
			<span>首页</span>
		</router-link>
		
		<router-link class="F__b--r" to='/user' exact-active-class="active" tag="div">
			<i  class="iconfont">&#xe7b1;</i>
			<span>我的</span>
		</router-link>
		
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
		props: {},
		data() {
			return {}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style>
	.Footer{height: 1.1rem;background: #ececec;width: 100%;position: absolute;bottom: 0;}
	.Footer i,span{display: block;font-size: 0.2rem;}
	.Footer .iconfont{font-size: 0.3rem;}
	.F__b--l,.F__b--r{float: left;width: 50%;text-align: center;height: 0.86rem;padding-top: 0.24rem;}
	.active{color: #000FFF;}
</style>
