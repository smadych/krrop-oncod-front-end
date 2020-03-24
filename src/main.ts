import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { store } from './store/index';
import { router } from './router/index';
import { vuexModule } from './store';
import './assets/styles/normalize.css';
import axiosBase from './service/api';

Vue.config.productionTip = false;

if (vuexModule.store.token != '') {
  axiosBase.defaults.headers.common['Authorization'] = `Bearer ${vuexModule.store.token}`;
}

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
