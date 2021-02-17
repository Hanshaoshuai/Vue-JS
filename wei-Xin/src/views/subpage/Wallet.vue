      msg: "Wx propsTos123",
<template>
  <div id="wallet" class='wallet'>
    <div class="paymentContent">
      <div class='hederTop'></div>
      <div class='contentC' @touchstart="touchstart($event,key)" @touchend="touchend($event,key)" @click="payment()" v-for="(item, key) in dateList" :key="key"></div>
    </div>
    
    <!-- <div class='textList' v-for="(item,i) in list" :key="i">
      <div></div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Wallet",
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
      dateList:[1,2,3],
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
      this.$store.dispatch({
        type: "head/headChange",
        amount: {
          hederTop: true,
          url: "img/imgs/SmallChangeTop.png"
        }
      });
      this.$router.push({ name: "SmallChange", params: { userId: "路由传参" } });
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
#wallet{
  width:100%;
  height:100%;
  position: relative;
  z-index: 110;
  .paymentContent{
    width:100%;
    height:22.63rem;
    // height:100%;
    // padding: 1.3rem 0 1.5rem 0;
    background-image:url("../../../public/img/imgs/Wallet.png");
    background-size:100%;
    .hederTop{
      width:100%;
      height:1.30rem;
      margin-bottom: 0.21rem;
    }
    .contentC{
      width:100%;
      height:1.52rem;
    }
  }
  .textList{
    width:100%;
    height:1.93rem;
  }
}
</style>

