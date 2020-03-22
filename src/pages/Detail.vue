<template>
	<!-- 底部 -->
	<footer class="Detail">
		<div v-if = "detail.title">
			<div class="d__t clear">
				<div class="d__t--pic">
					<img :src="$baseUrl + detail.detail.auth_icon" alt="">
				</div>
				<p>{{detail.detail.auth}}</p>
			</div>
			<div class="d__t--title">{{detail.title}}</div>
			<br>
			<hr>
			<p>{{detail.time}}</p><!-- | date  -->
			<br>
			<p class="d__t--txt" v-html="detail.detail.content"></p>
		</div>
		<frame-screen v-else></frame-screen>
	</footer>
</template>

<script>
	import Cell from '../components/Cell.vue'
	import HeaderTitle from '../components/nav/HeaderTitle.vue'
	import FrameScreen from '../components/frame-screen.vue'
	export default {
		name: 'Detail',
		props: {},
		data() {
			return {
				detail:{}
			}
		},
		components: {
			Cell,HeaderTitle,FrameScreen
		},
		mounted() {
			axios({
				url:`/api/goods/${this.$route.query.apiName}/${this.$route.params._id}`,
			}).then(
				res=>this.detail = res.data.data
			)
		},
		updated() {},
		methods: {},
		// filter:{
		// 	date(time){
		// 		let fillzero = n => n < 10 ? '0' + n : '' + n;
				
		// 		let d=new Date();
		// 		d.setTime(time)
		// 		let year = d.getFullYear();
		// 		let month = d.getMonth()+1;
		// 		let date = d.getDate();
		// 		let hour = d.getHours();
		// 		let min = d.getMinutes();
		// 		let sec = d.getSeconds();
		// 		return `${year}年${fillzero(month)}月${fillzero(date)}日 ${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`
		// 	}
		// }
	}
</script>

<style>
	.Detail{padding: 0 0.3rem;}
	.d__t{line-height: 1.5rem;}
	.d__t--title{font-size: 0.35rem;}
	.d__t--txt{font-size: 0.2rem;}
	.d__t p{float: left;padding-left: 0.3rem; font-size: 0.25rem;}
	.d__t--pic{width: 1rem;height: 1rem;border-radius: 50%;overflow: hidden;float: left;padding-top: 0.2rem;}
	.d__t--pic img{width: 100%;}
</style>
