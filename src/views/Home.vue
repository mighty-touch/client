<template>
  <div class="container">
    <b-button class="test" variant="outline-success" size="lg" @click="toLobby">TO LOBBY</b-button>
    <how class="howto"/>
  </div>
</template>

<script>
import how from './HowToPlay'
export default {
  name: 'Home',
  components: {how},
  methods: {
    toLobby(){
      this.$router.push({name : 'Lobby'})
    }
  }
}
</script>

<style>
  .howto{
    margin: 30px 0px 30px 0px
  }
</style>
