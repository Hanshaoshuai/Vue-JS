      msg: "Wx propsTos123",
<template>
  <div id="setUp" class='setUp'>
    <div class="setUpContent">
      <div class='hederTop'></div>
      <div class='hederTops'>
        <ul>
          <li>
            <span></span>
            <input ref="shouji" v-model="phone" placeholder="设置钱包金额" type="number" class="ferst mint-field-core"/>
            <font @click.stop="quxiao()">更改</font>
          </li>
          <li>
            <span></span>
            <input ref="mima" v-model="texts" placeholder="请输验证码" type="number" class="last mint-field-core"/>
            <font v-show="shoujis" ref="yanzhengMa" @click.stop="huoquMima()">获取验证码</font>
          </li>
          <li>
            <span></span>
            <input ref="mimas" v-model="password" placeholder="请输入密码" type="password" class="last mint-field-core"/>
            <font v-show="mimas" @click.stop="mima()"></font>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetUp",
  props: {},
  data() {
    return {
      shoujis: false,
      mimas: false,
      msg: "Wx propsTos123",
      aid: null,
      barcode_scan: false,
      ws: null,wo: null,
      scan: null,domready: false,
      results: null,
      list:[
        1,2,3,4,5,6,7,8,9,10,11,12,13,14
      ],
      dateList:[1,2,3],
      phone: '',
      texts: '',
      password: ''
    };
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    touchstart(event){
      // console.log(event)
      event.path[0].classList.add('touchstartOpsity')
    },
    touchend(event){
      event.path[0].classList.remove("touchstartOpsity");
    },
    payment() {
      this.barcode_scan = !this.barcode_scan;
    },
    quxiao(){
      if(this.phone == ''){
        localStorage.setItem("phone",0);
      }else{
        localStorage.setItem("phone",this.phone);
      }
    }
  },
  watch: {
  },
  components: {
  }
};
</script>
<style lang="scss">
.fade-enter-active {
	  	transition: all .3s ease;
	}
	.fade-leave-active {
	  	transition: all .3s ease;
	}
	.fade-enter, .fade-leave-active {
	  	transform: translateX(10.80rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
// .payment::-webkit-scrollbar{width:0px;}
#setUp{
  width:100%;
  height:100%;
  position: relative;
  z-index: 110;
  .setUpContent{
    width:100%;
    height:22.63rem;
    background: #ededed;
    // height:100%;
    // padding: 1.3rem 0 1.5rem 0;
    // background-image:url("../../../public/img/imgs/Wallet.png");
    background-size:100%;
    .hederTop{
      width:100%;
      height:1.30rem;
      margin-bottom: 0.21rem;
    }
    .hederTops{
      width:90.8%;
				margin:0 auto;
				position:relative;
				margin-top:0.3rem;
				border:1px solid #d0d0d0;
				ul{
					width:100%;
					li{
						width:100%;
						padding:0.21rem 0;
						display:flex;
						position:relative;
						input{
							height:0.78rem;
							flex:3;
							padding-left:0.3rem;
							border-left:0.01rem solid #d0d0d0;
						}
						input::-webkit-input-placeholder{ 
							color: #d0d0d0; 
						} 
						&:first-child{
							border-bottom:1px solid #d0d0d0;
						}
						span{
							display:inline-block;
							width:0.42rem;
							height:0.48rem;
							margin:0.15rem 0.48rem 0 0.39rem;
							// background-image:url("../DengLu/img/gerens.png");
							background-size:100% 100%;
							
						}
						font{
							display:inline-block;
              font-size: 0.5rem;
							margin:0 0.24rem;
              flex:1;
              text-align:center;
              line-height: 0.88rem;
              border:0.01rem solid #d0d0d0;
							// background-image:url("../DengLu/img/quxiao.png");
							background-size:100% 100%;
							
						}
						&:last-child{
							// span{
							// 	// background-image:url("../DengLu/img/mimas.png");
							// }
							font{
								display:inline-block;
								width:0.19rem;
								height:0.13rem;
								margin:0.06rem 0.15rem 0 0;
								// background-image:url("../DengLu/img/xianshimima.png");
								background-size:100% 100%;
								
							}
						}
						&:nth-child(2n){
							border-bottom:1px solid #d0d0d0;
							// span{
							// 	// background-image:url("../DengLu/img/yanzheng.png");
							// }
							font{
								display:inline-block;
								padding:0.08rem 0.17rem;
								border-radius:0.04rem;
								background:#ff7a59;
								width:auto;
								height:auto;
								margin:0;
								position:absolute;
								top:0.05rem;
								right:0.04rem;
								color:#fff;
							}
						}
					}
				}
    }
    .WeChatSansStd{
      width:100%;
      .WeChatSansStd-Medium{
        padding: 0.1rem;
        font-size: 0.5rem;
        float: right;
        margin: 0.36rem 0.85rem 0 0;
        background: #ffffff;
      }
    }
    .contentC{
      width:100%;
      height:1.52rem;
      position: relative;
      z-index: 111;
    }
  }
  .textList{
    width:100%;
    height:1.93rem;
  }
}
</style>

