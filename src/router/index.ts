import PatientsListPage from '../components/main/PatientsListPage.vue';
import Authorization from '../components/main/Authorization.vue';
import PatientCard from '../components/view/PatientCard.vue';

export const routes = [
  { path: '/patients', component: PatientsListPage },
  { path: '/login', component: Authorization},
  { path: '/patient/card', name: 'card', component: PatientCard},
  { path: '/', redirect: '/login'},
]
