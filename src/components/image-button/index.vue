<template>
    <button class="button-img" :open-type="openType" @click="_getuserinfo" :plain="true">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            openType: String
        },

        methods: {
            _getuserinfo(e) {
                console.log(e);
                this.$emit('getuserinfo',e.mp);
            }
        },

        created() {
            console.log(1);
        },

       
    }
</script>

<style >
    .button-img {
        padding: 0 !important;
        border: none !important;
    }
    .button-img img {
        width: 32rpx;
        height: 32rpx;
    }
</style>