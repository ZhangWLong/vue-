<template>
	<!-- 底部 -->
	<div class="Input">
		<input :type="type" :value="value" @input="$emit('input',$event.target.value)">
		<span>{{label}}</span>
	</div>
</template>

<script>
	export default {
		name: 'Input',
		props: {
			label:{
				type:String,
				default:'标题'
			},
			type:{
				type:String,
				default:'text'
			},
			value:{
				type:String,
				default:''
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style>
	.Input{border-bottom: 1px solid #e5e7e8;position: relative;height: 0.95rem;}
	.Input input{padding-left: 1.4rem;width: 4.54rem;height: 105%;font-size: 0.4rem;}
	.Input span{line-height: 0.49rem;width: 1.23rem;height: 0.49rem;position: absolute;top: 0.26rem;left: 0;border-right: 1px solid #676868;color: #676868;font-size: 0.25rem;text-align: center;}
	</style>
