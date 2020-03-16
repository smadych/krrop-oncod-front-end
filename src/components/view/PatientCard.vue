<template lang="pug">
.wrapper-card
    Header
    section.info-section
        router-link.link-back(to="/patients") < Пациенты
        p.id-patient BM4976
        p.patient-name Маркова Александра Константиновна
        .region-wrap
            span.status-patient Наблюдение
            p.region Кировоградский район
        p.diagnosis ЗН молочной железы неуточненной части
    .navigation-description
        nav
            router-link(to="/patientcard/selfdata") Личные данные
            router-link(to="/patientcard/treatment") Лечение
            router-link(to="/patientcard/inspection") Осмотр и патронаж
            router-link(to="/patientcard/observation") Наблюдение
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../common/Header.vue';
import { DataService } from '@/service/methodsApi';

@Component({
    components: {
        Header,
    }
})
export default class PatientCard extends Vue {
    
    name = ''

    dataService: DataService = new DataService()

    error(message: any) {
      console.log(this.name);
      console.log(message);
    }
}
</script>

<style lang="scss" scoped>

.info-section {
    margin: 0 30px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .link-back, .region {
        text-decoration: none;
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
        flex-flow: wrap;
        margin: 0;
        .status-patient {
            color: white;
            box-sizing: border-box;
            border-radius: 3px;
            padding: 3px 9px;
            background-color: #86E691;
            margin-right: 14px;
    }
        .region {
            margin: 0;
            margin-top: 3px;
            // display: block;
            // vertical-align: middle;
        }
    }
    .diagnosis {
        width: fill-available;
        width: available;
        text-align: left;
        padding: 10px 0 10px 20px;
        border-radius: 3px;
        background-color: #F3F3F7;
        margin-bottom: 40px;
    }
}

.navigation-description {
    border-bottom: 1px solid #D6D6E0;
    margin: 0 30px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    nav {
        display: flex;
        flex-flow: wrap;
        a {
            box-sizing: border-box;
            color: #5F6063;
            text-decoration: none;
            margin-right: 80px;
            padding-bottom: 14px;
            &:hover {
                margin-bottom: -2px;
                border-bottom: 2px solid #5555FF;
            }
        }
        a:last-child {
            margin: 0;
            &:hover {
                margin-bottom: -2px;
                border-bottom: 2px solid #5555FF;
            }
        }
    }
}
</style>