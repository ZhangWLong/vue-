<template>
	<!-- 底部 -->
	<footer class="Column">
		<Cell
		  v-for="item of column"
		  :key="item._id"
		  :data="item"
		  api-name="column"
		/>
	</footer>
</template>

<script>
	import Cell from '../components/Cell.vue'
	import HeaderTitle from '../components/nav/HeaderTitle.vue'
	import FrameScreen from '../components/frame-screen.vue'
	export default {
		name: 'Column',
		props: {},
		data() {
			return {
				column:[]
			}
		},
		components: {
			Cell,HeaderTitle,FrameScreen
		},
		mounted() {
			this.$axios({
			  url:'/api/goods/column',
			  params:{_page:1,_limit:8},
			}).then(
			  res=>this.column = res.data.data
			)
		},
		updated() {},
		methods: {}
	}
</script>

<style>
.Column{padding: 0 0.2rem;}
</style>