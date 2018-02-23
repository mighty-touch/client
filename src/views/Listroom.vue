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
    }
  }
}
</script>

<style>
  .pointer{
    cursor: pointer;
  }
</style>
