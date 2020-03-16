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
        fieldset
            legend Населенный пункт
            input.locality(placeholder='Нас. пункт')
        fieldset
            legend Адрес
            input.address(placeholder='адрес')
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
    .self-data-wrap {
        display: flex;
        flex-direction: row;
        
    }
    .address-wrap {
        display: flex;
        flex-direction: row;
    }
    .checkbox-wrap {
        display: flex;
        justify-content: space-between;
    }
    fieldset {
        border-radius: 4px;
        border: 1px solid #D6D6E0;
        legend {
            font-size: 12px;
            color: #0B0B20;
        }
    } 
}
</style>