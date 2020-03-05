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
export default class Layout extends Vue {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
