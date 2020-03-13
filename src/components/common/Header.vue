<template lang="pug">
header
    .wrapper-header
        img.logo(src='../../assets/images/logo.svg' @click='logOut')
        input.search(placeholder='Пошук по пацієнтам')
        .full-name
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

    fullName: string = ''

    letters: string = ''

    mounted() {
        console.log(vuexModule.store.token);
        console.log(vuexModule.store.expiresDate);
        this.dataService.getUserProfile(this.getFullName, this.error)
    }
    
    getFullName(data: any) {
        this.fullName = data.data.first_name + ' ';
        this.fullName += data.data.last_name;
        this.getLetters();
    }

    getLetters() {
        this.letters = this.fullName.match(/\b(\w)/g).join('').toUpperCase();
    }

     error(message: any) {
      console.log(this.fullName);
      console.log(message);
    }

    logOut() {
        this.dataService.logOut();
    }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    flex-direction: row;
    // flex-flow: wrap;
    border-bottom: 1px solid #E1E1E1;
    .wrapper-header {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        padding: 0 30px 0 30px;
        width: 100%;
    .logo {
        margin: 0 55px 0 0;
    }
    .full-name {
        margin-left: auto;
        display: inline-block;
        vertical-align: middle;
    }
    .search {
        box-sizing: border-box;
        outline: none;
        background-color: #F3F3F7;
        padding: 0 100px 0 35px;
        height: 40px;
        margin: auto 0;
        border-radius: 5px;
        border: none;
        background-image: url('../../assets/images/magnifying-glass.svg');
        background-repeat: no-repeat;
        background-position: 10px 10px;
        background-size: 20px;
    }
    .initials {
        margin: auto 0 auto 10px;
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

@media only screen and (max-width: 520px) {
    .logo {
        margin: 10px 10px 20px 0 !important;
    }
}
.table-patients-wrapper {
    display: block;
    padding: 0 30px 0 30px;
}
</style>
