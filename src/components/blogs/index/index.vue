<template>
  <div>
    <div class="el-menu-indiv">
      <div class="yiq-div flexbox fl-center">
        <div class="logo">
          <router-link :to="{path:'/'}">
            <img src="../../../../static/images/logo-reddit.png" alt="logo" />
          </router-link>
        </div>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#f56c6c"
          :default-active="this.$route.path?this.$route.path:'/bindex'"
          router
        >
          <el-menu-item index="/bindex">首页</el-menu-item>
          <el-menu-item index="/about">每日3题</el-menu-item>
          <el-menu-item index="/growup">每日1题</el-menu-item>
          <el-menu-item index="/result">总结</el-menu-item>
          <!-- <el-menu-item>
            <a href="https://www.runoob.com/" target="_blank">菜鸟教程</a>
          </el-menu-item> -->
        </el-menu>
        <el-input placeholder="请输入内容" v-model="input4" class="inputSear">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">Copyright © 2019, All Rights Reserved.</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input4: ""
    };
  },
  watch: {
    $route(to, from) {
      console.log(this.$route.path);
    }
  },
  mounted() {
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
  min-width: 1000px;
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

.footer {
  width: 100%;
  height: 40px;
  min-width: 1000px;
  line-height: 40px;
  background: rgb(84, 92, 100);
  color: white;
  text-align: center;
  font-size: 14px;
  margin-top: 50px;
}
</style>