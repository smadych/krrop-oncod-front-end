<template lang="pug">
    .table-wrap
        table
            thead
                th
                th(v-for="list in titleArr"
                :key="list") {{list}}
            tbody
                tr(v-for="(obj, index) in temporaryData" :key="index")
                    td
                        button.triangle-btn
                    td(v-for="(data, indexData) in temporaryData[index]" :key="indexData") {{data}}
        .empty
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
            margin: 0;
            th {
                color: white;
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
        font-size: 16px;
        line-height: 20px;
        tr {
            border: 1px solid #E0E0E0;
            border-collapse: collapse;
            height: 56px;
            td {
                padding: 0 0 0 20px;
                color: #5F6063;
                text-align: left;
            }
            .triangle-btn {
                width: 16px;
                height: 16px;
                background-color: #fff;
                border: none;
                background-image: url('../../assets/images/down-btn.svg');
                background-repeat: no-repeat, repeat;
                background-position: center top 50%, 0 0;
                background-size: .55em auto, 200%;
                outline: none;
            }
        }
    }
}
.empty {
    height: 40px;
}
@media only screen and (max-width: 800px) {
    .table-wrap {
        overflow: auto;
    }
}
</style>
