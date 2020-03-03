<template lang="pug">
    h1 {{message}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Authorization extends Vue {
    message: string = 'Войдите в систему'
}
</script>

<style lang="sass">

</style>