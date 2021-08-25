<template>
  <li class='carousel-list'>
    <slot></slot>
  </li>
</template>
<script>
import { ref } from 'vue'
export default {
  components: {
    
  },
  setup () {
    // 当前选中值
    const idx = ref(0)
    return { idx}
  }
}
</script>
<style scoped lang="less">
    
</style>