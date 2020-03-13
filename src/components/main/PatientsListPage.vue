<template lang="pug">
.wrapper-patients
    Header
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
import Header from '../common/Header.vue';

@Component({
    components: {
        Header,
    }
})
export default class Authorization extends Vue {

    statusArr = Status
}
</script>

<style lang="scss" scoped>
* {
//   border: 1px solid black;
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
</style>
