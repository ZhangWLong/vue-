<template>
	<!-- 底部 -->
	<div class="Botton">
		<p>{{data.title}}</p>
	</div>
</template>

<script>
	export default {
		name: 'Botton',
		props: {
			data:{
				type:Object,
				required:true,
				default:function(){
					return {}
				}
			}
		},
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
	.Botton{height: 0.5rem; background: #ececec;border-radius: 0.25rem;text-align: center;line-height: 0.5rem;font-size: 0.24rem;}
</style>
