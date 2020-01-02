<template>
    <div>
        <div class="star">
            <span class="star_item" :class="item" v-for="(item,index) in itemClass" :key="index"></span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Len:5
        }
    },
    computed: {
        itemClass(){
           let num=4.6;//评分
           let len=this.Len;
           let quan=Math.floor(num);//多少个全星
           let score=Math.floor(num*2)/2;
           let half=score%1!==0;//多少个半星
           let result=[];
           for(let i=0;i<quan;i++){
               result.push('on')
           }
           if(half){
              result.push('half')
           }
           while(result.length<len){
                result.push('off')
           }
           return result;
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    backImg($url)
       background url('star_'+$url+'.png') no-repeat
       background-size cover
    .star
      font-size 0
      .star_item
         display inline-block
         width 20px
         height 20px
         margin-right 10px
         &:last-child
           margin-right 0
         &.on
           backImg('on')
         &.off
           backImg('off')
         &.half
           backImg('half')
</style>