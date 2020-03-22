<template>
	<!-- 底部 -->
	<div class="ModNav clear">
		<h2><span class="ModNav__l">{{data.title}}</span><span v-show="data.more" class="ModNav__r">{{data.more}}<i class="iconfont">&#xe60b;</i></span></h2>
	</div>
</template>

<script>
	export default {
		name: 'ModNav',
		props: {
			data:{
				type:Object,
				required:true,
				default:function(){
					return {}
				}
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style>
	.ModNav .iconfont{font-size: 0.25rem;}
	.ModNav h2{line-height: 0.28rem;}
	.ModNav__l{float: left;font-size: 0.28rem;}
	.ModNav__r{float: right;font-weight: 100;font-size: 0.23rem;}
</style>
