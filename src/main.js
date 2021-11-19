// src/main.js

import Vue from 'vue'
import App from './App'
import './index.css'

Vue.use(VueCompositionApi);

new Vue({
  el: '#app',
  render: h => h(App),
})