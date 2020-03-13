import  VueRouter  from 'vue-router';
import Vue from 'vue';
import PatientsListPage from '../components/main/PatientsListPage.vue';
import Authorization from '../components/main/Authorization.vue';
import PatientCard from '../components/view/PatientCard.vue';
import { vuexModule } from '../store';

Vue.use(VueRouter);

export const routes = [
  { path: '/patients', name: 'patientsPage', component: PatientsListPage },
  { path: '/login', name: 'loginPage', component: Authorization},
  { path: '/patient/card', name: 'cardPatientPage', component: PatientCard},
  { path: '/', redirect: '/login'},
]


export const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'loginPage' && vuexModule.store.token === '') next({name: 'loginPage'})
  else next()
})



