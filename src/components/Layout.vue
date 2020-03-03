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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
