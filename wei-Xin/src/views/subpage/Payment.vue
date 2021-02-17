      msg: "Wx propsTos123",
<template>
  <div id="payment" class='payment'>
    <div class="paymentContent">
      <div class='hederTop'></div>
      <div class='contentList'>
        <div class='contentC' @touchstart="touchstart($event,key)" @touchend="touchend($event,key)" @click="payment($event)" v-for="(item, key) in dateList" :key="key"></div>
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
      // styleNme:''
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
      // this.styleNme='touchstartOpsity'
    },
    touchend(event){
      event.path[0].classList.remove("touchstartOpsity");
      // this.styleNme=''
    },
    payment(event) {
      console.log(event)
      this.$store.dispatch({
        type: "head/headChange",
        amount: {
          hederTop: true,
          url: "img/imgs/WalletTop.png"
        }
      });
      this.$router.push({ name: "Wallet", params: { userId: "路由传参" } });
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
    .contentList{
      width:9.5rem;
      height:3.90rem;
      margin: 0 auto;
      // background: #000000;
      display:flex;
			// flex-wrap:wrap;
      justify-content: space-around;
      .contentC{
        margin-top: 0.23rem;
        width:3.5rem;
        height:3.5rem;
        border-radius:0.2rem;
        // background: #000000;
        // opacity: 0.2;
      }
      // .contentC:first-child{
      //   float: left;
      //   margin: 0.2rem 0 0 0.2rem;
      // }
    }
  }
  .textList{
    width:100%;
    height:1.93rem;
  }
}
</style>

