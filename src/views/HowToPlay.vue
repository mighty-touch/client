<template>
  <div>
   <carousel>
     <slide>
       <img :src="imageSlide" alt="" srcset="">
     </slide>
   </carousel>
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