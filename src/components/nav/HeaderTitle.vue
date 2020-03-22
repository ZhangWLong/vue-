<template>
	<div class="headerTitle clear">
		<i class="clear bk iconfont headerTitle__icon" @click="goback">&#xe624;</i>
		<span class="headerTitle__txt">{{label}}</span>
	</div>
</template>

<script>
	export default {
		name: 'headerTitle',
		props: {
			label:{
				type:String,
				default:'选择城市'
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>
	
<style>
	.headerTitle{height: 0.9rem;line-height: 0.9rem;font-size: 0.25rem;}
	.headerTitle .headerTitle__icon,.headerTitle__txt{float: left;}
	.headerTitle__icon{width: 0.8rem;text-align: center;font-size: 0.37rem;}
	.headerTitle__txt{font-size: 0.25rem;}
</style>
