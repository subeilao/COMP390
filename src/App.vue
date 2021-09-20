<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <p>
      <router-link to="/foo">天气预报</router-link>

    </p> -->
    <p>Hello 我是ZSP 本网页没啥东西先看看天气吧</p>
    <p>再测试一下push</p>
    <iframe width="400" height="100" frameborder="0" scrolling="no" hspace="0" src="https://i.tianqi.com/?c=code&a=getcode&id=35&site=34&icon=1"></iframe>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
