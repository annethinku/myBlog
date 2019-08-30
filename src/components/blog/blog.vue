<template>
  <div>
    <div class="el-menu-indiv">
      <div class="yiq-div flexbox fl-center">
        <div class="logo">
          <router-link :to="{path:'/'}">
            <img src="../../../static/images/logo-reddit.png" alt="logo" />
          </router-link>
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
        <el-input placeholder="请输入内容" v-model="input4" class="inputSear">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
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
        <!-- <div class="photos">
          <div class="col" v-for="(col,idx) in cols" :key="idx">
            <img :src="photo" class="photo" v-for="photo in col" :key="photo" />
          </div>
        </div>-->
        <div class="boxs">
          <div class="box animated zoomIn">
            <img src="../../../static/images/p1.jpg" alt />
            <div class="black-m">
              <h2>雷哥GMAT在线</h2>
              <p>雷哥GMAT，互联网GMAT一站式在线学习平台。提供包含GMAT在线做题、 在线模考、在线测评、在线答疑、在线学习计划定制、录播视频课程、在线直播课程、免费公开课等一系列在线GMAT学习服务。</p>
            </div>
          </div>
          <div class="box animated zoomIn">
            <img src="../../../static/images/p2.jpg" alt />
            <div class="black-m mt">
              <h2>谁更准 小程序</h2>
              <p>按准6秒送现金红包、可邀请好友抢红包、余额可提现。</p>
            </div>
          </div>
          <div class="box animated zoomIn">
            <img src="../../../static/images/p3.jpg" alt />
            <div class="black-m mt">
              <h2>雷哥留学网</h2>
              <p>申请留学名校、查询留学排名、录取几率测评、顾问推荐等。</p>
            </div>
          </div>
          <div class="box animated zoomIn">
            <img src="../../../static/images/p3.jpg" alt />
            <div class="black-m mt">
              <h2>礼先森 小程序</h2>
              <p>礼先森是一个社交化赠礼平台，可以通过微信赠送礼物，随时随地传递心意。</p>
            </div>
          </div>
          <div class="box animated zoomIn">
            <img src="../../../static/images/p1.jpg" alt />
            <div class="black-m">
              <h2>雷哥托福在线</h2>
              <p>
                雷哥网托福，互联网在线一站式学习平台,提供完善的托福在线学习服务
                包括托福TPO在线模考、听说读写分科练习，托福在线直播课，托福高分分享等的备考服务
              </p>
            </div>
          </div>
          <div class="box animated zoomIn">
            <img src="../../../static/images/p2.jpg" alt />
            <div class="black-m mt">
              <h2>yoyo头像 小程序</h2>
              <p>头像加v、头像加字、明星头像、拼图、切图等。</p>
            </div>
          </div>
          <div class="box animated zoomIn">
            <img src="../../../static/images/p2.jpg" alt />
            <div class="black-m mt">
              <h2>雷哥网</h2>
              <p>单词、电台、公开课、VIP会员、院校库等。</p>
            </div>
          </div>
          <div class="box animated zoomIn">
            <img src="../../../static/images/p3.jpg" alt />
              <div class="black-m mt">
              <h2>投票圈 小程序</h2>
              <p>用户可发布各种需要投票信息，邀请好友投票。</p>
            </div>
          </div>
          <div class="box animated zoomIn">
            <img src="../../../static/images/p1.jpg" alt />
            <div class="black-m">
              <h2>雷哥网others</h2>
              <p>雷哥GMAT Wap端</p>
              <p>雷哥托福 Wap端</p>
              <p>雷哥留学录取几率测评小程序</p>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="title">
            <a
              href="https://juejin.im/post/5d6866936fb9a06ada54c642?utm_source=gold_browser_extension"
              target="_blank"
            >前20个常用字符串方法及使用方式</a>
          </div>
          <div class="des">
            charAt(x)、
            charCodeAt(x)、
            concat(v1,v2..)、
            fromCharcode(c1,c2)、
            indexOf(substr, [start])、
            lastIndexOf(substr, [start])、
            match(regexp)、
            replace(regexp/substr, replacetext)、
            search(regexp)、
            slice(start, [end])、
            split(delimiter, [limit])、
            substr(start, [length])、
            substring(from, [to])、
            toLowerCase()、
            toUpperCase()、
            includes()、
            endsWith()、
            repeat()、
            valueOf()、
            trim()
          </div>
        </div>
        <div class="article">
          <div class="title">
            <a
              href="https://juejin.im/post/5d4d0ec651882549594e7293?utm_source=gold_browser_extension"
              target="_blank"
            >灵活运用CSS开发技巧</a>
          </div>
          <div class="des">
            Layout Skill：布局技巧、
            Behavior Skill：行为技巧、
            Color Skill：色彩技巧、
            Figure Skill：图形技巧、
            Component Skill：组件技巧
          </div>
        </div>
        <div class="article">
          <div class="title">
            <a
              href="https://juejin.im/post/5d66b019f265da03a715e5d7?utm_source=gold_browser_extension"
              target="_blank"
            >Array.from() 五个超好用的用途</a>
          </div>
          <div
            class="des"
          >JavaScript 中有一个这样的函数: Array.from：允许在 JavaScript 集合(如: 数组、类数组对象、或者是字符串、map 、set 等可迭代对象) 上进行有用的转换。</div>
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
import Mock from "mockjs"; //es6语法引入mock模块
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
      ],
      input4: ""
    };
  },
  created() {
    this.photos = Array.from({ length: 20 }).map((v, i) => {
      let height = this.rnd(100, 300);
      this.photoHeights.push(height + 10);
      return Mock.Random.dataImage("225x" + height, i);
    });
    this.computeColumns();
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
  min-width: 1000px;
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
.col img {
  width: 100%;
}
.photo {
  display: block;
  margin: 5px;
  object-fit: none;
}
.boxs {
  width: 100%;
  column-count: 3;
  column-gap: 10px;
  margin-top: 20px;
}
.box {
  padding: 10px;
  margin: 0 0 10px 0;
  border: 1px gainsboro solid;
  position: relative;
}
.box:hover {
  border: 1px #f56c6c solid;
  color: #f56c6c;
}
.box:hover h2 {
  color: #f56c6c;
}
.box img {
  width: 100%;
  /* -webkit-filter: blur(2px); 
  -moz-filter: blur(2px);
  -ms-filter: blur(2px);    
  filter: blur(2px); */
}
.article {
  margin-bottom: 20px;
  border: 1px #e6e6e6 solid;
  padding: 0 20px 20px;
}
.article a {
  color: #333;
}
.article a:hover {
  color: #f56c6c;
}
.black-m {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  text-align: center;
}
.black-m h2 {
  margin: 50px 0 0;
  color: #333;
  font-size: 18px;
}
.black-m.mt h2 {
  margin: 20px 0 0;
}
.black-m p {
  margin: 20px;
  font-size: 14px;
  color: #666;
}
</style>