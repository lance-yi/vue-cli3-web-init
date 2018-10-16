<template>
  <div id="app">
    <!-- 顶部左边 -->
    <top-bar v-if="$route.name != 'login' "></top-bar>
    <!-- 左边导航 -->
    <left-nav v-if="$route.name != 'login' "></left-nav>
    <router-view/>
    <BackTop :height="200"></BackTop>
  </div>
</template>
<script>
  import LeftNav from '@/components/LeftNav'
  import TopBar from '@/components/TopBar'
  export default {
    components: {
      LeftNav,
      TopBar
    }
  }
</script>
<style lang="less">
#app {
  font-family: "Microsoft YaHei","微软雅黑",Arial,sans-serif,"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB",;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
