<template lang="pug">
.wrapper
    .form
        img.logo(src='../assets/images/logo.svg')
        h1 {{message}}
        .wrapper-input
            input(placeholder='Логин')
            input(placeholder='Пароль')
        .wrapper-buttons
            button Войти
            a Забыли пароль?
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
    // border: 1px solid black;
    color: black;
}
html, 
body {
    min-height: 100%;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
.form {
  margin-top: 200px;
  height: 444px;
  width: 320px;
  .logo, h1 {
    margin-bottom: 50px;
  }
  .wrapper-input {
      input {
        border: 1px solid #D6D6E0;
        height: 36px;
        width: 100%;
        border-radius: 4px;
      }
  }
  .wrapper-buttons {
      display: flex;
      flex-direction: column;
  }
}
}

</style>