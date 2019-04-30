<template>
	<!--<transition name="fade">-->
		<div class="zhaiquan">
			<transition name="fade">
				<div ref="Boxs" class="gereng" v-show="wodeblock" @click.stop="none()" @touchstart="start($event)" @touchmove.stop="huadong($event)" @touchend.stop="taiqi($event)">
					<wode></wode>
				</div>
			</transition>
			<div class="xiangmu-header">
				<span class="xiangmu-left" @click.stop="sousuo()"><img src="./img/liebiao.png"/></span>
				<span>并购</span>
			</div>
			<div class="leibiao">
				<div style="height:0.46rem;"></div>
				<ul ref="boxs" class="content-header ziliao">
					<li class="bianse" @click.stop="types($event,'0')">
						<span>买方</span>
					</li>
					<li @click.stop="types($event,'1')" style="border-right:1px solid #C7C7CC; border-left:1px solid #C7C7CC;">
						<span>卖方</span>
					</li>
					<li style="flex:1;position:relative;" class="last" @click.stop="tianjia()">
						<img src="./img/add.png"/>
						<div v-show="daohangblock" class="daohang">
							<p></p>
							<span @click.stop="daohang('1')"><font class="tubiao1"></font>筛选</span>
							<span class="centers" @click.stop="daohang('2')"><font class="tubiao2"></font>买方发布</span>
							<span @click.stop="daohang('3')"><font class="tubiao3"></font>卖方发布</span>
						</div>
					</li>
				</ul>
				<div ref="searchBox" class="searchBox">
					<div class="home-search" @click.stop="sousuogo()">
						<img class="stalt" src="./img/circle_hot_search.png"/>
						<input v-model="textsou" placeholder="关键词搜索项目" type="text" class="mint-field-core">
						<img class="quxiaos" @click.stop="qingkong()" src="./img/quxiao.png"/>
					</div>
				</div>
				<div v-show="xiangmublock" class="ContentText ContentText1" @click.stop="xiangmucont()">
					<div class="TextMame">
						<div class="margin">		<!--类型 1:定增 2:做市 3:转老股 4:股权质押 5:融资租赁 6:研报 6：公司调研-->
							<span class=" ">B001</span>
							<!--<span v-if="item.type==2" class="texts">做市</span>
							<span v-if="item.type==3" class="texts">转老股</span>
							<span v-if="item.type==4" class="texts">股权质押</span>
							<span v-if="item.type==5" class="texts">融资租赁</span>
							<span v-if="item.type==6" class="texts">研报支持</span>
							<span v-if="item.type==7" class="texts">公司调研</span>-->
							<!--<span class="texts">* {{item.com_short.substr(1, 1)}} *</span>
							<span class="texts">（{{item.com_code.substr(0, 2)}} **** ）</span>-->
							<span class="texts">收购军工、高端制造类标的</span>
							<span class="texts right">进行中</span>
						</div>
					</div>
					<div class="BottomText">
						<span class="texts">加肥加大今天的法社呢寄过来的房价高的委法法社呢寄过来的房价高的社呢寄过来的房法社呢寄过来的房价高的价高的 书法社呢寄过来法社呢寄过来的房价高的的房价高的健康的反光镜 苦尽甘来的几个</span>
					</div>
					<div class="ContentTime border-top" @click.stop="Guquanzhaiyao()">
						<div class="tishi-right">
							<span>888</span>&nbsp;人浏览
						</div>
					</div>
				</div>
				<div v-show="zijin" class="ContentText ContentText1" @click.stop="zijincont()">
					<div class="TextMame">
						<div class="margin">		<!--类型 1:定增 2:做市 3:转老股 4:股权质押 5:融资租赁 6:研报 6：公司调研-->
							<span class="">S001</span>
							<!--<span v-if="item.type==2" class="texts">做市</span>
							<span v-if="item.type==3" class="texts">转老股</span>
							<span v-if="item.type==4" class="texts">股权质押</span>
							<span v-if="item.type==5" class="texts">融资租赁</span>
							<span v-if="item.type==6" class="texts">研报支持</span>
							<span v-if="item.type==7" class="texts">公司调研</span>-->
							<!--<span class="texts">* {{item.com_short.substr(1, 1)}} *</span>
							<span class="texts">（{{item.com_code.substr(0, 2)}} **** ）</span>-->
							<span class="texts">收购军工、高端制造类标的</span>
							<span class="texts right">已完成</span>
						</div>
					</div>
					<div class="BottomText">
						<span class="texts">加肥加大今天的就如同模具费是否委托金额日头 好好干的花果山 书法社呢寄过来的房价高的健康的反光镜 苦尽甘来的几个</span>
					</div>
					<div class="ContentTime border-top" @click.stop="Guquanzhaiyao()">
						<div class="tishi-right">
							<span>888</span>&nbsp;人浏览
						</div>
					</div>
				</div>
			</div>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
