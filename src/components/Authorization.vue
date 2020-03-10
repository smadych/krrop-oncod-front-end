<template lang="pug">
.wrapper
  img.logo(src='../assets/images/logo.svg')
  h1 {{message}}
  input.login(placeholder='Логин' type='email' v-model='email')
  span.error-email {{errEmail}}
  input.password(placeholder='Пароль' type='password' v-model='password')
  span.error-pass {{errPass}}
  button(@click='logIn') Войти
  a Забыли пароль?
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DataService } from '@/service//methodsApi';
import { SingInInterface } from '@/interfaces';
import { UserLogInData } from '@/store/logIn';


@Component({})
export default class Authorization extends Vue {
    message = 'Войдите в систему'

    dataService: DataService = new DataService()

    err: any = ''

    email = ''

    password = ''

    ref: any = this.$refs

    errEmail = ''

    errPass = ''

    logIn(): void {
      if (this.checkInput()) {
        const userData: UserLogInData = {
          email: this.email,
          password: this.password,
        };
        this.dataService.sendDataAutorization(JSON.stringify(userData),
          this.logData, this.errorLogIn);
      }
    }

    checkInput(): boolean {
      this.errEmail = '';
      this.errPass = '';
      if (this.email === '' || this.password === '') {
        if (this.email === '' || this.email === ' ') {
          this.errEmail = 'Введите адрес электронной почты';
        }
        if (this.password === '' || this.password === ' ') {
          this.errPass = 'Введите пароль';
        }
        return false;
      }
      return true;
    }

    logData(data: any) {
      this.$emit('patientPage', true);
      console.log(this.message);
      console.log(data);
    }

    errorLogIn(message: any) {
      if (message.response.status === 422
      || message.response.status === 401) {
        this.errPass = 'Неверные почта или пароль';
      }
      console.log(message.response.status);
      console.log(message.response.data.errors.email);
    }

    error(message: any) {
      this.err = message;
      console.log(message);
    }
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

.wrapper {
    display: flex;
    flex-direction: column;
    width: 320px;
    padding: 0 10px 0 10px;
    font-family: Roboto;
  h1 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 28px;
  }
  .logo, h1, .wrapper-input {
    margin-bottom: 50px;
  }
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
      margin-bottom: 5px;
    }
    .error-email {
      margin-bottom: 10px;
      color: red;
    }
    .password {
      margin-bottom: 5px;
    }
    .error-pass {
      margin-bottom: 40px;
      color: red;
    }
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
</style>
