<template lang="pug">
    header
      img.logo(src='../assets/images/logo.svg')
      input
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Authorization extends Vue {

}
</script>

<style lang="scss" scoped>
.logo {
    justify-content: end;
}
input {
    color: red;
}
</style>
