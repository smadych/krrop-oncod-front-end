import VueRouter from 'vue-router';
import Vue from 'vue';
import { vuexModule } from '../store';

Vue.use(VueRouter);

export const routes = [
  { path: '/login', name: 'loginPage', component: () => import('../layout/Authorization.vue') },
  { path: '/patients', name: 'patientsPage', component: () => import('../layout/operator/PatientsListPage.vue') },
  {
    path: '/patientcard',
    name: 'cardPatientPage',
    component: () => import('../layout/operator/PatientCard.vue'),
    children: [
      { path: 'selfdata', component: () => import('../components/operator/SelfData.vue') },
      { path: 'inspection', component: () => import('../components/operator/Inspection.vue') },
      { path: 'observation', component: () => import('../components/operator/Observation.vue') },
      { path: 'treatment', component: () => import('../components/operator/Treatment.vue') },
    ],
  },
  { path: '/', redirect: '/login' },
];


export const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'loginPage' && vuexModule.store.token === '') next({ name: 'loginPage' });
  else next();
});
