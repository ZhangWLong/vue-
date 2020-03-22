<template>
	<div class="header clear">
	    <div class="city">
			<p>哈尔滨<i class="iconfont">&#xe510;</i></p>
		</div>
		<div class="search">
			<i class="iconfont">&#xe60c;</i>
			<input type="text" placeholder="搜索服务">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
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
	.header{height: 0.9rem;text-align: center;line-height: 0.9rem;font-size: 0.25rem;}
	.city{float: left;width: 1.3rem;}
	.search {float: left;line-height: 0.5rem;background: #ececec;margin-top: 0.2rem;border-radius: 50px;width: 4.9rem;height: 0.5rem;}
	.search i{float: left;padding-left: 0.1rem;}
	.search input{float: left;line-height: 0.5rem;}
	.search .iconfont{ width: 0.5rem;height: 0.5rem;display: inline-block;}
	.header p{padding-left: 0.13rem;}
	.city .iconfont{font-size: 0.3rem;line-height: 0.9rem;display: inline-block;}
</style>
