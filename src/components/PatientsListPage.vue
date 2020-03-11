<template lang="pug">
.wrapper-patients
    header
        .wrapper-header
            img.logo(src='../assets/images/logo.svg')
            input.search(placeholder='Пошук по пацієнтам')
            .full-name
                h5.full-name {{name}}
                span.initials {{getLetters}}
    section.filter-section
        h4 Пациенты
        .filters
            input(placeholder='идентиф')
            input(placeholder='имя')
            input(placeholder='регион')
            input(placeholder='статус')
    section.table-patients-wrapper
        thead
            th(v-for='stat in statusArr' :key='stat') {{stat}}
        tbody
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Status } from '@/interfaces';

@Component({})
export default class Authorization extends Vue {
    name = 'Bob Mlinton'

    statusArr = Status

    created() {
        console.log(this.name);
        console.log(Status);
    }
    
    get getLetters() {
        return this.name.match(/\b(\w)/g).join('').toUpperCase(); 
    }
}
</script>

<style lang="scss" scoped>
* {
//   border: 1px solid black;
}

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
        background-image: url('../assets/images/magnifying-glass.svg');
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
.filter-section {
    display: flex;
    padding: 0 30px 0 30px;
    align-items: flex-start;
    flex-direction: column;
    h4 {
        padding: 0;
        margin: 20px 0;
        font-size: 21px;
        font-weight: 500;
        line-height: 24px;
    }
    .filters {
        input {
            box-sizing: border-box;
            height: 30px;
            padding: 0 30px 0 10px;
            margin-right: 15px;
            border: 1px solid #DCDCDC;
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
        margin: 10px 0 20px 0 !important;
    }
}
.table-patients-wrapper {
    display: block;
    padding: 0 30px 0 30px;
}

</style>
