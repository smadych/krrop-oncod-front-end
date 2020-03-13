<template lang="pug">
.wrapper
  form
    img.logo(src='../../assets/images/logo.svg')
    h1 Войдите в систему
    input.login(placeholder='Логин' type='email' v-model.trim="$v.email.$model")
    span.error-email(v-if='!$v.email.required') Введите электронную почту
    span.error-email(v-else-if='!$v.email.email') Введите корректную электронную почту
    input.password(placeholder='Пароль' type='password' v-model='password')
    span.error-pass(v-if='!$v.password.required') Введите пароль
    span.error-pass(v-else-if='!$v.password.minLength') Пароль слишком короткий
    button(@click='logIn') Войти
    a Забыли пароль?
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DataService } from '@/service//methodsApi';
// import { SingInInterface } from '@/interfaces';
import { UserLogInData } from '@/store/logIn';
import  { vuexModule } from '@/store';
import Vuelidate from 'vuelidate'
import { required, minLength, email, between } from 'vuelidate/lib/validators';

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
    }
  }
})
export default class Authorization extends Vue {
    vuexStore = vuexModule.store

    dataService: DataService = new DataService()

    err: any = ''

    email = ''

    password = ''

    logIn(): void {
      if (this.checkInput()) {
        const userData: UserLogInData = {
          email: this.email,
          password: this.password,
        };
        // if (this.email === '200') {
        //   this.$router.push('/patient/card');
        // }
        this.dataService.sendDataAutorization(JSON.stringify(userData),
          this.logData, this.errorLogIn);
      }
    }

    checkInput(): boolean {
      if (this.email === '' || this.password === '') {
        if (this.email === '' || this.email === ' ') {
          // this.errEmail = 'Введите адрес электронной почты';
        }
        if (this.password === '' || this.password === ' ') {
          // this.errPass = 'Введите пароль';
        }
        return false;
      }
      return true;
    }

    logData(data: any) {
      if (data.status === 200) {
        // this.$router.push('/patients');
        this.$router.push('/patient/card');
      }
    }

    errorLogIn(message: any) {
      console.log(message.response);
      if (message.response !== undefined) {
        if (message.response.status === 422
        || message.response.status === 401) {
        }
      }
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

.wrapper {
    // font-family: Roboto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    width: 320px;
    padding: 0 10px 0 10px;
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
      margin-bottom: 20px;
    }
    .error-email {
      margin-bottom: 10px;
      color: red;
    }
    .password {
      margin-bottom: 45px;
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
}
</style>
