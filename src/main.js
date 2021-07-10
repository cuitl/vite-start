import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { createApp } from '@vue/composition-api'
import App from './App.vue'
import router from './router'

Vue.use(VueCompositionApi)

Vue.config.devtools = true

createApp({
  router,
  render: h => h(App)
}).mount('#app')
