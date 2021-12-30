import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VeeValidate from 'vee-validate';
const config = {  
  errorBagName: 'errors', // change if property conflicts
  events: 'input|blur', 
};

Vue.use(VeeValidate, config);

window.toastr = require('toastr')

require ("bootstrap")
import "./assets/scss/app.scss"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
