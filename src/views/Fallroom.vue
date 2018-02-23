<template>
  <div>
    <h1>Button Hunter</h1>
    <b-card border-variant="light">
      <ButtonHunter/>
    </b-card>
  </div>
</template>

<script>
import ButtonHunter from './ButtonHunter'
import gameplay2 from './Gameplay2'
export default {
  name: 'Fallroom',
  components:{gameplay2, ButtonHunter}
}
</script>

<style>


</style>
