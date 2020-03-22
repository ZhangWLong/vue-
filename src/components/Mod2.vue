<template>
	<!-- 底部 -->
	<div class="Mod2" @click="getDetail">
		<img :src="data.img" alt="">
	</div>
</template>

<script>
	export default {
		name: 'Mod2',
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
			getDetail(){
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
	.Mod2{border-radius: 0.2rem;overflow: hidden;float: left;}
	.Mod2 img{width: 100%;height: 100%;}
</style>
