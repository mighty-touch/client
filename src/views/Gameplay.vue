<template>
  <div class="container">
    <b-progress variant="success" :value="valueA" :max="max"></b-progress>
    <br>
    <b-progress variant="danger" :value="valueB" :max="max" ></b-progress>
    <div>
      <b-button @click="buttonA" variant="outline-success">TIM NVDIA</b-button>
      <b-button @click="buttonB" variant="outline-danger">TIM AMD</b-button>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  computed:{
    ...mapState([
      'valueA',
      'valueB',
      'max'
    ])
  },
  methods:{
    ...mapMutations([
      'buttonA',
      'buttonB'
    ])
  }
}
</script>

<style>

</style>
