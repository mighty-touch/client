<template>
 <nav class="navbar navbar-dark bg-dark">
 <a class="navbar-brand pointer">
   <h3 @click="toHome">マイティー</h3>
   
 </a>
 <div>
  <div class="row">
     <h3 class="pointer agak-kanan" @click="toLobby">
      Lobby
        </h3>
  <h3 class="pointer" @click="toAbout">
   About Us
  </h3>
  </div>
 </div>
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
   },
    toLobby(){
     this.$router.push({name: 'Lobby'})
   }
 }
}
</script>

<style>
  h3 {
    font-size: 30px;
    font-weight: bolder;
    color: white;
    margin-right: 20px;
  }
.pointer{
  cursor: pointer;
}
.agak-kanan{
  padding: 0px 10px 0px 0px
}
</style>
