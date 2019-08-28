<template>
  <div>
    <div class="el-menu-indiv">
      <div class="yiq-div flexbox fl-center">
        <div class="logo">
          <img src="../../../static/images/logo-reddit.png" alt="logo" />
        </div>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#f56c6c"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">关于</el-menu-item>
          <el-menu-item index="3">成长</el-menu-item>
          <el-menu-item index="4">
            <a href="https://juejin.im/post/58fffc52a22b9d0065b8db53" target="_blank">学习</a>
          </el-menu-item>
        </el-menu>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" class="inputSear"></el-input>
      </div>
    </div>
    <div class="banner">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content flexbox">
      <div class="leftside"></div>
      <div class="rightside"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.logo {
  width: 50px;
  margin-right: 50px;
}
.logo img {
  width: 100%;
}
.el-menu-indiv {
  width: 100%;
  background: rgb(84, 92, 100);
}
.yiq-div {
  width: 1000px;
  margin: 0 auto;
}
.inputSear {
  width: 200px;
  margin-left: auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner {
  width: 1000px;
  margin: 20px auto 0;
}
.content {
  width: 1000px;
  margin: 20px auto 0;
}
.leftside {
  width: 700px;
  height: 800px;
  background: gainsboro;
}
.rightside {
  width: 280px;
  height: 300px;
  background: gray;
  margin-left: auto;
}
</style>