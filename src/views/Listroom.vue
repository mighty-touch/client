<template>
  <div clas="container">
   <b-list-group>
      <router-link to="/lobby/springroom" @click="spring">
        <b-list-group-item variant="warning" class="pointer">Spring room</b-list-group-item>
      </router-link>
      <router-link to="/lobby/fallroom" @click="spring">
         <b-list-group-item variant="info" class="pointer">Fall room</b-list-group-item>
      </router-link>
    </b-list-group>
   <h2> <p @click="rahasia"> rahasia </p> </h2>
  </div>
</template>

<script>
export default {
  methods:{
    spring () {
      this.$router.push({name: 'Spring'})
    },
    fall () {
      this.$router.push({name: 'Fall'})
    },
    rahasia () {
      this.$router.push({name: 'Rahasia'})
    }
  }
}
</script>

<style>
.tinggi
  .pointer{
    cursor: pointer;
  }
  p{
    float:bottom;
    color:white;
    cursor: pointer;
  }
  p:hover{
    color:rgb(255, 251, 0)
  }
</style>
