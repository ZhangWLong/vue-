<template>
	<!-- 底部 -->
	<div class="Cell clear" @click="getDetail">
		<i  class="cell__l iconfont" v-html="data.iconfont"></i><!-- &#xe68f; -->
		<p class="text">{{data.title}} <span class="cell__r"><i class="iconfont cell__r">&#xe60b;</i></span></p>
	</div>
</template>

<script>
	export default { 
		name: 'Cell',
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
			    this.$router.push(`/column`);//编程式跳转
			  }
			}
		}
	}
</script>

<style>
	.Cell{height: 0.8rem;line-height: 0.8rem;}
	.cell__l{float: left;font-size: 0.45rem;width: 0.7rem;}
	.text{float: left;font-size: 0.25rem;border-bottom: 1px solid #ccc;width: 87%}
	.cell__r{float: right;}
</style>
