<template>
	<!-- 底部 -->
	<div class="Home">
		<div>
			<Swiper :data="list" apiName="banner" />
			<Hei style='height: 0.3rem;' />
			<div class="clear">
				<Mod1 v-for="(item,index) of serve" :key="item._id" :index="index" :data="item" apiName="serve" />
			</div>
			<Hei style='height: 0.2rem;' />
			<div class="btn">
				<Button v-for="(item,index) of btn" :key="item._id" :index="index" :data="item" apiName="btn" style='width: 31%;' />
			</div>
			<Hei style='height: 0.4rem;' />
			<ModNav :data="{title:'精选活动'}" /> <!-- 精选活动 -->
			<Hei style='height: 0.2rem;' />
			<div class="mod_2">
				<Mod2 v-for="(item,index) of activity" :key="item._id" :index="index" :data="item" style='width: 49%;' apiName="activity" />
			</div>
			<Hei style='height: 0.4rem;' />
			<ModNav :data="{title:'外卖/无接触配送',more:'更多'}" /><!-- 外卖 -->
			<Hei style='height: 0.2rem;' />
			<div class="mod_2">
				<Mod2 v-for="(item,index) of takeOut" :key="item._id" :index="index" :data="item" style='width: 1.85rem;height: 1.9rem;margin-bottom: 0.14rem;'
				 apiName="takeOut" />
			</div>
		</div>
		<Hei style='height: 0.4rem;' />
		<ModNav :data="{title:'本地服务',more:'更多'}" style="margin-bottom: 0.2rem;" /><!-- 本地服务 -->
		<div class="mod_2">
			<Mod2 style='width: 1.85rem;height: 1.9rem;margin-bottom: 0.14rem;' v-for="(item,index) of localService" :key="item._id"
			 :index="index" :data="item" apiName="localService" />
		</div>
		<Hei style='height: 0.4rem;' />
		<ModNav :data="{title:'居家好物',more:'更多'}" style="margin-bottom: 0.2rem;" /><!-- 居家好物 -->
		<div class="mod_2" style="margin-bottom: 0.14rem;">
			<Mod2 style='width: 100%;' v-for="(item,index) of bigPic" :key="item._id" :index="index" :data="item" apiName="bigPic" />
		</div>
		<div class="mod_2">
			<Mod2 style='width: 1.85rem;height: 1.9rem;margin-bottom: 0.14rem;' v-for="(item,index) of living" :key="item._id"
			 :index="index" :data="item" apiName="living" />
		</div>
		<Hei style='height: 0.4rem;' />
		<ModNav :data="{title:'每日好货',more:'更多'}" style="margin-bottom: 0.2rem;" /><!-- 每日好货 -->
		<div style="margin-bottom: 0.2rem;" class="h__mrhh clear">
			<div class="h__mrhh--box clear">
				<Mod3 style='width: 1.85rem;margin-right: 0.07rem; float: left;' v-for="(item,index) of stuff" :key="item._id"
				 :index="index" :data="item" apiName="stuff" />
			</div>
		</div>
		<Hei style='margin-bottom: 1.3rem;' />
	</div>
</template>

<script>
	import Swiper from '../components/Swiper.vue'
	import Mod1 from '../components/Mod1.vue'
	import Mod2 from '../components/Mod2.vue'
	import Mod3 from '../components/Mod3.vue'
	import Hei from '../components/Hei.vue'
	import Button from '../components/Button.vue'
	import ModNav from '../components/ModNav.vue'
	export default {
		name: 'Home',
		props: {},
		data() {
			return {
				list: [],
				serve: [],
				btn: [],
				activity: [],
				takeOut: [],
				localService: [],
				living: [],
				bigPic: [],
				stuff: []
			}
		},
		components: {
			Swiper,
			Mod1,
			Hei,
			Button,
			ModNav,
			Mod2,
			Mod3
		},
		mounted() {
			axios({
				url: '/api/goods/banner',
				params: {
					_page: 1,
					_limit: 3
				}
			}).then(
				res => this.list = res.data.data
			)

			axios({
				url: '/api/goods/serve',
				params: {
					_page: 1,
					_limit: 10
				}
			}).then(
				res => this.serve = res.data.data
			)

			axios({
				url: '/api/goods/btn',
				params: {
					_page: 1,
					_limit: 3
				}
			}).then(
				res => this.btn = res.data.data
			)

			axios({
				url: '/api/goods/activity',
				params: {
					_page: 1,
					_limit: 2
				}
			}).then(
				res => this.activity = res.data.data
			)

			axios({
				url: '/api/goods/takeOut',
				params: {
					_page: 1,
					_limit: 6
				}
			}).then(
				res => this.takeOut = res.data.data
			)

			axios({
				url: '/api/goods/localService',
				params: {
					_page: 1,
					_limit: 6
				}
			}).then(
				res => this.localService = res.data.data
			)

			axios({
				url: '/api/goods/living',
				params: {
					_page: 1,
					_limit: 6
				}
			}).then(
				res => this.living = res.data.data
			)

			axios({
				url: '/api/goods/bigPic',
				params: {
					_page: 1,
					_limit: 1
				}
			}).then(
				res => this.bigPic = res.data.data
			)

			axios({
				url: '/api/goods/stuff',
				params: {
					_page: 1,
					_limit: 6
				}
			}).then(
				res => this.stuff = res.data.data
			)

		},
		updated() {},
		methods: {}
	}
</script>

<style>
	.Home {
		padding: 0 0.3rem;
		display: flex;
		flex: 1;
		flex-flow: column;
		overflow: auto;
	}

	.btn {
		display: flex;
		justify-content: space-between;
	}

	.mod_2 {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 0.2rem;
	}
</style>
