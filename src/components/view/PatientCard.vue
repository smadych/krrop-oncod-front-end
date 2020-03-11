<template lang="pug">
.wrapper-card
    header
        .wrapper-header
            img.logo(src='../../assets/images/logo.svg')
            input.search(placeholder='Пошук по пацієнтам')
            .full-name
                h5.full-name {{name}}
                span.initials {{getLetters}}
    section.info-section
        a.link-back < Пациенты
        p.id-patient BM4976
        p.patient-name Маркова Александра Константиновна
        .region-wrap
            span.status-patient Наблюдение
            p.region Кировоградский район
        p.diagnosis ЗН молочной железы неуточненной части
    .navigation-description
        nav
            a Личные данные
            a Лечение
            a Осмотр и патронаж
            a Наблюдение
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class PatientCard extends Vue {
    
    name = 'Bob Mlinton'

    get getLetters() {
        return this.name.match(/\b(\w)/g).join('').toUpperCase();
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

.info-section {
    padding: 0 30px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // justify-content: left;
    .link-back, .region {
        color: #A5A5B1;
        font-size: 14px;
        letter-spacing: 0.13px;
        line-height: 16px;
        margin: 16px 0 16px 0;
    }
    .id-patient {
        // margin-bottom: 5px;
        margin: 0;
        margin-bottom: 5px;
        font-size: 14px;
        color: #A5A5B1;
        letter-spacing: 0.13px;
    }
    .patient-name {
        color: #000000;
        font-size: 24px;
        font-weight: 600;
        line-height: 28px;
        margin: 0;
        padding-bottom: 10px;
    }
    .region-wrap {
        display: flex;
        flex-direction: row;
        margin: 0;
        .status-patient {
            color: white;
            box-sizing: border-box;
            border-radius: 3px;
            padding: 2px 9px;
            background-color: #86E691;
            margin-right: 14px;
    }
        .region {
            margin: 0;
        }
    }
    .diagnosis {
        width: 100%;
        text-align: left;
        padding: 10px 0 10px 20px;
        border-radius: 3px;
        background-color: #F3F3F7;
        margin-bottom: 40px;
    }
}

.navigation-description {
    border-bottom: 1px solid #D6D6E0;
    padding: 0 30px 0 30px;
    display: flex;
    padding-bottom: 14px;
    flex-direction: column;
    align-items: flex-start;
    nav {
        a {
            margin-right: 80px;
            padding-bottom: 14px;
            &:hover {
                border-bottom: 2px solid #5555FF;
            }
        }
        a:last-child {
            margin: 0;
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
</style>