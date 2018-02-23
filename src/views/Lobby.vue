<template>
  <div class="container">
    <listroom class="rapihin"></listroom>
  </div>
</template>

<script>
import listroom from './Listroom'
export default {
  name: 'Lobby',
  components: {listroom}
}
</script>

<style>
  .rapihin{
    margin-top: 30px
  }
</style>
