<template lang="pug">
    .table-wrap
        table
            thead
                th(v-for="list in titleArr"
                :key="list") {{list}}
            tbody
                tr(v-for="(obj, index) in temporaryData" :key="index")
                    td(v-for="(data, indexData) in temporaryData[index]" :key="indexData") {{data}}
                    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Inspection extends Vue {
    titleArr: string[] = ['Дата наблюдения', 'Вид наблюдения', 'Где наблюдался', 'Профиль', 'Клиническая группа']

    temporaryData: string[][] = [['10.10.2020', 'Амбулаторный прием', '4 гор. больница', 'неизвестно', '2'],
    ['10.10.2020', 'Амбулаторный прием', '4 гор. больница', 'неизвестно', '2']]
}
</script>

<style lang="scss" scoped>
.table-wrap {
    margin: 30px 30px 0 30px;
    table {
        margin: 0 auto;
        width: 100%;
        border-collapse: collapse;
        thead {
            background-color: #5555FF;
            color: white;
            margin: 0;
            th {
                text-align: left;
                height: 40px;
                font-size: 13px;
                font-weight: 500;
                line-height: 15px;
                padding: 0 0 0 20px;
            }
        }
    }
    tbody {
        color: #5F6063;
        font-size: 16px;
        line-height: 20px;
        tr {
            border: 1px solid #E0E0E0;
            border-collapse: collapse;
            height: 56px;
            td {
                padding: 0 0 0 20px;
                text-align: left;
            }
        }
    }
}
</style>