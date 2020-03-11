<template lang="pug">
.wrapper-layout
    //- Authorization
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Authorization from './Authorization.vue';
import PatientPage from './PatientsListPage.vue';

@Component({
  components: {
    Authorization,
    PatientPage,
  },
})
export default class HelloWorld extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrapper-layout {
  width: 100%;
  height: 100%;
}
</style>
