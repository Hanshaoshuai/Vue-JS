<template>
  <div class="wx">
    <div class='textList' v-for="(item,i) in list" :key="i">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wx",
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
        1,2,3,4,5,6,7,8,9,10,11,12,13
      ]
    };
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    
  },
  watch: {
  },
  components: {
  }
};
</script>
<style lang="scss">
.wx{
  width:100%;
  height:auto;
  // height:100%;
  padding: 1.3rem 0 1.5rem 0;
  background-image:url("../../public/img/imgs/Wx.png");
  background-size:100%;
  // background-size:cover;最大铺满
  .textList{
    width:100%;
    height:1.93rem;
  }
  .barcode_scan{
    width:100%;
	  height:100%;
    background:#ffffff;
    // position:absolute;
    // left:0;
    // top:0;
    .nvbt{
      width:100%;
      font-size:20px;
      position:absolute;
      z-index: 1000;
    }
    #bcid {
      width: 100%;
      position: absolute;
      top: 0px;
      bottom: 44px;
      text-align: center;
    }
    #history{
      float: left;
      margin-top:100px;
    }
  }
}
</style>

