<template>
  <div>
    <div class="b-head">
      <div class="logo">
        <img src="../../../static/images/logo-reddit.png" alt="logo" />
      </div>
    </div>
    <div class="b-body" ref="bodys">
      <el-carousel
        :interval="5000"
        arrow="never"
        :height="height+'px'"
        @change="bannerChange"
        indicator-position="none"
        ref="banner"
      >
        <el-carousel-item v-for="(item,index) in 4" :key="index">
          <img :src="'../../../static/images/'+(index+1)+'.jpg'" alt="logo" />
          <div class="showContent" v-if="cindex==0">
            <div class="outFlex">
              <div class="flexbox">
                <div class="sc-left">
                  <h2 :class="'animated'+(cindex==0?' fadeInLeft':'')">曾小蓉</h2>
                  <p :class="'animated'+(cindex==0?' fadeInRight':'')">爱追剧、爱王者、爱生活</p>
                  <p :class="'animated'+(cindex==0?' fadeInRight':'')">Web前端开发攻城狮 · ‘十分善良’的好人</p>
                  <el-button type="danger" round :class="'animated'+(cindex==0?' bounceInUp':'')">查看详情</el-button>
                </div>
                <div :class="'sc-right animated'+(cindex==0?' flipInX':'')">
                  <img src="../../../static/images/person.jpg" alt="图片" />
                </div>
              </div>
            </div>
          </div>
             <div class="showContent" v-if="cindex==1">
            <div class="outFlex">
              <div class="flexbox">
                <div class="sc-left">
                  <h2 :class="'animated'+(cindex==1?' fadeInLeft':'')">知识积累与总结</h2>
                  <p :class="'animated'+(cindex==1?' fadeInRight':'')">Web前端技术相关</p>
                  <p :class="'animated'+(cindex==1?' fadeInRight':'')">HTML、Javascript、CSS等技术框架使用项目总结</p>
                  <router-link :to="{path:'/blog'}">
                  <el-button type="danger" round :class="'animated'+(cindex==1?' bounceInUp':'')">查看详情</el-button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="navbar">
        <div class="flexbox">
          <div :class="'f-nav '+(cindex==0?'on':'')" @mouseenter="bannerOver" data-index="0">
            <i class="el-icon-user"></i>
            <p>简介</p>
          </div>
          <div :class="'f-nav '+(cindex==1?'on':'')" @mouseenter="bannerOver" data-index="1">
            <i class="el-icon-help"></i>
            <p>博客</p>
          </div>
          <div :class="'f-nav '+(cindex==2?'on':'')" @mouseenter="bannerOver" data-index="2">
            <i class="el-icon-orange"></i>
            <p>圈子</p>
          </div>
          <div :class="'f-nav '+(cindex==3?'on':'')" @mouseenter="bannerOver" data-index="3">
            <i class="el-icon-picture-outline-round"></i>
            <p>旅行</p>
          </div>
        </div>
      </div>
    </div>
    <div class="b-foot">
      <div class="cy">Copyright © 2019An Rights Reserved.</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: 0,
      cindex: 0
    };
  },
  mounted() {
    this.height = this.$refs.bodys.offsetHeight;
  },
  methods: {
    bannerChange(index) {
      this.cindex = index;
    },
    bannerOver(e) {
      this.cindex = parseInt(e.srcElement.dataset.index);
      this.$refs.banner.setActiveItem(e.srcElement.dataset.index);
    }
  }
};
</script>
<style scoped>
.b-head {
  width: 100%;
  padding: 10px 0;
  background: #161618;
  position: fixed;
  top: 0;
  left: 0;
}
.logo {
  padding-left: 50px;
}
.logo img {
  width: 50px;
  height: 50px;
}
.b-foot {
  width: 100%;
  padding: 15px 0;
  background: #161618;
  position: fixed;
  bottom: 0;
  left: 0;
}
.b-foot .cy {
  color: white;
  padding: 0 50px 0 0;
  text-align: right;
}
.b-body {
  width: 100%;
  height: auto;
  position: fixed;
  top: 74px;
  bottom: 51px;
}
.b-body img {
  width: 100%;
  height: 100%;
}
.navbar {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1111;
}
.navbar .flexbox {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  color: #999;
}
.navbar i {
  font-size: 30px;
}
.f-nav {
  width: 100px;
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
  font-weight: bold;
}
.f-nav.on {
  background: white;
  color: #f56c6c;
}
.f-nav p {
  margin-top: 5px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.showContent {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 111;
}
.showContent .outFlex {
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.showContent .flexbox {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
.sc-left {
  color: white;
  text-align: center;
}
.sc-left h2 {
  font-size: 40px;
  text-shadow: 0 0 5px #f56c6c;
  margin: 30px 0;
}
.sc-left p {
  font-size: 28px;
  text-shadow: 0 0 5px #f56c6c;
  margin-top: 20px;
}
.sc-left button {
  margin-top: 30px;
}
.sc-right {
  width: 300px;
  margin-left: 20%;
}
.sc-right img {
  width: 100%;
}
</style>