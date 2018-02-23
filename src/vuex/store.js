import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: ``
})

Vue.use(Vuex)

const state = {
  valueA:0,
  valueB:0,
  max:100,
  valueTarik:50
}


const actions = {

}

const mutations = {
  buttonA (state, payload) {
    state.valueA++
  },
  buttonB (state, payload) {
    state.valueB++
  },
  buttonTarikLeft (state, payload) {
    state.valueTarik--
  },
  buttonTarikRight (state, payload) {
    state.valueTarik++
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store