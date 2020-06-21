import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//uso de ionic
import Ionic from '@ionic/vue'
Vue.use(Ionic)

Vue.component('navbar-component',require('./components/Navbar.vue').default);
//estilos de ionic
import '@ionic/core/css/ionic.bundle.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
