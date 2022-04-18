<template>
    <button>
        <img src="@/assets/images/button_images/PlayMarket.png">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'play-market-btn'
}
</script>

<style lang="scss" scoped>
button {
    width: 143px;
    height: 48px;
    border-radius: 4px;
    border: none;
    color: $color5;
    font: 15px Roboto-Bold;
    line-height: 24px;
    letter-spacing: 0.003em;
    text-indent: 25px;


    position: relative;

    img {
        position: absolute;
        top: 45%;
        left: 17%;
        transform: translate(-50%, -50%);
    }
}
</style>