<!--
 * @Author: zengxiaorong zxr1543109808@163.com
 * @Date: 2026-04-07 13:14:37
 * @LastEditors: zengxiaorong zxr1543109808@163.com
 * @LastEditTime: 2026-04-07 13:17:28
 * @FilePath: \myBlog\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td,figure,figcaption{
    font-family: "微软雅黑","Microsoft YaHei","\u9ed1\u4f53","黑体","SimHei";
    margin:0;padding:0;
    list-style: none;
}
.flexbox{
  display:flex;
  display:-webkit-flex;
}
.fl-center{
  align-items: center;
}
.el-menu.el-menu--horizontal{border-bottom: none!important;}
</style>
