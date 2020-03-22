<template>
	<!-- 底部 -->
	<div class="Mod3" @click="getDetal">
		<img :src="data.img" alt="">
		<p class="title">{{data.title}}</p>
		<p class="tit__1">{{data.serves}}</p>
		<p class="preas">￥{{data.preas}}</p>
	</div>
</template>

<script>
	export default {
		name: 'Mod3',
		props: {
			data:{
			  type:Object,
			  required:true,
			  default:function(){ //props类型是个对象，默认值要是一个函数，最后需要返回对象
			    //...
			    return {}
			  }
			},
			index:{
			  type:Number,
			  default:null
			},
			apiName:{
			  type:String,
			  default:null
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {
			getDetal(){
			  if(this.apiName){
			    console.log('跳转详情',this.apiName);
			    // '路由跳转':'/detail/23423423443?apiname=column'
			    this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`);//编程式跳转
			  }
			}
		}
	}
</script>

<style>
	.Mod3{overflow: hidden;}
	.Mod3 img{border-radius: 0.2rem;width: 1.9rem;}
	.title{font-size: 0.2rem;line-height: 0.4rem;}
	.tit__1{font-size: 0.15rem;color: #9D9D9D;}
	.preas{color: red;}
</style>
	