//	import box from "../box.vue"
	import {URL} from '../../common/js/path';
	import wode from "../wode/wode.vue"
	import { Toast } from 'mint-ui';
//	import BScroll from "better-scroll";
	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				textsou:'',
				data:"",
				inof:"",
				wodeblock:false,
				daohangblock:false,
				xiangmublock:true,
				zijin:false,
				touch:'',
				startX:"",
				startY:'',
				endX:'',
				endY:'',
				distanceX:"",
				distanceY:"",
				drund:""
			}
		},
		activated(){
			this.photourl=localStorage.getItem("photourl");
			this.$nextTick(function(){
				
			});
		},
		created(){
			
		},
		mounted(){
//			this.$store.dispatch('saveRegisterPhone','并购');
			this.$store.commit('saveRegisterPhone','并购');
		},
		methods:{
			sousuogo(){
				
			},
			qingkong(){
				
			},
			types(e,id){
				var typeLi=this.$refs.boxs.getElementsByTagName("li");
				var length=typeLi.length;
				this.board=id;
//				console.log(this.board)
				for(var i=0; i<length; i++){
					typeLi[i].setAttribute("class","bianse1");
				}
				typeLi[id].setAttribute("class","bianse")
				this.daohangblock=false;
				if(id=="0"){
					this.zijin=false;
					this.xiangmublock=true;
				}else{
					this.xiangmublock=false;
					this.zijin=true;
				}
			},
			tianjia(){
				if(this.daohangblock==false){
					this.daohangblock=true;
				}else{
					this.daohangblock=false;
				}
			},
			daohang(id){
				this.daohangblock=false;
				if(id=='1'){
					alert("1")
//					window.location.href="#/wode";
				}
				if(id=='2'){
					window.location.href="#/fabujia";
				}
				if(id=='3'){
					window.location.href="#/fabujian";
				}
			},
			xiangmucont(){
				this.daohangblock=false;
				window.location.href="#/jiafangxiangqing";
			},
			zijincont(){
				this.daohangblock=false;
				window.location.href="#/jianfangxiangqing";
			},
			none(){
				this.wodeblock=false;
				this.$refs.Boxs.style.left='0px';
			},
			start(event){
				this.touch = event.targetTouches[0];
			    //滑动起点的坐标
			    this.startX = this.touch.pageX;
			    this.startY = this.touch.pageY;
			},
			huadong(event){
				var clientWidth =document.documentElement.clientWidth;
				var touch1 = event.targetTouches[0];
		      	//手势滑动时，手势坐标不断变化，取最后一点的坐标为最终的终点坐标
		        this.endX = touch1.pageX;
		        this.endY = touch1.pageY;
				var startX = event.target.offsetLeft;
				this.drund=Math.floor(this.startX-this.endX)
				console.log(Math.floor(clientWidth-this.endX))
//				console.log(clientWidth)
				if(this.drund>0){
//					event.target.style.left=-(this.startX-this.endX)+'px'
					this.$refs.Boxs.style.left=-(this.startX-this.endX)+'px'
				}else{
					this.$refs.Boxs.style.left='0px'
				}
				
//				var startX = event.originalEvent.changedTouches[0].pageX;
//				var startY = event.originalEvent.changedTouches[0].pageY;
//				console.log(startX)
//				console.log(startY)
			},
			taiqi(event){
				if(this.drund>100){
					this.wodeblock=false;
					this.drund=0;
				}else{
					var that=this;
					var z=-(this.startX-this.endX);
					var run=setInterval(function(){
						if(z<0){
							z+=3
							that.$refs.Boxs.style.left=z+'px';
						}else{
							that.$refs.Boxs.style.left='0px';
							clearInterval(run);
						}
						
					},0.5)
				}
			},
			someAction1(){
				alert('someAction1')
			},
			someAction2(){
				alert('someAction2')
			},
			sousuo(){
				if(localStorage.getItem("shifouZhuce")==2){
					this.wodeblock=true;
					this.$refs.Boxs.style.left='0px';
//					window.location.href="#/wode";
				}else{
					if(localStorage.getItem("shifouZhuce")=='6'){
						Toast(localStorage.getItem('houtaiTishi'))
					}else{
//						this.jiantingTongguo()
//						if(this.shengqingZhongtishi=='1'){
////							window.location.href="#/denglu"
//						}else{
////							Toast(this.shengqingZhongtishi)
//						}
					}
				}
			},
			//类型 1:企业 2:投资机构 3:合格投资人 4咨询机构/研究咨询 5:券商研究员/财务顾问 6:新三板做市商
		},
		events:{
			
		},
		filters:{
//			formatDate(time){
//				let date = new Date(time);
//				return formatDate(date,'yyyy-MM-dd hh:mm');
//			}
		},
		updated(){
			
		},
		components:{
//			box,
			wode
		}
	}
