<template>
  <div class="content">
      <swipe>
          <swipeItem>1</swipeItem>
          <swipeItem>2</swipeItem>
          <swipeItem>3</swipeItem>
          <swipeItem>4</swipeItem>
      </swipe>
  </div>
</template>
<script>
  import swipe from '@/components/swipe/swipe.vue'
  import swipeItem from '@/components/swipe/swipe-item.vue'
  export default {
    components: {
      swipeItem,
      swipe
    },
    setup () {
      const sliders = [{
          imgUrl:'https://img-blog.csdnimg.cn/20210718004027143.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ2ODQ2NTI2,size_16,color_FFFFFF,t_70',
      },{
          imgUrl:'https://img-blog.csdnimg.cn/20210718004027143.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ2ODQ2NTI2,size_16,color_FFFFFF,t_70',
      }]
      return {
          sliders
      }
    }
  }
</script>
<style scoped lang='less'>
  .content {
      width: 100%;
      height: 100%;
  }
</style>