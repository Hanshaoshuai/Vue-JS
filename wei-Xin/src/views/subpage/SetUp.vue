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
            <font @click.stop="quxiao()" @touchstart="touchstart($event)" @touchend="touchend($event)">更改</font>
          </li>
          <li>
            <span></span>
            <input ref="mima" v-model="WxName" placeholder="设置微信名" class="last mint-field-core"/>
            <font ref="yanzhengMa" @click.stop="huoquMima()" @touchstart="touchstart($event)" @touchend="touchend($event)">设置</font>
          </li>
          <li>
            <span></span>
            <input ref="mimas" v-model="WxNameH" placeholder="设置微信号" class="last mint-field-core"/>
            <font @click.stop="mima()" @touchstart="touchstart($event)" @touchend="touchend($event)">设置</font>
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
      WxName: '',
      WxNameH: ''
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
    },
    huoquMima(){
      if(this.WxName == ''){
        localStorage.setItem("WxName",'设置');
      }else{
        localStorage.setItem("WxName",this.WxName);
      }
    },
    mima(){
      if(this.WxNameH == ''){
        localStorage.setItem("WxNameH",'设置');
      }else{
        localStorage.setItem("WxNameH",this.WxNameH);
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
              font-size: 0.41rem;
							margin:0 0.24rem;
              flex:1;
              text-align:center;
              line-height: 0.9rem;
              border:0.01rem solid #d0d0d0;
							// background-image:url("../DengLu/img/quxiao.png");
							background-size:100% 100%;
              border-radius: 0.12rem;
              background: #2aae67;
              color: #94d7b3;
							
						}
						&:nth-child(2n){
							border-bottom:1px solid #d0d0d0;
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

