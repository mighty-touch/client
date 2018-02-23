// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from 'vue-carousel';
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyALNm6Zcso929fr4THA-s-L0u3fcNWirQU",
  authDomain: "mighty-touch.firebaseapp.com",
  databaseURL: "https://mighty-touch.firebaseio.com",
  projectId: "mighty-touch",
  storageBucket: "mighty-touch.appspot.com",
  messagingSenderId: "793083061509"
};
firebase.initializeApp(config);

Vue.prototype.$db = firebase.database()

Vue.use(VueCarousel);
Vue.config.productionTip = false
Vue.use(BootstrapVue)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
