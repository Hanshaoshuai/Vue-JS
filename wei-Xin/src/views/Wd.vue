<template>
  <div class="wd">
    <div class="textList">
      <div class="imgName">
        <div ref="headImg" class="headImg" id="previews">
          <label>
            <img ref="imgheads" id="imgheads" src='../../public/img/shangchuan.png'>
            <!-- <input class="inputs" ref="file" type="file" @change="previewImage()" /> -->
            <input class="inputs"  ref="file" type="file" id="change" accept="image" @change="change">
          <!-- <label for="change"></label> -->
          </label>
        </div>
        <div class="names vtc_top">
          <p class="">{{WxName}}</p>
          <p>微信号：<span>{{WxNameH}}</span></p>
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
    <div id="demo">
      <!-- 遮罩层 -->
      <div class="container" v-show="panel">
        <div>
          <img id="image" :src="url" alt="Picture">
        </div>
        <button type="button" id="buttonLeft" @click="cropLeft">取消</button>
        <button type="button" id="button" @click="crop">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
// import Payment from "@/views/subpage/Payment.vue";

import Cropper from 'cropperjs'

export default {
  name: "Wd",
  props: {},
  data() {
    return {
      contList: [1,2,3,4],
      styleNme:'touchstart',
      setUpName: '',
      WxName: '请设置！',
      WxNameH: '请设置！',
      headerImage:'../../public/img/shangchuan.png',
      picValue:'',
      cropper:'',
      croppable:false,
      panel:false,
      url:''

    };
  },
  computed: {
  
  },
  created() {
    if(localStorage.getItem("WxName")){
      this.WxName=localStorage.getItem("WxName");
    }
    if(localStorage.getItem("WxNameH")){
      this.WxNameH=localStorage.getItem("WxNameH");
    }
  },
  mounted() {
    if(localStorage.getItem("photourl")){
      this.$refs.imgheads.src=localStorage.getItem("photourl")
    }
    // console.log(this.$refs.headImg.style.backgroundImage='')
    //初始化这个裁剪框
    var self = this;
    var image = document.getElementById('image');
    this.cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      background:false,
      zoomable:false,
      ready: function () {
        self.croppable = true;
      }
    });
  },
  methods: {
    getObjectURL (file) {
      var url = null ; 
      if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
      } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
      } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
      }
      return url ;
    },
    change (e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.panel = true;
      this.picValue = files[0];
      
      this.url = this.getObjectURL(this.picValue);
      //每次替换图片要重新得到新的url
      if(this.cropper){
        this.cropper.replace(this.url);
      }
      this.panel = true;
 
    },
    cropLeft(){
      this.$refs.file.value='';
      this.panel = false;
    },
    crop () {
        this.panel = false;
        var croppedCanvas;
        var roundedCanvas;
 
        if (!this.croppable) {
          return;
        }
        // Crop
        croppedCanvas = this.cropper.getCroppedCanvas();
        console.log(this.cropper)
        // Round
        roundedCanvas = this.getRoundedCanvas(croppedCanvas);
 
        this.$refs.imgheads.src = this.headerImage = roundedCanvas.toDataURL();
        this.postImg()
        
    },
    getRoundedCanvas (sourceCanvas) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var width = sourceCanvas.width;
      var height = sourceCanvas.height;
      
      canvas.width = width/2;//除以是为了压缩2倍大小（本地储存有限制）
      canvas.height = height/2;//除以是为了压缩2倍大小（本地储存有限制）
 
      context.imageSmoothingEnabled = true;
      context.drawImage(sourceCanvas, 0, 0, width/2, height/2);//除以是为了压缩2倍大小（本地储存有限制）
      context.globalCompositeOperation = 'destination-in';
      context.beginPath();
      // context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);//圆形处理
      context.fill();
 
      return canvas;
    },
    postImg () {
      //这边写图片的上传
      localStorage.setItem("photourl",this.headerImage);
      this.$refs.file.value='';
    },


    //以下上传头像方法不再使用
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

#demo #button, #buttonLeft {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 80px;
  height: 40px;
  border:none;
  border-radius: 5px;
  background:white;
}
#demo #buttonLeft{
  left: 10px;
}
#demo .show {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
  // border-radius: 50%;
  border: 1px solid #d5d5d5;
}
#demo .picture {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover; 
}
#demo .container {
  width: 100%;
  height: 100%;
    z-index: 2000;
    position: fixed;
    // padding-top: 60px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,1);
}
 
#demo #image {
  max-width: 100%;
}
 
// .cropper-view-box,.cropper-face {
  // border-radius: 50%;
// }
/*!
 * Cropper.js v1.0.0-rc
 * https://github.com/fengyuanchen/cropperjs
 *
 * Copyright (c) 2017 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2017-03-25T12:02:21.062Z
 */
 
.cropper-container {
  font-size: 0;
  line-height: 0;
 
  position: relative;
 
  -webkit-user-select: none;
 
     -moz-user-select: none;
 
      -ms-user-select: none;
 
          user-select: none;
 
  direction: ltr;
  -ms-touch-action: none;
      touch-action: none
}
 
.cropper-container img {
  /* Avoid margin top issue (Occur only when margin-top <= -height) */
  display: block;
  min-width: 0 !important;
  max-width: none !important;
  min-height: 0 !important;
  max-height: none !important;
  width: 100%;
  height: 100%;
  image-orientation: 0deg
}
 
.cropper-wrap-box,
.cropper-canvas,
.cropper-drag-box,
.cropper-crop-box,
.cropper-modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
 
