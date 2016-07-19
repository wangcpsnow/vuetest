<template>
    <p v-show="show">Hello World;</p>
    <button @click='click_btn'>{{buttonText}}</button>
</template>

<script>
import store from '../vuex/store'
export default {
    name: 'Hello',
    props: {
        show: {
            type: Boolean,
            default: true
        },
        buttonText: {
            type: String,
            default: '确定'
        }
    },
    methods: {
        click_btn: function() {
            alert("click_btn");
            var bShow = this.show;
            this.show = !bShow;
            this.buttonText += '!';
        }
    }
};
</script>
