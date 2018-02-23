<template>
  <div id="tambang-app">
    <div class="container">
      <div class="row">
        <img :src="currentImage" style="margin:auto;">
      </div>
    </div>
    <h2>Tarik Bambang!!!</h2>
    <b-progress :value="room" max="4" variant="success"></b-progress>
    <div>
    <form>
      <input type="radio" name="team" v-model="team" value="kiri"> TEAM BAPAK
      <input type="radio" name="team" v-model="team" value="kanan"> TEAM IBUK
    </form>
    </div>
    <a @click="resetTug" class="button is-success">Reset</a>
  </div>
</template>

<script>

export default {
  name: 'TarikTambang',
  data () {
    return {
     room: 2,
     team: '',
     count: 0,
     color:null
   }
 },
 watch: {
   room() {
     this.winner()
   }
 },
 computed: {
   currentImage () {
     let image = ''
     switch (this.room) {
       case 0: image = '0.jpg'; break;
       case 1: image = '1.jpg'; break;
       case 3: image = '3.jpg'; break;
       case 4: image = '4.jpg'; break;
       case 2: image = '2.jpg'; break;
     }
     return require('../assets/' + image)
   }
 },
  beforeCreate () {
    let ref = this.$db.ref('room1')
    ref.on('value', (snapshot)=> {
      this.room = snapshot.val()
      this.bar = snapshot.val() + 2
    })
  },
  created(){
     window.addEventListener('keydown', this.pullTug)
    //  this.$db.ref().update({"room1": 0})
  },
  methods: {
    pullTug(e) {
      if(e.key == ('ArrowLeft' || 'ArrowRight')){
        this.count++
        if(this.count > 5) {
          this.count = 0
          if(this.team==='kiri') {
            this.$db.ref().update({"room1": this.room--})
            this.winner()
          } else if (this.team==='kanan'){
            this.$db.ref().update({"room1": this.room++})
            this.winner()
          }
        }
      }
    },
    resetTug() {
      this.$db.ref().update({"room1": 2})
    },
    winner() {
      if (this.room < 0) {
        swal("PLUS ULTRA!! TEAM BAPAK WIN!!", "", "success")
        this.resetTug()
      }
      if (this.room > 4) {
        swal("SMASH!! TEAM IBUK WIN!!!", "", "success")
        this.resetTug()
      }
    }
  }
}
</script>

<style>
.table{
  text-align: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center
}

#tambang-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
