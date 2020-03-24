<template lang="pug">
header
    .wrapper-header
        img.logo(src='../../assets/images/logo.svg' @click='logOut')
        .search-wrap
            input.search(placeholder='Пошук по пацієнтам')
        .full-name-wrap
            h5.full-name {{fullName}}
            span.initials {{letters}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DataService } from '@/service/methodsApi';
import { vuexModule } from '../../store';

@Component({})
export default class Header extends Vue {
    dataService: DataService = new DataService()

    fullName = ''

    letters = ''

    beforeMount() {
      console.log(vuexModule.store.token);
      this.dataService.getUserProfile(this.getFullName);
    }

    getFullName(data: any) {
      this.fullName = `${data.data.first_name} `;
      this.fullName += data.data.last_name;
      this.getLetters();
    }

    getLetters() {
      this.letters = this.fullName.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'');
    }

    logOut() {
      this.dataService.logOut(this.moveToLogIn);
    }

    moveToLogIn() {
      this.$router.push('/login');
    }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #E1E1E1;
    .wrapper-header {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        margin: 0 30px 0 30px;
        width: 100%;
    .logo {
        margin: 0 55px 0 0;
    }
    .full-name-wrap {
        margin-left: auto;
        display: inline-block;
        vertical-align: middle;
        .full-name {
            display: inline-block;
            vertical-align: middle;
        }
    }
    .search-wrap {
        display: flex;
        .search {
            width: 100%;
            outline: none;
            color: 8F#000;
            opacity: 56%;
            background-color: #F3F3F7;
            padding: 0 100px 0 35px;
            height: 40px;
            margin: auto 0;
            border-radius: 5px;
            border: none;
            background-image: url('../../assets/images/magnifying-glass.svg');
            background-repeat: no-repeat;
            background-position: 10px 12px;
            background-size: 15px;
        }
    }
    .initials {
        margin: auto 0 auto 10px;
        color: #fff;
        padding: 8px 7px;
        border-radius: 100%;
        background-color: #5555FF;
    }
    }
}
@media only screen and (max-width: 680px) {
    .wrapper-header {
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .full-name {
            margin-right: auto;
            display: inline-block;
            vertical-align: middle;
    }
    }
}

@media only screen and (max-width: 660px) {
    .logo, .search {
        margin-top: 10px !important;
    }
    .full-name-wrap {
        margin: 0 auto;
    }
}

@media only screen and (max-width: 520px) {
    .logo {
        margin: 10px 10px 20px 0 !important;
    }
}
.table-patients-wrapper {
    display: block;
    padding: 0 30px 0 30px;
}

// for Firefox
@-moz-document url-prefix() {
  .wrapper-header {
      display: flex;
    .search-wrap {
        display: flex;
    }
  }
}

// for IE
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .wrapper-header {
    //   display: flex;
        .logo {
            width: 70px;
            height: 45px;
        }
    .search-wrap {
        // display: flex;
      .search {
            background-position: -55px 10px !important;
            background-size: 150px !important;
        }
    }
  }
  @media only screen and (max-width: 660px) {
    .logo, .search {
        margin-top: 10px !important;
    }
    .wrapper-header {
        .full-name-wrap {
            margin-right: 50%;
        }
    }
}
}
</style>
