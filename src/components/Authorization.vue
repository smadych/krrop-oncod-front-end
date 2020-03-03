<template lang="pug">
.wrapper
    .form
        img(src='../assets/images/logo.svg')
        h1 {{message}}
        input
        input
        button
        a
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Authorization extends Vue {
    message: string = 'Войдите в систему'
}
</script>

<style lang="scss">
* {
    border: 1px solid black;
}
</style>