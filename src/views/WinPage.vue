<template>
  <div class="container rapihin">
    <h1>
      CONGRATULATIONS!!!!
    </h1>
    <h3>
      {{winner}}
      <br>
      <small class="text-muted">SCORE : {{score}} </small>
    </h3>

  </div>
</template>

<script>
export default {
  data(){
    return{
      winner: this.$route.query.winner,
      score: this.$route.query.score
    }
  }
}
</script>

<style>
.rapihin{
  margin: 40px 0px 30px 0px   
}
</style>
