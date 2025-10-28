<template>
  <div class="footer-bar v-container align-center d-flex">
    <colored-text class="m-3" size="14px">
      vVvOvOvVv.github.io, last updated November 2025
    </colored-text>
  </div>
</template>
<script>
import ColoredText from './ColoredText.vue';
export default {
  name: 'FooterBar',
  components: {
    ColoredText,
  },
}
</script>
<style lang="scss">
  @use '../assets/custom.scss' as *;
  .footer-bar {
    background-color: $primary-color;
    height: 60px;
    width: 100%;
    margin-top: 2rem;
  }
</style>
