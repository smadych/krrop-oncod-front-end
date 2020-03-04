<template lang="pug">
    Authorization
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Authorization from './Authorization.vue';

@Component({
  components: {
    Authorization,
  }
})
export default class HelloWorld extends Vue {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html,
body {
    min-height: 100%;
}
</style>
