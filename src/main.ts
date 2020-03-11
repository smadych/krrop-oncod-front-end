import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import VueRouter from 'vue-router';
import { routes } from './router/index';
import PatientsListPage from './components/PatientsListPage.vue';
import './assets/styles/normalize.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
})

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
