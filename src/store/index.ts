import {
  createModule, createProxy, extractVuexModule
} from 'vuex-class-component';
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

  token = ''

  authStatus = ''

  expiresDate = ''

  listOfPatients: any = ''

  get isAuthorized() {
    return !!this.token
  }

  get authorizedStatus() {
    return this.authStatus;
  }
}

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(Store),
  },
  plugins: [PersistedState()],
});

export const vuexModule = {
  store: createProxy(store, Store),
};
