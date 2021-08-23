      msg: "Wx propsTos123",
<template>
  <div id="SignIn" class='SignIn'>
    <div class="setUpContent">
      <div class='hederTop'></div>
      <div id="dcontent" class="dcontent">
			<br/>
			<p id="info" style="padding: 0 1em;text-align:left;">登录认证通道信息：</p>
			<div style="padding: 0.5em 1em;"><hr color="#EEE"/></div>
			<br/>
			<div id="oauth"></div>
			<br/>
			<div class="button button-waring" onclick="logoutAll()">注销登录</div>
      <div class='hederTops'>
        <ul>
          <li>
            <!-- <span></span> -->
            <!-- <input ref="shouji" v-model="phone" placeholder="登录密码" type="" class="ferst mint-field-core"/> -->
            <font @click.stop="quxiao()" @touchstart="touchstart($event)" @touchend="touchend($event)">微信登录</font>
          </li>
        </ul>
      </div>
		</div>
		<div id="output">
OAuth模块管理客户端的用户授权登录验证功能，允许应用访问第三方平台的资源。
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
      phone: '',
      texts: '',
      password: '',
      auths:{}
    };
  },
  computed: {
  },
  created() {
    if(localStorage.getItem("SignIn")){
			history.go(-1);
    }
  },
  mounted() {
  },
  methods: {
    quxiao(){
      window.outSet("----- 登录认证 -----");
      let auth={"id":"weixin","description":"微信","authResult":null,"userInfo":null};
      if(auth){
        var w=null;
        if(window.plus.os.name=="Android"){
          w=window.plus.nativeUI.showWaiting();
        }
        document.addEventListener("pause",function(){
          setTimeout(function(){
            w&&w.close();w=null;
          },2000);
        }, false );
        auth.login(function(){
          w&&w.close();w=null;
          window.outLine("登录认证成功：");
			    window.outLine(JSON.stringify(auth.authResult));
          this.userinfo(auth);
        },function(e){
          w&&w.close();w=null;
          window.plus.nativeUI.alert("详情错误信息请参考授权登录(OAuth)规范文档：http://www.html5plus.org/#specification#/specification/OAuth.html",null,"登录失败["+e.code+"]："+e.message);
        });
      }else{
        window.plus.nativeUI.alert("无效的登录认证通道！",null,"登录");
      }



      // console.log(this.phone.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g,''))
      
      // if(this.phone == ''){
      //   localStorage.setItem("SignIn",0);
      // }else{
      //   localStorage.setItem("SignIn",this.phone.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g,''));
      //   history.go(-1);
      //   // this.$router.push({ name: "/Wx"});
      // }
    },
    userinfo(a){
      window.outLine("----- 获取用户信息 -----");
      a.getUserInfo(function(){
        window.outLine("获取用户信息成功：");
		    window.outLine(JSON.stringify(a.userInfo));
        console.log(JSON.stringify(a.userInfo))
        var nickname=a.userInfo.nickname||a.userInfo.name||a.userInfo.miliaoNick;
        window.plus.nativeUI.alert("欢迎“"+nickname+"”登录！");
      },function(e){
        window.plus.nativeUI.alert("获取用户信息失败！",null,"登录",+e.message);
      });
    },
    touchstart(event){
      // console.log(event)
      event.path[0].classList.add('touchstartOpsity')
      // this.styleNme='touchstartOpsity'
    },
    touchend(event){
      event.path[0].classList.remove("touchstartOpsity");
      // this.styleNme=''
    },
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
#SignIn{
  width:100%;
  height:100%;
  position: relative;
  z-index: 110;
  .setUpContent{
    width:100%;
    height:22.63rem;
    background: #ededed;
    background-size:100%;
    .hederTop{
      width:100%;
      height:1.30rem;
      margin-bottom: 0.21rem;
    }
    .hederTops{
      width:70.8%;
				margin:0 auto;
				position:relative;
				margin-top:0.3rem;
				// border:1px solid #d0d0d0;
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
							background: #2aae67;
              color: #94d7b3;
              border-radius:0.2rem;
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

