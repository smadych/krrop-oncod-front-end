import PatientsListPage from '../components/PatientsListPage.vue';
import Authorization from '../components/Authorization.vue';

export const routes = [
  { path: '/patients', component: PatientsListPage },
  { path: '/login', component: Authorization},
  { path: '/', redirect: '/login'},
]
