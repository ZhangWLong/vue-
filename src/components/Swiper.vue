<template>
	<!-- 底部 -->
	<div class="Swiper">
		<ul class="clear">
			
			<router-link 
			v-for="item of data"
			:key="item._id"
			:to="{name:'Detail',params:{_id:item._id},query:{apiName:apiName}}"
			tag="li"
			>
				<img :src="item.banner" alt="" />
				<div class="text-box">
					<h2>{{item.title}}</h2>
					<p>{{item.sub_title}}</p>
				</div>
			</router-link>
		
		</ul>
	</div>
</template>

<script>
  import Swipe from '../assets/js/swipe.js'
  // import $ from '../assets/js/jquery-1.7.2.js'
  import $ from 'jquery';  // npm i jquery@1.7.2 -S
  export default {
    name:'swiper',
    props:['data','apiName'],
    components:{},
    mounted(){
      // console.log('swiper mounted')
    },
    updated(){
		// console.log('swiper updated')
		//js 控制 轮播图，计算横向长度=item*num
		var mySwipe = new Swipe($('.Swiper')[0],{
		  auto:2000,
		  continuous:true,
		  stopPropation:true,
		  callback:function (index,element){
		    $('.Swiper ol li').removeClass('active');
		    $('.Swiper ol li').eq(index).addClass('active');
		  }
		})
	},
    methods:{}
  }
</script>

<style>
  .Swiper{position: relative;overflow: hidden; z-index: 1;border-radius: 0.2rem;}
  .Swiper ul li{width:6.4rem;float:left;position: relative;}
  .Swiper ul li img{width:100%; display:block;}
  .Swiper ul li .text-box{width:5.8rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
  .text-box h2{  padding:0 0.3rem;font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
  .text-box p{  padding:0 0.3rem;line-height:100%;}
  
  .Swiper ol{position:absolute; right:0.2rem;bottom:0.2rem;}
  .Swiper ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
  .Swiper ol li.active{ background:#fff;}
</style>
