<template>
  <div>
    <h1>PUNCH IT!</h1>
    <h1>TOUCH IT!</h1>
    <h1>CLICK IT!</h1>
    <h1>SHAKE IT!</h1>
    <h1>TO YOUR HEART'S CONTENT!!</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
    }
  },
  computed:{

  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->