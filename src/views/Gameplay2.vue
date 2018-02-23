<template>
  <div class="container">
      <b-button @click="timer">start timer</b-button>
      <br>
      <h2>{{time}}</h2>
      <br>
    <b-progress :value="valueTarik" :max="max" :variant="color"></b-progress>
    <br>
     <div>
      <b-button @click="buttonTarikLeft" variant="outline-success">TIM NVDIA</b-button>
      <b-button @click="buttonTarikRight" variant="outline-danger">TIM AMD</b-button>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import Timer from 'tiny-timer'
export default {
  data () {
    return {
      time:null,
      color:null
    }
  },
  created () {
    this.colorChange()
  },
  computed: {
    ...mapState([
      'valueTarik',
      'max'
    ])
  },
  watch: {
    valueTarik (value){
      this.colorChange()
    }
  },
  methods: {
    ...mapMutations([
      'buttonTarikLeft',
      'buttonTarikRight'
    ]),
    timer () {
      let timer = new Timer()

      timer.on('tick', (ms) => {
        this.time =  (Math.floor(ms) / 1000).toFixed()
        console.log('tick', (Math.floor(ms) / 1000).toFixed())
        })
      timer.on('done', () => {
        this.$router.push({name : 'Home'})
        console.log('udah')
        })

      timer.start(10000)
    },
    colorChange() {
      if(this.valueTarik > 50){
        this.color='danger'
      }else if(this.valueTarik < 50){
        this.color = 'success'
      }
      else{
        this.color= 'warning'
      }
    },
    checkWinner () {
      if(this.valueTarik < 50 || this.valueTarik === 0){
        
      }
    }
  }
}
</script>

<style>

</style>
