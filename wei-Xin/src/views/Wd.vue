<template>
  <div class="wd">
    <div class="textList">
      <div class="imgName">
        <div ref="headImg" class="headImg" id="previews">
          <label>
            <img ref="imgheads" id="imgheads" src='../../public/img/shangchuan.png'>
            <input class="inputs" ref="file" type="file" @change="previewImage()" />
          </label>
        </div>
      </div>
      <div class="zhiFu" :class="styleNme" @touchstart="touchstart()" @touchend="touchend()" @click="payment()"></div>
      <div class="contList" v-for="(item, i) in contList" :key="i">
        <div></div>
      </div>
      <div class="sheZhi" :class="setUpName" @touchstart="touchstart(1)" @touchend="touchend(1)" @click="setUp()"></div>
      
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
      styleNme:'touchstart',
      setUpName: ''
    };
  },
  computed: {

  },
  created() {
    
  },
  mounted() {
    this.$refs.imgheads.src=localStorage.getItem("photourl")||'';
    console.log(this.$refs.headImg.style.backgroundImage='')
  },
  methods: {
    previewImage(){
      // var thata=this;
      var file=this.$refs.file
      var img = document.getElementById('imgheads');
      if(file.files && file.files[0]){
          img.onload = function(){
            if(this.clientWidth>this.clientHeight){
              this.style.width="auto";
              this.style.height="100%";
            }else{
              this.style.width="100%";
              this.style.height="auto";
            }
        }
        var reader = new FileReader();
        reader.onload = function(evt){
          // var zipFormData = new FormData();		//把要传的内容和参数放到   formdata中
          // zipFormData.append('upload_file', file.files[0]);
          // zipFormData.append('terminalNo', 3);
          // thata.shangchuan(zipFormData,img)
          if(!(file.files[0].type.indexOf('image')==0 && file.files[0].type && /\.(?:jpg|png|gif)$/.test(file.files[0].name)) ){  
              // Toast('图片只能是jpg,gif,png');  
              return ;
          }
          localStorage.setItem("photourl",evt.target.result);
          img.src = localStorage.getItem("photourl");
        }
        reader.readAsDataURL(file.files[0]);
      }else{
        file.select();
        var src = document.selection.createRange().text;
        img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
      }
    },
    // shangchuan(urlfrom,img,files){
    //   console.log(urlfrom,img,files)
    //   // localStorage.setItem("photourl",JSON.stringify(urlfrom));
    //   // img.src=localStorage.getItem("photourl");
    // },
    touchstart(key){
      if(key == 1){
        this.setUpName = 'touchstartOpsity';
      }else{
        this.styleNme='touchstartOpsity'
      }
    },
    touchend(){
      this.styleNme='touchstart'
      this.setUpName = ''
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
    },
    setUp(){
      this.$store.dispatch({
        type: "head/headChange",
        amount: {
          hederTop: true,
          url: "img/imgs/setUpTop.png"
        }
      });
      this.$router.push({ name: "SetUp", params: { userId: "路由传参" } });
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
      .headImg{
        float:left;
        margin:1.61rem 0 0 0.64rem;
        width:1.76rem;
        height:1.76rem;
        border-radius: 0.16rem;
        background: #ededed;
        label{
          width:100%;
          height:100%;
          background:#fff;
          position:relative;
          overflow:hidden;
          display:flex;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          #imgheads{
            width:100%;
            // height:100%;
            filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image);
          }
          .inputs{
            position:absolute;
            width:100%;
            height:100%;
            opacity:0;
            left:0rem;
            top:0rem;
            /*z-index:-1;*/
            
          }
        }
      }
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
