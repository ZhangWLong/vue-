<template>
	<!-- 底部 -->
	<div class="Mod1" @click="getDetail" >
		<i class="iconfont" v-html="data.icomfont"></i><!-- &#xe504; -->
		<p>{{data.title}}</p>
	</div>
</template>

<script>
	export default {
		name: 'Mod1',
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
		components: {
		},
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
	.Mod1{width: 20%;font-size: 0.2rem;text-align: center;height: 1rem;float: left;padding-top: 0.2rem;}
	.Mod1 .iconfont{font-size: 0.5rem;color: orange;}
	.Mod1 p{line-height: 0.4rem;}
</style>
