<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>提现</span>
			</div>
			<div class="box" ref="wrapper">
				<div class="mui-content" style="margin-top: 0.55rem;">
					<div class="my-line" style="margin: 0.08rem 0;">
						<div class="my-line-left">提现方式</div>
						<div class="my-line-right">
							<select @click.stop="huoqu()" name="type" class="report-select" ref="Fangshi">
								<option value="支付宝" selected>支付宝</option>
								<option value="微信">微信</option>
							</select>
							<div class="mui-icon mui-icon-arrowdown"></div>
						</div>
					</div>
					<div class="recharge-box withdrawals-box">
						<div class="recharge-tit">提现金额</div>
						<div class="recharge-input-box bb">
							<div class="recharge-icon">￥</div>
							<!--<input v-model="jinE" type="text" class="recharge-input" name="many" onkeyup="value=value.replace(/[^\d]/g,'')" />-->
							<input v-model="jinE" type="text" class="recharge-input" name="many"/>
						</div>
						<div class="withdrawals-balance">提现的金额要>=100</div>
					</div>
					<div class="report-tips mb20">提交后需审核，1-2日内到账 </div>
					<div class="btn" @click.stop="tiXian()">提现</div>
				</div>
			</div>
			<!--<transition name="fade1">-->
				<zhifubao ref="Zhifubao" v-show="topBlock" :jinE="jinE"></zhifubao>
				<tixianok ref="TixianOk" :chanShu="chanShu" :fangshi="fangshi" :jinE="jinE"></tixianok>
			<!--</transition>-->
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import box from "../../box.vue";
	import zhifubao from "./ZhifuBao.vue";
	import tixianok from "./TixianOk.vue";
	
	export default {
		props:{
			token:{
//				type:Object
			}
		},
		data () {
			return {
				data:[],
				is_send:"",
				tucaoShow:true,
				topBlock:false,
				fuFangshi:'',
				jinE:"",
				chanShu:"",
				fangshi:"微信"
			}
		},
		mounted() {
			this.fuFangshi=this.$refs.Fangshi.value;
		},
		activated(){
			this.jinE='';
		},
		methods:{
			yijianHind(){
				Indicator.close();
				history.go(-1)
//				this.tucaoShow=false;
			},
			huoqu(){
				this.fuFangshi=this.$refs.Fangshi.value;
//				console.log(this.fuFangshi)
			},
			tiXian(){
				console.log(this.jinE)
				console.log(this.fuFangshi)
				var type;
				this.fuFangshi=this.$refs.Fangshi.value;
				if(this.jinE==''){
					Toast('请输入您的提现金额');
					return;
				}
//				if(this.jinE<100){
//					Toast('提现的金额要>=100');
//					return;
//				}
				if(this.fuFangshi=='支付宝'){
					this.topBlock=true;
					this.$refs.Zhifubao.tucaoShow=true;
				}else{
					var datas= {
						token: localStorage.getItem("token"),
						terminalNo: 3,
						money: this.jinE,
						type: '1'
					}
					Indicator.open({spinnerType: 'fading-circle'});
					this.$http.post(URL.path1+'pay/withdraw',datas,{emulateJSON:true}).then(function(res){ //获取订单信息接口
						console.log(res);
						Indicator.close();
						if(res.body.returnCode!="200"){
							Toast(res.body.msg);
						}else{
							this.chanShu=res.body.data;
							this.$refs.TixianOk.tucaoShow=true;
						}
					},function(res){
						Indicator.close();
					    console.log(res.status);
					})
				}
			}
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
			console.log(this.jinE)
			if(!/^\d*\.{0,1}\d{0,2}$/.test(this.jinE)){
				Toast('请填写数字');
				this.jinE=''
			}
		},
		components:{
			box,
			zhifubao,
			tixianok
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
		z-index:200;
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
			z-index:210;
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
			}
			.my-line-right {
				width:0.78rem;
				position:relative;
			  	display: flex;
			  	-webkit-box-align: center;
			  	-ms-flex-align: center;
			  	align-items: center;
			  	font-size: .16rem;
			  	.report-select {
			  		float:right;
			  		width:0.78rem;
				  	padding: 0;
				  	margin: 0;
				  	color: #666;
				  	font-size: .15rem;
				  	border:none;
				  	appearance: none;
				  	outline: none;
				  	z-index:10;
				  	background:none;
				}
				select::-ms-expand {
				  display: none;
				}
				.mui-icon{
					position:absolute;
					right:0.08rem;
					top:0;
					bottom:0;
					margin:auto;
					width:0.17rem;
					height:0.12rem;
					background-image:url("../img/xiatou.png");
					background-size:100% 100%;
					z-index:1;
				}
			}
			.my-line-left {
			  display: -webkit-box;
			  display: -ms-flexbox;
			  display: flex;
			  font-size: .17rem;
			}
			.withdrawals-box {
			  padding: .26rem .12rem 0 .12rem;
			  margin-bottom: 0;
			  background: #fff;
			  	.recharge-tit {
				  font-size: .16rem;
				  line-height: .16rem;
				  color: #333;
				}
				.recharge-input-box {
				  	display: flex;
				  	-webkit-box-align: center;
				  	-ms-flex-align: center;
				  	align-items: center;
				  	height: .5rem;
				  	border-bottom:1px solid #E4E5E6;
				  	.recharge-icon {
					  font-size: .22rem;
					}
					.recharge-input[type=text] {
					  border: 0;
					  margin: 0;
					  padding: 0 0 0 0.15rem;
					  font-size: .2rem;
					  outline: none;
					}
				}
				.withdrawals-balance {
				  height: .5rem;
				  display: flex;
				  -webkit-box-align: center;
				  -ms-flex-align: center;
				  align-items: center;
				  font-size: .14rem;
				  color: #888;
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
			}
		}
	}
</style>


