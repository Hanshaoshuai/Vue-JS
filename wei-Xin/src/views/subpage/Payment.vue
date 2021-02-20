      msg: "Wx propsTos123",
<template>
  <div id="payment" class='payment'>
    <div class="paymentContent">
      <div class='hederTop'></div>
      <div class="WeChatSansStd">
        <div class="WeChatSansStd-Medium">
          <p class="vtc_top" style="display:inline;">￥</p>{{phone}}
        </div>
        <div class='contentList'>
          <div class='contentC' @touchstart="touchstart($event,key)" @touchend="touchend($event,key)" @click="payment($event,key)" v-for="(item, key) in dateList" :key="key"></div>
        </div>
      </div>
    </div>
    
    <!-- <div class='textList' v-for="(item,i) in list" :key="i">
      <div></div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Payment",
  props: {},
  data() {
    return {
      msg: "Wx propsTos123",
      aid: null,
      barcode_scan: false,
      ws: null,wo: null,
      scan: null,domready: false,
      results: null,
      list:[
        1,2,3,4,5,6,7,8,9,10,11,12,13,14
      ],
      dateList:[1,2],
      phone:"",
    };
  },
  computed: {
  },
  created() {
    this.phone = localStorage.getItem("phone") ? localStorage.getItem("phone") : 0;
  },
  mounted() {
  },
  methods: {
    touchstart(event){
      // console.log(event)
      event.path[0].classList.add('touchstartOpsity')
      // this.styleNme='touchstartOpsity'
    },
    touchend(event){
      event.path[0].classList.remove("touchstartOpsity");
      // this.styleNme=''
    },
    payment(event,key) {
      console.log(event)
      if(key=='1'){
        this.$store.dispatch({
          type: "head/headChange",
          amount: {
            hederTop: true,
            url: "img/imgs/WalletTop.png"
          }
        });
        this.$router.push({ name: "Wallet", params: { userId: "路由传参" } });
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
// .payment::-webkit-scrollbar{width:0px;}
#payment{
  width:100%;
  height:100%;
  position: relative;
  z-index: 100;
  .paymentContent{
    width:100%;
    height:31.16rem;
    // height:100%;
    // padding: 1.3rem 0 1.5rem 0;
    background-image:url("../../../public/img/imgs/ZhiFuT.png");
    background-size:100%;
    .hederTop{
      width:100%;
      height:1.30rem;
      margin-bottom: 0.21rem;
    }
    .WeChatSansStd{
      width:100%;
      position: relative;
      .WeChatSansStd-Medium{
        width:50%;
        position: absolute;
        right: 0;
        padding: 0.1rem;
        font-size: 0.4rem;
        text-align:center;
        background: #2aae67;
        top: 2.77rem;
        padding-right: 0.06rem;
        margin-right: 0.27rem;
        color: #94d7b3;
      }
      .contentList{
        width:9.5rem;
        height:3.90rem;
        margin: 0 auto;
        display:flex;
        justify-content: space-around;
        position: relative;
        z-index: 130;
        .contentC{
          margin-top: 0.23rem;
          width:3.5rem;
          height:3.5rem;
          border-radius:0.2rem;
        }
        // .contentC:first-child{
        //   float: left;
        //   margin: 0.2rem 0 0 0.2rem;
        // }
      }
    }
  }
  .textList{
    width:100%;
    height:1.93rem;
  }
}
</style>

