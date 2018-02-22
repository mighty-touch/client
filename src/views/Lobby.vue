<template>
  <div class="container">
    <listroom></listroom>
    <router-view></router-view>
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

</style>
