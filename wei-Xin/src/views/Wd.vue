<template>
  <div class="wd">
    <div class='textList'>
      <div class="imgName"></div>
      <div class="zhiFu" :class="styleNme" @touchstart="touchstart()" @touchend="touchend()" @click="payment()"></div>
      <div class="contList" v-for="(item, i) in contList" :key="i">
        <div></div>
      </div>
      <div class="sheZhi"></div>
      
    </div>
    <!-- <router-view /> -->
    <!-- <Payment/> -->
  </div>
</template>

<script>
// import Payment from "@/views/subpage/Payment.vue";
export default {
  name: "Wd",
  props: {},
  data() {
    return {
      contList: [1,2,3,4],
      styleNme:'touchstart'
    };
  },
  computed: {

  },
  created() {
  },
  mounted() {
  },
  methods: {
    touchstart(){
      this.styleNme='touchstartOpsity'
    },
    touchend(){
      this.styleNme='touchstart'
    },
    payment() {
      this.$store.dispatch({
        type: "head/headChange",
        amount: {
          hederTop: true,
          url: "img/imgs/ZhiFuTop.png"
        }
      });
      this.$router.push({ name: "Payment", params: { userId: "路由传参" } });
    }
  },
  watch: {
  },
  components: {
    // Payment
  }
};
</script>

<style lang="scss">
.wd{
  width:100%;
	height:auto;
  padding-bottom: 1.5rem;
  background-image:url("../../public/img/imgs/Wd.png");
  background-size:100%;
  .textList{
    width:100%;
    height:19.01rem;
    .imgName{
      width:100%;
      height:5.19rem;
      // background: red;
      margin-bottom: 0.24rem;
    }
    .zhiFu{
      width:100%;
      height:1.5rem;
      // background: red;
      margin-bottom: 0.24rem;
    }
    .contList{
      width:100%;
      height:1.5rem;
      // background: red;
    }
    .sheZhi{
      width:100%;
      height:1.5rem;
      // background: red;
      margin-top: 0.24rem;
    }
  }
}
</style>
