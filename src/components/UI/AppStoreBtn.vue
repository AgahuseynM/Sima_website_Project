<template>
    <button
        @click="click"
        :class="appBtn"
    >
        <img src="@/assets/images/button_images/AppStore.png">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'app-store-btn',
  props: {
      disabled: {
      type: Boolean,
      default: false
      }
  },
  data: () => ({}),
  methods: {
      click() {
        this.$emit('click')
      }
  },
  computed: {
      appBtn() {
        return {
          'btn_disabled': this.disabled
        }
      }
  }
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
    text-indent: 20px;

    position: relative;

    img {
        position: absolute;
        top: 45%;
        left: 20%;
        transform: translate(-50%, -50%);
    }
}
</style>