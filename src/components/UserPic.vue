<template>
	<!-- 底部 -->
	<div class="UserPic">
		<div>
			<div class="User__pic">
				<img :src="$baseUrl + data.icon" alt="">
			</div>
			<p class="user__name">{{data.nikename}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UserPic',
		props: {
			data:{
				type:Object,
				required:true,
				default:function(){
					return {}
				}
			}
		},
		components: {
		},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style>
	.UserPic{border-radius: 0.2rem;overflow: hidden;float: left;height: 2.8rem;background: #ccc;}
	.UserPic img{width: 100%;height: 100%;}
	.User__pic{width: 1.4rem;height: 1.4rem;border-radius: 50%;overflow: hidden;margin: 0.4rem auto 0;}
	.user__name{width: 100%;text-align: center;font-size: 0.25rem;line-height: 0.6rem;}
</style>
