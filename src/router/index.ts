import PatientsListPage from '../components/PatientsListPage.vue';
import Authorization from '../components/Authorization.vue';
import PatientCard from '../components/view/PatientCard.vue'

export const routes = [
  { path: '/patients', component: PatientsListPage },
  { path: '/login', component: Authorization},
  { path: '/patient/card', name: 'card', component: PatientCard},
  { path: '/', redirect: '/login'},
]
