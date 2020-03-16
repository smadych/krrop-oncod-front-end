<template lang="pug">
form
    .self-data-wrap
        fieldset.gender
            legend Пол
            select
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
        label.control.control--checkbox
            input(type='checkbox' checked='checked')
            span Чернобылец
            .control__indicator
        label.control.control--checkbox
            input(type='checkbox')
            span Участник ВОВ
            .control__indicator
        label.control.control--checkbox
            input(type='checkbox')
            span Инвалидность
            .control__indicator
        label.control.control--checkbox
            input(type='checkbox')
            span Ведомственный учет
            .control__indicator
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
        // margin-bottom: 15px;
        fieldset, input {
            flex-grow: 1;
            margin: 0 10px 15px 0;
            min-width: 125px;
            &:last-child {
                margin: 0 0 15px 0;
            }
        }
        .gender {
            max-width: 185px;
        }
        .birdth-date {
            border: 1px solid #D6D6E0;
            padding-left: 15px;
            max-width: 185px;
            height: 40px;
            margin-top: 5px !important;
        }
    }
    .address-wrap {
        display: flex;
        flex-flow: wrap;
        flex-direction: row;
        // margin-bottom: 15px;
        fieldset {
            margin: 0 10px 15px 0;
            min-width: 125px;
            &:last-child {
                margin: 0 0 15px 0;
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
        justify-content: space-between;
        flex-flow: wrap;
        margin-right: 70px;
        font-size: 16px;
        letter-spacing: 0.15px;
        line-height: 24px;
        color: #9D9DA7;
        .control {
            display: block;
            position: relative;
            padding-left: 30px;
            margin-bottom: 15px;
            cursor: pointer;
            input {
                position: absolute;
                z-index: -1;
                opacity: 0;
            }
            .control__indicator {
                position: absolute;
                top: 0px;
                left: 0;
                height: 16px;
                width: 16px;
                background: #fff;
                border: 2px solid #ccc;
                &:after {
                    content: '';
                    position: absolute;
                    display: none;
                }
            }
        }
        .control--checkbox .control__indicator {
            border-radius: 3px;
            &:after {
                left: 5px;
                top: 0px;
                width: 5px;
                height: 12px;
                border: solid #fff;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
        }
        }
        .control input:checked ~ .control__indicator {
            background-color: #5555FF;
            border-color: #5555FF;
            &:after {
                display: block;
            }
        }

        .control input:checked ~ span {
            color: black;
        }
    }

    fieldset, input {
        border-radius: 4px;
        border: 1px solid #D6D6E0;
        // min-width: 125px;
        legend {
            color: #9D9DA7 !important;
            font-size: 12px;
            color: #0B0B20;
        }
    }
    input {
        border: none;
        outline: none;
    }
    select {
        display: block;
        font-size: 16px;
        line-height: 1.3;
        width: 100%;
        max-width: 100%; 
        box-sizing: border-box;
        margin: 0;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
        border: 0;
        border-radius: 0;
        background: white;
        outline: none;
        background-image: url('../../../assets/images/down.svg');
        background-repeat: no-repeat, repeat;
        background-position: right .7em top 50%, 0 0;
        background-size: .65em auto, 100%;
        &::-ms-expand {
            display: none;
        }
        &:hover {
            border-color: #888;
        }
    }
}
</style>