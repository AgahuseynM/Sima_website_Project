<template>
  <button class="app_btn">
    <i class="material-icons"
       v-if="icon"
    >
      {{icon}}</i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'download-btn',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
.app_btn {
  width: 143px;
  border-radius: 4px;
  border: none;
  color: $color5;
  font: 15px Roboto-Bold;
  line-height: 24px;
  letter-spacing: 0.003em;

  display: flex;
  align-items: center;
  justify-content: center;

  .material-icons {
    margin-right: 8px;
    margin-bottom: 2px;
    font-size: 30px;
  }
}

</style>