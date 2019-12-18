<template>
  <div class="about">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="使用递归算法生成一个长度为5 值2-32之间的不重复的随机数 【不能使用for/while】" name="1">
        <pre>
          function buildFive(arr,min,max,len){
            let num=Math.floor(Math.random()*((max-min+1)+min));
            if(!arr.includes(num)){arr.push(num)}
            return arr.length===len?arr:buildFive(arr,min,max,len);
          }
        console.log(buildFive([],2,32,5));
        </pre>
      </el-collapse-item>
      <el-collapse-item title="去掉字符串中所有的空格" name="2">
        console.log('a b c des'.replace(/\s*/g,''))
        <br />
        console.log('a b c des'.split(" ").join(''))
      </el-collapse-item>
      <el-collapse-item title="页面导入样式时，使用link和@import有什么区别" name="3">
        <div>link是html标签，@import是css提供的</div>
        <div>link引入样式页面加载时同时加载，@import引入的样式需要等页面加载完后再加载</div>
        <div>link没有兼容性问题，@import不兼容ie5以下</div>
        <div>link可以通过js操作DOM动态引入样式表，而@import不可以</div>
      </el-collapse-item>
      <el-collapse-item title="圣杯布局和双飞翼布局的理解和区别" name="4">
        <div>圣杯布局和双飞翼布局解决的问题是一样的，就是两边顶宽中间自适应的布局，中间栏要放在文档流前面以优先渲染</div>
        <div>区别：圣杯为了中间内容不被遮挡 将中间div设置padding-left/right配合;双飞翼中间内容不被遮挡，创建子div设置margin-left/right</div>
      </el-collapse-item>
    </el-collapse>
        <div class="mylibox">
      <ul>
        <li v-for="(item,index) in arr" :key="index" :class="item.class">我是第{{index+1}}个li</li>
      </ul>
    </div>

    <div style="clear:both;"></div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1",
      arr: [
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 }
      ]
    };
  },
  mounted() {
    let that = this;
    that.arr.forEach(function(item, index) {
      item.class = Math.floor(index / 4) % 2 == 1 ? "fright" : "";
      that.$set(that.arr, index, item);
    });
    // es6一维数组去重
    let a = [1, 2, 2, 6, 6, 89, 54];
    console.log(Array.from(new Set(a)));
    // es6数组过滤
    let b = [
      { name: "kele", val: "巴拉巴拉" },
      { name: "kele", val: "崩虾卡拉卡" },
      { name: "aa", val: "dfsf" }
    ];
    let ab = b.filter(item => item.name == "kele");
    console.log(ab);
  },
  methods: {}
};
</script>
<style scoped>
.about {
  width: 1000px;
  margin: 0 auto;
}
.mylibox ul {
}
.mylibox ul li {
  width: 23%;
  height: 100px;
  background: gainsboro;
  list-style: none;
  margin: 10px;
  padding: 0;
  text-align: center;
  float: left;
}
.mylibox ul li.fright {
  float: right;
}
</style>