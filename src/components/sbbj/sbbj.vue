<template>
  <div>
    <div class="smzq add">
      <ul>
        <li>beforeCreate创建前--数据data和挂载元素$el还未初始化</li>
        <li>created创建后--数据data被初始化了 $el还未</li>
        <li>beforeMounte载入前--数据data和$el初始化完成，render函数首次被调用</li>
        <li>mounted载入后--ajax交互 异步请求</li>
        <li>beforeUpdate更新前</li>
        <li>updated更新后</li>
        <li>beforeDestory销毁前</li>
        <li>destoryed销毁后</li>
      </ul>
    </div>
    <input type="text" placeholder="变颜色" />
     <transition name="fade">
      <div v-show="detailW" class="detail-wapper" :class="dwClass" transition="fade">
        <div class="d-w clearbox">
          <div class="d-wmain">
          
                sticky footer布局 <br>
                当内容不够时 底部关闭按钮在底部 <br>
                当内容超出屏幕时  底部关闭按钮随着内容撑出滚动条
            
          </div>
        </div>
        <div class="d-close" @click="hideModel">×</div>
      </div>
     </transition>
    <div class="title" @click="showModel">
        <div class="line"></div>
        <div class="text">优惠点我</div>
        <div class="line"></div>
    </div>
    <Star></Star>
    <p>border 1像素 兼容移动端</p>
    <div class="testBor border-dpr">
      <ul>
        <li>tab1</li>
        <li>tab2</li>
        <li>tab3</li>
      </ul>
    </div>
    <div class="scroll-test">
        <div class="left-scroll">
            <ul>
              <li v-for="(item,index) in ldata" :key="index" :class="{'current':index===curIndex}" @click="slectMenu(index,$event)">
                {{item.name}} {{index+1}}
              </li>
            </ul>
        </div>
        <div class="right-scroll">
          <ul>
              <li v-for="(item,index) in ldata" :key="index" class="rsLiitem">
                {{item.name}} 内容{{index+1}}
              </li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
     import Star from '../star/star'
     import BScroll from '@better-scroll/core'
export default {
    data(){
        return{ 
            detailW:false,
            dwClass:'fade-enter',
            ldata:[{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'}
            ,{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},{name:'导航'},],
            listHeight:[],
            scrollY:0
        }
    },
    computed:{
      curIndex(){
        for(let i=0;i<this.listHeight.length;i++){
           let h1=this.listHeight[i];
           let h2=this.listHeight[i+1];
           if(!h2 || (this.scrollY<h2&&this.scrollY>=h1)){
               return i;
           }
        }
        return 0;
      }
    },
    mounted() {
        let wrapper = document.querySelector('.left-scroll')
        this.scroll = new BScroll(wrapper,{
          click:true
        })
        let wrapper2 = document.querySelector('.right-scroll')
        this.scroll2 = new BScroll(wrapper2,{
          probeType:3
        })
        this.scroll2.on('scroll',(pos)=>{
           this.scrollY=Math.abs(Math.round(pos.y));
           let el=document.querySelector('.current');
           this.scroll.scrollToElement(el,300);
        })
        // 异步请求数据后需要把bscroll写在以下方法里面
        this.$nextTick(()=>{});
        this._caclHeight();
    },
    components:{
      Star
    },
    methods:{
      slectMenu(index,event){
         if(!event._constructed){
           return;
         }
        let wrapper2 = document.querySelector('.right-scroll')
        let itemlis=wrapper2.getElementsByClassName('rsLiitem');
        let el=itemlis[index];
        this.scroll2.scrollToElement(el,300);
      },
      _caclHeight(){
        let wrapper2 = document.querySelector('.right-scroll')
        let itemlis=wrapper2.getElementsByClassName('rsLiitem');
        let height=0;
        this.listHeight.push(height);
        for(let i=0;i<itemlis.length;i++){
          height+=itemlis[i].clientHeight;
          this.listHeight.push(height);
        }
        console.log(this.listHeight);
      },
      showModel(){
        this.detailW=true
        this.dwClass="fade-transition"
        // 老师教的这种transition="fade"动画不生效  不知是什么原因  实际不需要dwClass
      },
      hideModel(){
        this.detailW=false
        this.dwClass="fade-leave"
      }
    }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5)
   .border-dpr
      &::after
        -webkit-transform:scaleY(0.7)
        transform:scaleY(0.7)
@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2)
   .border-dpr
     &::after
       -webkit-transform:scaleY(0.5)
       transform:scaleY(0.5)  
border-1px($color)
  position relative
  &:after
    display block
    position absolute
    left 0
    bottom  0
    width 100%
    border-top 1px solid $color
    content " "
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.smzq {
  border: 1px red solid;
  padding: 20px;

  &.add {
    color: red;
  }
}
input 
  &::-webkit-input-placeholder 
    color: yellow
.detail-wapper 
    position: fixed
    left :0
    top :0
    z-index 100
    width: 100%
    height: 100%
    color white
    overflow  auto
    transition all 0.5s
    &.fade-transition 
       opacity 1
       background: rgba(7, 17, 27, 0.8)
    &.fade-enter,&.fade-leave
       opacity 0
       background: rgba(7, 17, 27, 0)
    .clearbox
      display inline-block
      &:after
        content:'.'
        height 0
        clear both
        visibility:hidden
        display block
    .d-w
      min-height 100%
      .d-wmain
        margin-top 64px
        padding-bottom 128px
    .d-close
        margin -128px auto 0 auto
        font-size 64px
        color gray
        clear both
        text-align center
.title
   width 80%
   display flex
   align-items center
   margin 20px auto
   .line
     flex 1
     height 1px
     background #e6e6e6 
    .text
      color gold
      padding 0 10px

.testBor
   padding 10px 0
   border-1px(red)
   ul
     display flex
     li
       flex 1
       text-align center
.scroll-test
  display flex
  height 200px
  overflow hidden
  .left-scroll
     width 80px
     background #e6e6ee 
     ul
      li
       padding 10px
       &.current
         color red
  .right-scroll
     flex 1
    ul
      li
       padding 20px
</style>