<template lang="pug">
.wrapper
    .form
        img.logo(src='../assets/images/logo.svg')
        h1 {{message}}
        .wrapper-input
            input.login(placeholder='Логин')
            input.password(placeholder='Пароль')
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
    color: black;
}

@font-face {
    src: url(../assets/fonts/Roboto-Regular.ttf);
    font-family: Roboto;
}

html,
body {
    min-height: 100%;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
.form {
  margin-top: 200px;
  height: 444px;
  width: 320px;
  h1 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 28px;
  }
  .logo, h1, .wrapper-input {
    margin-bottom: 50px;
  }
  .wrapper-input {
      input {
        border: 1px solid #D6D6E0;
        height: 50px;
        padding: 10px;
        width: 100%;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 16px;
        letter-spacing: 0.15px;
        line-height: 24px;
      }
      .login {
          margin-bottom: 25px;
      }
  }
  .wrapper-buttons {
    display: flex;
    flex-direction: column;
    button, a:hover {
        cursor: pointer;
    }
    button {
        height: 50px;
        color: white;
        font-size: 16px;
        background-color: #5555FF;
        margin-bottom: 25px;
        border-style: none;
        border-radius: 3px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.15px;
        line-height: 24px;
        outline: none;
    }
    a {
        color: #5555FF;
        line-height: 19px;
    }
  }
}
}
</style>