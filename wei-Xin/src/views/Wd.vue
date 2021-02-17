<template>
  <div class="wd">
    <div class='textList'>
      <div class="imgName"></div>
      <div class="zhiFu" :class="styleNme" @touchstart="touchstart()" @touchend="touchend()"></div>
      <div class="contList" v-for="(item, i) in contList" :key="i">
        <div></div>
      </div>
      <div class="sheZhi"></div>
      
    </div>
  </div>
</template>

<script>

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
    routerTo() {
      this.$router.push({ name: "About", params: { userId: "路由传参" } });
    }
  },
  watch: {
  },
  components: {
    
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
    .touchstartOpsity{
      opacity: 0.2;
      background: #000000;
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
