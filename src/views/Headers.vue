<template>
  <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand pointer">
    <h3 @click="toHome">Mighty</h3>
    
  </a>
  <h3 class="pointer" @click="toAbout">
    About us
  </h3>
</nav>
</template>

<script>
export default {
  methods:{
    toHome(){
      this.$router.push({name: 'Home'})
    },
    toAbout(){
      this.$router.push({name: 'About'})
    }
  }
}
</script>

<style>
 .pointer{
   cursor: pointer;
 }
</style>
