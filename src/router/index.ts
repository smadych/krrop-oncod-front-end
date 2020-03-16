import  VueRouter  from 'vue-router';
import Vue from 'vue';
import { vuexModule } from '../store';

const PatientsListPage = () => import('../components/main/PatientsListPage.vue');
const Authorization = () => import('../components/main/Authorization.vue');
const PatientCard = () => import('../components/view/PatientCard.vue');
const SelfDAta = () => import('../components/view/nav-patients-card/SelfData.vue');
const Inspection = () => import('../components/view/nav-patients-card/Inspection.vue');
const Observation = () => import('../components/view/nav-patients-card/Observation.vue');
const Treatment = () => import('../components/view/nav-patients-card/Treatment.vue');

Vue.use(VueRouter);

export const routes = [
  { path: '/patients', name: 'patientsPage', component: PatientsListPage },
  { path: '/login', name: 'loginPage', component: Authorization},
  { path: '/patientcard', name: 'cardPatientPage', component: PatientCard, children: [
    { path: 'selfdata', component: SelfDAta},
    { path: 'inspection', component: Inspection},
    { path: 'observation', component: Observation},
    { path: 'treatment', component: Treatment}
  ]},
  { path: '/', redirect: '/login'},
]


export const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'loginPage' && vuexModule.store.token === '') next({name: 'loginPage'})
  else next()
})



