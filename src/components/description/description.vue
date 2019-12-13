<template>
  <div>
    <my-head></my-head>
    <div class="content">
        <div class="c-title">关于博主</div>
        <div class="c-des">
            博主名叫曾小蓉，连普通都算不上的人
            <br/>
            Web前端开发攻城狮，“十分特别善良”的好人
            <br/>
            喜欢听歌 · 爱王者 · 爱追剧 · 爱Money
        </div>
    </div>
     <div class="content">
        <div class="c-title">关于简历</div>
        <div class="c-des">
           本博主的个人简历
            <br/>
           若是觉得我还行，请记得联系我！！
           <br/>
           <a href="../../../static/jianli.doc" class="ab" target="_blank">「点击下载」</a>
        </div>
    </div>
       <div class="content">
        <div class="c-title">博主自述</div>
        <div class="c-des">
          小时候喜欢跳舞，家里穷，就断了这个爱好；后来挺喜欢唱歌的，但是五音不全，唱的巨难听，所以这个爱好就变成了爱听歌，哈哈。
          在这个看脸的社会，有些人能靠脸都在靠实力，而不能靠脸的却没有实力，这说的就是我了。。。为了工作而工作，没有什么伟大理想，
          只想过安稳的平淡幸福生活。
          <br>
          一个小小的计划：拿驾照【已完成】---->身体有个手术（7K）---->身体调理好（无法计算） ---->做近视手术（30K）---->结婚（自己30k 月光ing） ---->买房（这个是不可能的 哈哈）
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