<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  font-family: Montserrat,PingFang,Microsoft YaHei;
}
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
