import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/colors.css'
import './assets/style/font.css'
import './assets/style/input.css'
import './assets/style/components.css'
import './assets/style/button.css'

Vue.config.productionTip = false

import '@ottaviocoelho/vue-components'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
