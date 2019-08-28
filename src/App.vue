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
}
.flexbox{
  display:flex;
  display:-webkit-flex;
}
.fl-center{
  align-items: center;
}
</style>
