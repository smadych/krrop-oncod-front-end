<template lang="pug">
  #app
    Layout
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DataService } from '@/service//methodsApi';
import axiosBase from '@/service/api';
import Layout from './components/Layout.vue';

@Component({
  components: {
    Layout,
  },
})
export default class App extends Vue {
  dataService: DataService = new DataService()

  // created() {
  // axiosBase.interceptors.response.use(undefined, err => {
  //   return new Promise((resolve, reject) => {
  //     if(err.status === 401 && err.config && !err.config.__isRetryRequest) {
  //       this.dataService.logOut(this.moveToLogIn);
  //     }
  //     throw err;
  //   });
  // });
  // }

  // moveToLogIn() {
  //   this.$router.push('/login');
  // }
}
</script>

<style lang="scss">
@font-face {
  src: url(./assets/fonts/Roboto-Regular.ttf);
  font-family: Roboto;
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
html, body, #app {
  height: 100%;
}
</style>