.cropper-wrap-box {
  overflow: hidden;
}
 
.cropper-drag-box {
  opacity: 0;
  background-color: #fff;
}
 
.cropper-modal {
  opacity: .5;
  background-color: #000;
}
 
.cropper-view-box {
  display: block;
  overflow: hidden;
 
  width: 100%;
  height: 100%;
 
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
}
 
.cropper-dashed {
  position: absolute;
 
  display: block;
 
  opacity: .5;
  border: 0 dashed #eee
}
 
.cropper-dashed.dashed-h {
  top: 33.33333%;
  left: 0;
  width: 100%;
  height: 33.33333%;
  border-top-width: 1px;
  border-bottom-width: 1px
}
 
.cropper-dashed.dashed-v {
  top: 0;
  left: 33.33333%;
  width: 33.33333%;
  height: 100%;
  border-right-width: 1px;
  border-left-width: 1px
}
 
.cropper-center {
  position: absolute;
  top: 50%;
  left: 50%;
 
  display: block;
 
  width: 0;
  height: 0;
 
  opacity: .75
}
 
.cropper-center:before,
  .cropper-center:after {
  position: absolute;
  display: block;
  content: ' ';
  background-color: #eee
}
 
.cropper-center:before {
  top: 0;
  left: -3px;
  width: 7px;
  height: 1px
}
 
.cropper-center:after {
  top: -3px;
  left: 0;
  width: 1px;
  height: 7px
}
 
.cropper-face,
.cropper-line,
.cropper-point {
  position: absolute;
 
  display: block;
 
  width: 100%;
  height: 100%;
 
  opacity: .1;
}
 
.cropper-face {
  top: 0;
  left: 0;
 
  background-color: #fff;
}
 
.cropper-line {
  background-color: #39f
}
 
.cropper-line.line-e {
  top: 0;
  right: -3px;
  width: 5px;
  cursor: e-resize
}
 
.cropper-line.line-n {
  top: -3px;
  left: 0;
  height: 5px;
  cursor: n-resize
}
 
.cropper-line.line-w {
  top: 0;
  left: -3px;
  width: 5px;
  cursor: w-resize
}
 
.cropper-line.line-s {
  bottom: -3px;
  left: 0;
  height: 5px;
  cursor: s-resize
}
 
.cropper-point {
  width: 5px;
  height: 5px;
 
  opacity: .75;
  background-color: #39f
}
 
.cropper-point.point-e {
  top: 50%;
  right: -3px;
  margin-top: -3px;
  cursor: e-resize
}
 
.cropper-point.point-n {
  top: -3px;
  left: 50%;
  margin-left: -3px;
  cursor: n-resize
}
 
.cropper-point.point-w {
  top: 50%;
  left: -3px;
  margin-top: -3px;
  cursor: w-resize
}
 
.cropper-point.point-s {
  bottom: -3px;
  left: 50%;
  margin-left: -3px;
  cursor: s-resize
}
 
.cropper-point.point-ne {
  top: -3px;
  right: -3px;
  cursor: ne-resize
}
 
.cropper-point.point-nw {
  top: -3px;
  left: -3px;
  cursor: nw-resize
}
 
.cropper-point.point-sw {
  bottom: -3px;
  left: -3px;
  cursor: sw-resize
}
 
.cropper-point.point-se {
  right: -3px;
  bottom: -3px;
  width: 20px;
  height: 20px;
  cursor: se-resize;
  opacity: 1
}
 
@media (min-width: 768px) {
 
  .cropper-point.point-se {
    width: 15px;
    height: 15px
  }
}
 
@media (min-width: 992px) {
 
  .cropper-point.point-se {
    width: 10px;
    height: 10px
  }
}
 
@media (min-width: 1200px) {
 
  .cropper-point.point-se {
    width: 5px;
    height: 5px;
    opacity: .75
  }
}
 
.cropper-point.point-se:before {
  position: absolute;
  right: -50%;
  bottom: -50%;
  display: block;
  width: 200%;
  height: 200%;
  content: ' ';
  opacity: 0;
  background-color: #39f
}
 
.cropper-invisible {
  opacity: 0;
}
 
.cropper-bg {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMzTjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
}
 
.cropper-hide {
  position: absolute;
 
  display: block;
 
  width: 0;
  height: 0;
}
 
.cropper-hidden {
  display: none !important;
}
 
.cropper-move {
  cursor: move;
}
 
.cropper-crop {
  cursor: crosshair;
}
 
.cropper-disabled .cropper-drag-box,
.cropper-disabled .cropper-face,
.cropper-disabled .cropper-line,
.cropper-disabled .cropper-point {
  cursor: not-allowed;
}
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
          border-radius: 0.16rem;
          #imgheads{
            width:100%;
            border-radius: 0.16rem;
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
      .names{
        float:left;
        width:55%;
        height:1.76rem;
        margin:1.61rem 0 0 0.42rem;
        background: #fff;
        position: relative;
        p:first-child{
          font-weight: bold;
          font-size: 0.60rem;
          top:0.19rem;
          left:0;
          line-height: 0.5rem;
          color: #191919;
          letter-spacing: 0.0rem;
        }
        p:last-child{
          font-size: 0.41rem;
          left:0;
          bottom:0.05rem;
          color: #7f7f7f;
          span{
            display: inline-block;
            margin-left: -0.1rem;
          }
        }
        p{
          width:100%;
          position: absolute;
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
