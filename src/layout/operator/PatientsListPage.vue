<template lang="pug">
.wrapper-patients
    Header
    section.filter-section
        h4#title Пациенты
        .filters
            input(placeholder='идентиф')
            input(placeholder='имя')
            input(placeholder='регион')
            input(placeholder='статус')
    section.table-patients-wrapper
        table
            thead
                th(v-for='stat in statusArr' :key='stat') {{stat}}
            tbody
                tr(v-for='(patient, index) in vuexStore.listOfPatients' :key='index')
                    td {{patient.id}}
                    td {{patient.first_name}} {{patient.middle_name}} {{patient.last_name}}
                    td {{patient.region_id}}
                    td {{patient.birthday}}
                    td {{patient.disability}}
                    td {{patient.disposal_date}}
                    td none
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Status } from '@/interfaces';
import { DataService } from '@/service/methodsApi';
import { vuexModule } from '@/store';
import Header from '../common/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class Authorization extends Vue {
    vuexStore = vuexModule.store

    dataService: DataService = new DataService()

    statusArr = Status

    beforeMount() {
        this.dataService.getPatients();
    }
}
</script>

<style lang="scss" scoped>
.wrapper-patients {
    .filter-section {
        display: flex;
        margin: 0 30px 0 30px;
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
            margin-bottom: 20px;
            input {
                box-sizing: border-box;
                margin-bottom: 20px;
                max-width: 180px;
                // height: 30px;
                padding: 7px 0 7px 10px;
                margin-right: 15px;
                border: 1px solid #DCDCDC;
                font-size: 14px;
                letter-spacing: 0;
                line-height: 16px;
            }
        }
    }
    .table-patients-wrapper {
        margin: 0 30px 30px 30px;
        table {
            width: 100%;
            text-align: start;
            border-collapse: collapse;
            thead {
                th {
                    padding-bottom: 15px;
                    margin-top: 30px;
                    text-align: start;
                    opacity: 0.8;
                    color: #000000;
                    font-size: 13px;
                    line-height: 15px;
                }
            }
            tbody {
                tr {
                    &:hover {
                        background-color: #F6F6F6;
                    }
                    border-bottom: 1px solid #DCDCDC;
                    height: 55px;
                }
            }
        }
    }
}

@media only screen and (max-width: 680px) {
    .table-patients-wrapper {
        overflow: auto;
    }
}
</style>
