<template>
  <div class='carousel'>
    <ul class="carousel-wrap" ref="carouse">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
export default {
  setup () {
    // 当前选中值
    const idx = ref(0)
    const carouse = ref('')
    var boxWidth, childrenLength
    // 下一张
    const nextPage = () => {
      if (idx.value < childrenLength - 1) {
          idx.value ++
          carouse.value.style.marginLeft =  (-boxWidth*idx.value) + 'px'
      }
    }
    //上一张
    const prePage = () => {
      if (idx.value > 0) {
          idx.value --
          carouse.value.style.marginLeft =  (-boxWidth*idx.value) + 'px'
      }
    }
    onMounted (()=>{
        // 获取li宽以及数量
        boxWidth = carouse.value.clientWidth
        childrenLength = carouse.value.children.length
    })
    return { idx, carouse, nextPage, prePage}
  }
}
</script>
<style scoped lang="less">
  .carousel {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .carousel-wrap {
      width: 100%;
      height: 100%;
      margin-left: 0;
      display: flex;
      transition: all 0.5s;
      /deep/.carousel-list {
       width: 100%;
       height: 100%;
       flex: none;
       display: flex;
       align-items: center;
       justify-content: center;
       font-size: 25px;
       color: white;
      }
    }
    .next {
        width: 50px;
        height: 50px;
        background: lightblue;
        position: fixed;
        z-index: 999;
        top: 350px;
        right: 0;
    }
    .pre {
        width: 50px;
        height: 50px;
        background: lightblue;
        position: fixed;
        z-index: 999;
        top: 350px;
        left: 0;
    }
  }
  
</style>