</script>

<style lang="scss" scoped>
	.fade-enter-active {
	  	transition: all .5s ease;
	}
	.fade-leave-active {
	  	transition: all .5s ease;
	}
	.fade-enter, .fade-leave-active {
	  	transform: translateX(-4.17rem);
	  	/*transform:rotate(360deg);*/
	  	opacity: 0;
	}
	.zhaiquan{
		width:100%;
		height:100%;
		position:absolute;
    	top:0;
    	left:0;
    	.gereng{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:100%;
			z-index:188;
			background:rgba(0,0,0,0.5);
		}
		/*position:relative;*/
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.46rem;
			font-weight:600;
			background:#f5f4f9;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			/*color:#fff;*/
			z-index:166;
			.xiangmu-left{
				position:absolute;
				height:100%;
				padding-left:0.16rem;
				display:inline-block;
				top:0.06rem;
				left:0;
				img{
					height:0.24rem;
				}
			}
		}
		.leibiao{
			.content-header{
				width:100%;
				height:0.33rem;
				padding:0.12rem 0;
				background:#fff;
				display:flex;
				li{
					flex:2;
					text-align:center;
					display:flex;
					/*text-align: center;
					align-content: center;*/
					align-items: center;
					justify-content: center;
					span{
						font-size:0.14rem;
					}
					.zanwu{
						color:#ff7a59;
						font-size:0.14rem;
					}
				}
				/*.rightleft{
					border-right:1px solid #C7C7CC;
					border-left:1px solid #C7C7CC;
				}*/
				/*.last{
					flex:1;
				}*/
				.bianse{
					color:red;
				}
				.daohang{
					position:absolute;
					width:1.50rem;
					height:1.50rem;
					background:#666666;
					color:#ffffff;
					top:0.5rem;
					right:0.1rem;
					display:flex;
					flex-direction: column;
					z-index:1000;
					p{
						width:0.12rem;
						height:0.12rem;
						background:#666666;
						position:absolute;
						top:-0.04rem;
						right:0.24rem;
						transform:rotate(45deg);
						/*background-image:url("");*/
					}
					span{
						flex:1;
						display:flex;
						/*text-align:center;*/
						align-items: center;
						/*justify-content: center;*/
						font{
							display:inline-block;
							width:0.2rem;
							height:0.2rem;
							margin:0 0.2rem;
						}
						.tubiao1{
							background-image:url("./img/shaixuan.png");
							background-size:100% 100%;
						}
						.tubiao2{
							background-image:url("./img/shaixuan.png");
							background-size:100% 100%;
						}
						.tubiao3{
							background-image:url("./img/shaixuan.png");
							background-size:100% 100%;
						}
					}
					.centers{
						border-top:1px solid #C7C7CC;
						border-bottom:1px solid #C7C7CC;
					}
				}
			}
			@import "../../common/stylus/zhaiquan1.scss"
		}
	}
</style>


