<template lang="pug">
form
    .self-data-wrap
        fieldset
            legend Пол
            select.gender
                option(value='женский') женский
                option(value='мужской') мужской
        input.birdth-date(placeholder='Дата рождения')
        fieldset
            legend Национальность
            select.nationality
                option(value='украинская') украинская
                option(value='другая-страна') другая страна
        fieldset
            legend Житель
            select.city
                option(value='город') город
                option(value='другое') другое
    .address-wrap
        fieldset.locality
            legend Населенный пункт
            input(placeholder='Нас. пункт')
        fieldset.address
            legend Адрес
            input(placeholder='адрес')
    .profession-wrap
        fieldset
            legend Профессия
            input.profession(placeholder='Профессия')
    .checkbox-wrap
        div
            input(type="checkbox" name='чернобылец' value="чернобылец")
            label(for="чернобылец") чернобылец
        div
            input(type="checkbox" name='учасник-вов' value="учасник-вов")
            label(for="учасник-вов") учасник-вов
        div
            input(type="checkbox" name='инвалидность' value="инвалидность")
            label(for="инвалидность") инвалидность
        div
            input(type="checkbox" name='ведомственный-учет' value="ведомственный-учет")
            label(for="ведомственный-учет") ведомственный-учет
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SelfData extends Vue {
    
}
</script>

<style lang="scss" scoped>
form {
    margin: 25px 30px 0 30px;
    text-align: left;
    display: flex;
    flex-direction: column;;
    .self-data-wrap {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        margin-bottom: 15px;
        fieldset, input {
            flex-grow: 1;
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
        }
        .birdth-date {
            border: 1px solid #D6D6E0;
        }
    }
    .address-wrap {
        display: flex;
        flex-flow: wrap;
        flex-direction: row;
        margin-bottom: 15px;
        fieldset {
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
        }
        .locality {
            flex-grow: 1;
        }
        .address {
            flex-grow: 2;
        }
    }

    .profession-wrap {
        margin-bottom: 20px;
    }

    .checkbox-wrap {
        display: flex;
        // justify-content: space-between;
        div {
            margin-right: 70px;
            color: #9D9DA7;
            input {
                margin-right: 5px;
            }
        }
    }

    fieldset, input {
        border-radius: 4px;
        border: 1px solid #D6D6E0;
        legend {
            color: #9D9DA7 !important;
            font-size: 12px;
            color: #0B0B20;
        }
    }
    input {
        border: none;
    }
}
</style>