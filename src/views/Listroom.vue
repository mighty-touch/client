<template>
  <div clas="container">
    <!-- <b-list-group>
      <b-list-group-item variant="warning" class="pointer" @click="spring">Spring room</b-list-group-item>
    </b-list-group> -->
    <router-link to="/lobby/springroom" @click="spring">
    <b-list-group-item variant="warning" class="pointer">Spring room</b-list-group-item>
    </router-link>
  </div>
</template>

<script>
export default {
  methods:{
    spring () {
      this.$router.push({name: 'Spring'})
    }
  }
}
</script>

<style>
  .pointer{
    cursor: pointer;
  }
</style>
