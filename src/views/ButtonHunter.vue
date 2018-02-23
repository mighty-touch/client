<template>
  <div id="app">
    <button @click="random(1)" v-bind:style="styleObject" id="haha">HAHA</button>
    <button @click="random(2)" v-bind:style="styleObject2" id="hehe">HEHE</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        room: 0,
        team: '',
        count: 0,
        windowWidth: 0,
        windowHeight: 0,
        styleObject: {
          position: 'absolute',
          top: '0px',
          left: '0px',
          'background-color': '#4CAF50',
        },
        styleObject2: {
          position: 'absolute',
          top: '0px',
          left: '0px',
          'background-color': '#008CBA',
        },
        button: {
          height: '0px',
          width: '0px',
        },
      }
    },
    beforeCreate() {
      let ref = this.$db.ref('room2')
      ref.on('value', (snapshot) => {
        this.room = snapshot.val()
        this.styleObject.top = this.room.p1.posH
        this.styleObject.left = this.room.p1.posW
        this.styleObject2.top = this.room.p2.posH
        this.styleObject2.left = this.room.p2.posW
      })
    },
    created() {
      window.addEventListener('keydown', this.pullTug)
    },
    mounted() {
      this.$nextTick(function () {
        window.addEventListener('resize', this.getWindowWidth);
        window.addEventListener('resize', this.getWindowHeight);
        //Init
        this.getWindowWidth()
        this.getWindowHeight()
        this.getButtonSizeHaha()
        this.getButtonSizeHehe()
      })
    },
    methods: {
      reset() {
        this.$db.ref().update({
          "room2": {
            p1: {
              posH: '0px',
              posW: '0px',
              score: 0
            },
            p2: {
              posH: '0px',
              posW: '150px',
              score: 0
            }
          }
        })
      },
      winner(param) {
        if (param === 1) {
          swal("Yeay!! TEAM HAHA Win!!", "", "success")
          this.reset()
        }
        if (param === 2) {
          swal("Yeay!! TEAM HEHE Win!!!", "", "success")
          this.reset()
        }
      },
      random(param) {
        const randomH = Math.random()
        const randomW = Math.random()
        const topPos = Math.abs(randomH * this.windowHeight - this.button.width)
        const leftPos = Math.abs(randomW * this.windowWidth - this.button.height)
        if (param === 1) {
          this.$db.ref('/room2/p1/posH').set(`${topPos}px`)
          this.$db.ref('/room2/p1/posW').set(`${leftPos}px`)
          this.$db.ref('/room2/p1/score').set(this.room.p1.score+1)
          if(this.room.p1.score > 10) this.winner(1)
          const color = this.styleObject['background-color'] = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
          document.getElementById("haha").style.backgroundColor = this.styleObject['background-color']
        } else {
          this.$db.ref('/room2/p2/posH').set(`${topPos}px`)
          this.$db.ref('/room2/p2/posW').set(`${leftPos}px`)
          this.$db.ref('/room2/p2/score').set(this.room.p2.score+1)
          if(this.room.p2.score > 10) this.winner(2)
          const color = this.styleObject2['background-color'] = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
          document.getElementById("hehe").style.backgroundColor = this.styleObject2['background-color']
        }
      },
      getButtonSizeHaha() {
        this.button.height = document.getElementById('haha').offsetHeight
        this.button.width = document.getElementById('haha').offsetWidth
      },
      getButtonSizeHehe() {
        this.button.height = document.getElementById('hehe').offsetHeight
        this.button.width = document.getElementById('hehe').offsetWidth
      },
      getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
      },
      getWindowHeight(event) {
        this.windowHeight = document.documentElement.clientHeight;
      },
      beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth);
        window.removeEventListener('resize', this.getWindowHeight);
      }
    }
  }
</script>

<style>
  .table {
    text-align: center;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #haha,
  #hehe {
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 4px 2px;
    cursor: pointer;
  }
