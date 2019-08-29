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
            <a href="https://www.runoob.com/" target="_blank">学习</a>
          </el-menu-item>
        </el-menu>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" class="inputSear"></el-input>
      </div>
    </div>
    <div class="banner">
      <el-carousel :interval="5000" arrow="never">
        <el-carousel-item v-for="item in banners" :key="item">
          <img :src="item" alt="banner" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content flexbox">
      <div class="leftside">
        <div class="bz-zhiding">
          <div class="tag">博主置顶</div>
          <div class="title">做一只有原则的喵</div>
          <div class="des">
            如果没有自己的原则，那跟狗有什么区别；如果没有自己的原则，那跟狗有什么区别；
            如果没有自己的原则，那跟狗有什么区别；如果没有自己的原则，那跟狗有什么区别；如果没有自己的原则，那跟狗有什么区别。
          </div>
        </div>
        <div class="photos">
          <div class="col" v-for="(col,idx) in cols" :key="idx">
            <img :src="photo" class="photo" v-for="photo in col" :key="photo" />
          </div>
        </div>
      </div>
      <div class="rightside">
        <div class="bz-zhiding rt">
          <div class="tag god">站点公告</div>
          <div class="title godc">跟着电影去旅行</div>
          <div class="des">个人博客正在建设中。。。 个人博客正在建设中。。。 个人博客正在建设中。。。</div>
        </div>
        <div class="hottags">
          <div class="h-title">热门标签</div>
          <div class="h-tags">
            <ul>
              <li v-for="(item,index) in tags" :key="index" :style="'background:'+item.color">
                <a :href="item.link" target="_blank">{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="hottags">
          <div class="h-title">关注博主</div>
          <div class="ewm">
            <img src="../../../static/images/erweima.jpg" alt="二维码" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">Copyright © 2019, All Rights Reserved.</div>
  </div>
</template>
<script>
import Mock from 'mockjs'; //es6语法引入mock模块
export default {
  data() {
    return {
      colCount: 3,
      cols: [],
      photoHeights: [],
      activeIndex: "1",
      activeIndex2: "1",
      banners: [
        "../../../static/images/banner1.jpg",
        "../../../static/images/banner2.jpg",
        "../../../static/images/banner3.jpg"
      ],
      tags: [
        {
          name: "Vue",
          link: "https://cn.vuejs.org/",
          color: "#4fc08d"
        },
        {
          name: "React",
          link: "https://react.docschina.org/",
          color: "#61dafb"
        },
        {
          name: "jQuery",
          link: "https://jquery.com/",
          color: "#b3d4fc"
        },
        {
          name: "Bootstrap",
          link: "https://v3.bootcss.com/",
          color: "#563d7c"
        },
        {
          name: "ES6",
          link: "http://es6.ruanyifeng.com/",
          color: "grey"
        }
      ]
    };
  },
  created() {
    this.photos = Array.from({length: 20}).map((v,i) => {
      let height = this.rnd(100, 300)
      this.photoHeights.push(height + 10)
      return Mock.Random.dataImage('225x' + height, i)
    })
    this.computeColumns()
  },
  watch: {
    colCount() {
      this.computeColumns();
    }
  },
  methods: {
    computeColumns() {
      this.cols = [];
      let photos = this.photos;

      let photoHeights = JSON.parse(JSON.stringify(this.photoHeights));
      let total = photoHeights.reduce((prev, curr) => prev + curr, 0);
      let aver = Math.floor(total / this.colCount);

      let colCount = this.colCount;
      while (colCount--) {
        let idxs = this.dp(photoHeights, photoHeights, aver);
        let photoCol = photos.filter((p, idx) => idxs.includes(idx));
        this.cols.push(photoCol);
        // 不能直接改变photoHeights
        photoHeights.forEach((v, i) => {
          if (idxs.includes(i)) {
            photoHeights[i] = null;
          }
        });
      }
    },
    rnd(min, max) {
      return min + ~~((max - min) * Math.random());
    },
    dp(ws, vs, limit) {
      let len = ws.length;
      let tables = new Array(len).fill().map(x => []);
      tables[-1] = new Array(limit + 1).fill(0);

      for (let i = 0; i < len; i++) {
        for (let w = 0; w <= limit; w++) {
          if (ws[i] > w) {
            tables[i][w] = tables[i - 1][w];
          } else {
            tables[i][w] = Math.max(
              tables[i - 1][w],
              tables[i - 1][w - ws[i]] + vs[i]
            );
          }
        }
      }
      // 回溯得到应该选哪些
      let max = limit;
      let selected = [];
      for (let idx = len - 1; idx >= 0; idx--) {
        if (ws[idx] <= max) {
          let isSelected =
            tables[idx - 1][max] < tables[idx - 1][max - ws[idx]] + vs[idx];
          if (isSelected) {
            selected.push(idx);
            max = max - ws[idx];
          }
        }
      }
      return selected;
    },
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
.el-carousel__item img {
  width: 100%;
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
  /* height: 800px; */
  /* background: gainsboro; */
}
.rightside {
  width: 280px;
  /* height: 300px; */
  /* background: gray; */
  margin-left: auto;
}
.footer {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: rgb(84, 92, 100);
  color: white;
  text-align: center;
  font-size: 14px;
  margin-top: 50px;
}
.bz-zhiding {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px gainsboro;
  position: relative;
  border: 1px white solid;
}
.bz-zhiding:not(.rt):hover {
  border: 1px #f56c6c solid;
}
.tag {
  font-size: 14px;
  padding: 10px 20px;
  color: white;
  background: #f56c6c;
  display: inline-block;
  position: absolute;
  top: -5px;
  left: 20px;
}
.title {
  font-size: 18px;
  color: #f56c6c;
  margin: 30px 0 10px;
  font-weight: bold;
}
.god {
  background: #fcab7f;
}
.godc {
  color: #fcab7f;
}
.des {
  font-size: 16px;
  color: #999;
}
.hottags {
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px gainsboro;
  margin-top: 20px;
}
.h-title {
  font-size: 16px;
  font-weight: bold;
  padding: 0 0 10px;
  border-bottom: 1px #cccccc solid;
  margin-bottom: 20px;
}
.h-tags ul {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.h-tags ul li {
  list-style: none;
  background: gainsboro;
  color: white;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 0 10px 10px 0;
}
.h-tags ul li a {
  width: 100%;
  height: 100%;
  display: block;
  color: white;
  text-decoration: none;
}
.ewm img {
  width: 100%;
}
.photos {
  display: flex;
  flex-flow: row;
  justify-items: center;
  width: 100%;
  margin-top: 20px;
}
.col {
  /* width: 50%; */
}
.photo {
  display: block;
  margin: 5px;
  object-fit: none;
}
</style>