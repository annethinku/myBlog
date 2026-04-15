<!--
 * @Author: zengxiaorong zxr1543109808@163.com
 * @Date: 2026-04-07 13:14:37
 * @LastEditors: zengxiaorong zxr1543109808@163.com
 * @LastEditTime: 2026-04-15 14:49:53
 * @FilePath: \myBlog\src\components\description\description.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <my-head></my-head>
    <div class="content">
        <div class="c-title">关于博主</div>
        <div class="c-des">
            博主名叫曾小蓉，距离普通差半截儿的人
            <br/>
            Web前端开发攻城狮，责任心强烈的人，热爱生活，擅长交流，有良好的沟通能力
            <br/>
            喜欢听歌 · 爱学习 · 爱追剧 · 爱Money
        </div>
    </div>
     <div class="content">
        <div class="c-title">关于简历</div>
        <div class="c-des">
           本博主的个人简历
            <br/>
           若是觉得我还行，请记得联系我！！
           <br/>
           <a href="../../../static/jianli.pdf" class="ab" target="_blank">「点击下载」</a>
        </div>
    </div>
       <div class="content">
        <div class="c-title">博主自述</div>
        <div class="c-des">
          在前端行业工作了好多年，经历了很多项目，积累了很多经验，想把这些经验总结下来，分享给大家，希望能给大家提供一些帮助。
          <br>
          一个小小的学习计划：vue3---->typescript---->node ---->react---->AI
        </div>
    </div>
    <my-foot></my-foot>
  </div>
</template>
<script>
import myHead from "../myhead/myhead";
import myFoot from "../myfoot/myfoot";
export default {
  components: {
    "my-head": myHead,
    "my-foot": myFoot
  }
};
</script>
<style scoped>
.content{
    width: 1000px;
    margin: 40px auto;
}
.c-title{
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}
.c-des{
    font-size: 14px;
    color: #999;
    line-height: 30px;
}
.ab{
    color: #f56c6c;
    text-decoration: none;
}
</style>