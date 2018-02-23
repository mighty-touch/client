<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <img :src="currentImage" style="margin:auto;">
      </div>
    </div>
    <div class="columns">
      <table class="table column is-offset-5">
      <thead>
        <th>Shake in to your soul!!</th>
      </thead>
    </table>
    </div>
    <div>
    <form>
      <input type="radio" name="team" v-model="team" value="kiri"> Chitoge
      <input type="radio" name="team" v-model="team" value="kanan"> Onodera
    </form>
    </div>
    <a @click="resetTug" class="button is-success">Reset</a>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
     room: 0,
     team: '',
     count: 0,
    }
  },
  computed: {
    currentImage () {
      let image = ''
      switch (this.room) {
        case -2: image = 'chitoge1.jpg'; break;
        case -1: image = 'chitoge0.png'; break;
        case 1: image = 'onodera0.png'; break;
        case 2: image = 'onodera1.png'; break;
        case 0: image = 'chitogeonodera.jpg'; break;
      }
      return require('../assets/' + image)
    }
  },
  beforeCreate () {
    let ref = this.$db.ref('shake')
    ref.on('value', (snapshot)=> {
      this.room = snapshot.val()
    })
  },
  created(){
    window.addEventListener('shake', this.pullTug, false)
  },
  watch: {
    room() {
      this.winner()
    }
  },
  methods: {
    pullTug() {
          if(this.team==='kiri') {
            this.$db.ref().update({"shake": this.room--})
            this.winner()
          } else if (this.team==='kanan'){
            this.$db.ref().update({"shake": this.room++})
            this.winner()
          }
    },
    resetTug() {
      this.$db.ref().update({"shake": 0})
    },
    winner() {
      if (this.room < -2) {
        swal("Chitoge Kirisaki と ご結婚おめでとうございます。", "", "success")
        this.resetTug()
      }
      if (this.room > 2) {
        swal("Kosaki Onodera と ご結婚おめでとうございます。", "", "success")
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
