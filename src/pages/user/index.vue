<template>
    <div class="container">
        <div class="header">
            <img class="avatar" src="/static/images/pic-user@2x.png" />
            <p class="name">王顺</p>
        </div>
        <img-button :openType="getUserInfo" @getuserinfo="getUserInfo">
            <img src="/static/images/share.png" />
        </img-button>
    </div>
</template>

<script>
    import imgButton from '../../components/image-button'
    export default {

        components: {
            "img-button": imgButton
        },

        data() {
            return {
                
            }
        },

        created() {
            console.log('user created')
        },

        
        mounted() {
            console.log('user mounted');
        },

        methods: {
            getUserInfo(e) {
                console.log(e);
            }
        }

    }
</script>

<style scoped>

.container .header {
    height: 260rpx;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e35c41;
}

.container .header .avatar {
    width: 145rpx;
    height: 145rpx;
    margin-top: 10rpx;
    border-radius: 50%;
}

.container .header .name {
    color: #fff;
    font-size: 36rpx;
    margin-top: 20rpx;
}


</style>