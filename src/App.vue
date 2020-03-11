<template lang="pug">
  #app
    Layout
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Layout from './components/Layout.vue';

@Component({
  components: {
    Layout,
  },
})
export default class App extends Vue {

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
