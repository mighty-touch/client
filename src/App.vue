<template>
  <div id="app">
    <headers/>
    <router-view/>
  </div>
</template>

<script>
import store from './vuex/store'
import headers from '@/views/Headers'
export default {
  name: 'App',
  store,
  components:{headers}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
