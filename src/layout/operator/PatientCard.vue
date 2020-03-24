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
            router-link(to="/patientcard/selfdata"
            :class="{ active: activeTab === 'selfdata' }") Личные данные
            router-link(to="/patientcard/treatment"
            :class="{ active: activeTab === 'treatment'}") Лечение
            router-link(to="/patientcard/inspection"
            :class="{ active: activeTab === 'inspection'}") Осмотр и патронаж
            router-link(to="/patientcard/observation"
            :class="{ active: activeTab === 'observation'}") Наблюдение
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DataService } from '@/service/methodsApi';
import Header from '../common/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class PatientCard extends Vue {
    dataService: DataService = new DataService()

    activeTab = ''
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
        margin: 0;
        margin-bottom: 5px;
        font-size: 14px;
        color: #A5A5B1;
        letter-spacing: 0.13px;
    }
    .patient-name {
        color: #000000;
        text-align: left;
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
        }
    }
    .diagnosis {
        width: fill-available;
        text-align: left;
        padding: 10px 0 10px 20px;
        border-radius: 3px;
        background-color: #F3F3F7;
        margin-bottom: 20px;
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
            text-align: left;
            box-sizing: border-box;
            color: #5F6063;
            text-decoration: none;
            // margin-right: 80px;
            margin: 20px 80px 0 0;
            padding-bottom: 14px;
            &:hover {
                color: black;
                margin-bottom: -2px;
                border-bottom: 2px solid #5555FF;
            }
        }
    .router-link-exact-active {
        color: black;
        margin-bottom: -2px;
        border-bottom: 2px solid #5555FF;
    }
    }
}

@media only screen and (max-width: 580px) {
    nav {
        flex-direction: column;
        flex-flow: nowrap;
    }
}

// for IE
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .wrapper-card {
        display: flex;
        flex-direction: column;
        .info-section {
            .link-back {
                text-align: left;
            }
            .patient-name {
                width: 100%;
                text-align: left;
            }
            .region-wrap {
                display: flex;
                flex-flow: wrap;
                width: 100%;
            }
            .diagnosis {
                width: 100%;
                padding: 10px 0 10px 0;
                box-sizing: border-box;
                padding-left: 20px;
            }
        }
        .navigation-description {
            nav {
                width: 100%;
            }
        }
    }
}

@supports (-ms-ime-align:auto) {
    .diagnosis {
        width: 100%;
        box-sizing: border-box;
    }
}
</style>
