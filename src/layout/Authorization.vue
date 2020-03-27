<template lang="pug">
.wrapper
  form(@submit.prevent="login" id="login-form")
    img.logo(src='../assets/images/logo.svg')
    h1 Войдите в систему
    input.login(placeholder='Логин' type='email' id="input-login" v-model.trim="$v.email.$model")
    .error-email-wrap
      span.error-email(v-if='!$v.email.required && showErrorRequired' id="empty-email-span") Введите электронную почту
      span.error-email(v-else-if='!$v.email.email' id="invalid-email-span") Введите корректную электронную почту
    input.password(placeholder='Пароль' type='password' id="input-pass" v-model='password')
    .error-password-wrap
      span.error-pass(v-if='!$v.password.required && showErrorRequired') Введите пароль
      span.error-pass(v-else-if='!$v.password.minLength') Пароль слишком короткий
      span.error-pass(v-if='showErrorEmailPass') Неверные почта или пароль
    button(type='submit' id="login-button")  Войти
    a(@click='showToken') Забыли пароль?
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DataService } from '../service/methodsApi';
import { UserLogInData } from '../store/modules/logIn';
import { vuexModule } from '@/store/index';
import Vuelidate from 'vuelidate';
import {
  required, minLength, email,
} from 'vuelidate/lib/validators';

Vue.use(Vuelidate);

@Component({
  validations: {
    email: {
      email,
      required,
    },
    password: {
      required,
      minLength: minLength(4),
    },
  },
})
export default class Authorization extends Vue {
    vuexStore = vuexModule.store

    dataService: DataService = new DataService()

    err = ''

    email = ''

    password = ''

    showErrorRequired = false

    showErrorEmailPass = false


    //Integration test + mock
    login(): void {
      this.showErrorRequired = true;
      if (this.checkInput()) {
        const userData: UserLogInData = {
          email: this.email,
          password: this.password,
        };
        console.log(this.email);
        console.log(this.password);
        if (this.email === '200@200.com') {
          this.vuexStore.token = '123';
          this.$router.push('/patientcard');
        }
        // this.dataService.sendDataAutorization(JSON.stringify(userData),
        //   this.enableAccess, this.errorLogIn);
      }
    }

    //Test Ignore
    showToken() {
      console.log(this.vuexStore.token);
    }

    //TestFiture
    checkInput(): boolean {
      if (this.email === '' || this.email === ' '
      || this.password === '' || this.password === ' ') {
         return false;
      }
      return true;
    }

    //Integration Test
    enableAccess(data: any) {
      if (data.status === 200) {
        this.$router.push('/patientcard');
      }
    }

    //Integration  + mock
    errorLogIn(message: any) {
      if (message.response !== undefined) {
        if (message.response.status === 422
        || message.response.status === 401) {
          this.showErrorEmailPass = true;
        }
      }
    }
}
</script>

<style lang="scss">
* {
  color: black;
}

.wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    width: 320px;
    padding: 0 10px 0 10px;
    .logo {
      width: 70px;
      margin: 0 auto;
    }
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
      outline: none;
      height: 50px;
      padding: 10px;
      width: 100%;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 16px;
      letter-spacing: 0.15px;
      line-height: 24px;
    }
    .error-email-wrap {
      height: 25px;
      .error-email {
        display: block;
        margin-top: 5px;
        color: red;
      }
    }
    .error-password-wrap {
      height: 48px;
      .error-pass {
        display: block;
        margin-top: 5px;
        color: red;
      }
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
}
</style>
