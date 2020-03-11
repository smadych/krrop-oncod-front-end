<template lang="pug">
.wrapper-patients
    header
      img.logo(src='../assets/images/logo.svg')
      input.search(placeholder='Пошук по пацієнтам')
      h5.full-name {{name}}
      p.initials
    //-   img(src='../assets/images/12search.svg')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Authorization extends Vue {
    name: string = 'Bob Klinton'

}
</script>

<style lang="scss" scoped>
* {
//   border: 1px solid black;
}

header {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    border-bottom: 1px solid #E1E1E1;
    .logo {
        margin: 0 55px 0 30px;
    }
    .full-name {
        margin-left: auto;
        display: inline-block;
        vertical-align: middle;
        // line-height: normal;
    }
    .search {
        box-sizing: border-box;
        // display: block;
        // width: 380px;
        outline: none;
        background-color: #F3F3F7;
        padding: 0 100px 0 20px;
        height: 40px;
        margin: auto 0;
        border-radius: 5px;
        border: none;
    }
    .search::before {
        display: block;
        // color: red;
        // content: 'before';
        content: '';
        background-image: url('../assets/images/12search.svg');
        background-size: 22px 22px;
        background-repeat: no-repeat;
        // margin: auto 0 auto 70px;
        height: 25px;
        width: 25px;
    }
    .initials {
        margin: auto 30px auto 10px;
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
}

.logo {
    justify-content: end;
}
input {
    
}
</style>
