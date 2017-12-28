<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>提现详情</span>
			</div>
			<div class="box" ref="wrapper">
				<div class="mui-content">
					<div class="recharge-state">
						<div class="recharge-success-icon"></div>
						<div class="recharge-tit">提现申请成功</div>
					</div>
					<div class="my-line border-bottom">
						<div class="my-line-left">充值方式：</div>
						<div class="my-line-left my-line-right" id="type">{{fangshi}}</div>
					</div>
					<div class="my-line border-bottom">
						<div class="my-line-left">充值金额：</div>
						<div class="my-line-left my-line-right" id="many">{{jinE}}元</div>
					</div>
					<div class="my-line mb20">
						<div class="my-line-left">申请时间：</div>
						<div class="my-line-left my-line-right" id="time">{{chanShu.time}}</div>
					</div>
					<div class="btn" @click.stop="yijianHind()">完成</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import box from "../../box.vue";
	
	export default {
		props:{
			jinE:{
//				type:Object
			},
			chanShu:{},
			fangshi:{},
			jinE:{}
		},
		data () {
			return {
				tucaoShow:false,
				num:"",
				names:""
			}
		},
		mounted() {
			
		},
		activated(){
			
		},
		methods:{
			yijianHind(){
				Indicator.close();
				this.tucaoShow=false;
				this.$emit("to-parent",this.tucaoShow);
				history.go(-1);
			},
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
			box,
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
	  	transform: translateX(4.17rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
	.fade1-enter-active {
	  	transition: all .5s ease;
	}
	.fade1-leave-active {
	  	transition: all .5s ease;
	}
	.fade1-enter, .fade1-leave-active {
	  	transform: translateX(4.17rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
	.xiangmu{
		position:fixed;
		background:#f5f4f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:260;
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.46rem;
			font-weight:600;
			background:#ff7a59;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			color:#fff;
			z-index:280;
			.xiangmu-left{
				position:absolute;
				height:100%;
				padding-left:0.16rem;
				display:inline-block;
				top:0.04rem;
				left:0;
				img{
					height:0.2rem;
				}
			}
		}
		/*.box::-webkit-scrollbar{width:0px}*/
		.box{
			/*overflow-y:auto;*/
			width:100%;
			height:100%;
			/*-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.mui-content{
				padding-top:0.45rem;
				.recharge-state {
				    width: 100%;
				    height: 1.9rem;
				    background: #f2f2f2;
				    display: flex;
				    -webkit-box-orient: vertical;
				    -webkit-box-direction: normal;
				    -ms-flex-direction: column;
				    flex-direction: column;
				    -webkit-box-pack: center;
				    -ms-flex-pack: center;
				    justify-content: center;
				    -webkit-box-align: center;
				    -ms-flex-align: center;
				    align-items: center;
				    .recharge-success-icon {
					    width: 0.96rem;
					    height: 0.96rem;
					    background: url('../img/yuanduihao.png') no-repeat;
					    background-size: contain;
					}
					.recharge-tit {
					    font-size: .15rem;
					    line-height: .16rem;
					    margin-top: .1rem;
					}
				}
				.my-line {
				  display: flex;
				  height: .5rem;
				  padding: 0 .12rem;
				  background: #fff;
				  color: #333;
				  -webkit-box-align: center;
				  -ms-flex-align: center;
				  align-items: center;
				  -webkit-box-pack: justify;
				  -ms-flex-pack: justify;
				  justify-content: space-between;
				  font-size: .16rem;
				  	.my-input {
					  	border:none;
					  	appearance: none;
					  	outline: none;
					}
					.my-line-right {
					  color:#888;
					}
				}
				.report-tips {
				  padding-left: .22rem;
				  background: url('../img/report-tip-icon.png') no-repeat left center;
				  background-size: .16rem .16rem;
				  font-size: .14rem;
				  line-height: .16rem;
				  color: #666;
				  margin-left: .16rem;
				  margin-top: .1rem;
				  margin-bottom: 0.1rem;
				}
				.btn {
					width: 92%;
	  				height: 0.45rem;
	  				font-size: 0.2rem;
	  				text-align: center;
	  				line-height: 0.45rem;
					border-radius: 0.04rem;
				  	background: #ff7a59;
				  	color: #fff;
				  	margin: 0 auto;
				  	margin-top:0.2rem;
				}
			}
		}
	}
</style>


