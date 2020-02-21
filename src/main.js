import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import io from 'socket.io-client';

Vue.config.productionTip = false;

Vue.prototype.$socket = io.connect('https://taboknyamuk.herokuapp.com/');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
