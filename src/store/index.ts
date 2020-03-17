import {
  createModule, mutation, createProxy, action, extractVuexModule,
} from 'vuex-class-component/dist';
import Vue from 'vue';
import Vuex from 'vuex';
import PersistedState from 'vuex-persistedstate';

const VuexModule = createModule({
  namespaced: 'user',
  strict: false,
  target: 'nuxt',
});

Vue.use(Vuex);

export class Store extends VuexModule {
  token: string = ''

  expiresDate: string = ''

  listOfPatients: any = ''
}

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(Store),
  },
  plugins: [PersistedState()]
});

export const vuexModule = {
  store: createProxy(store, Store),
};
