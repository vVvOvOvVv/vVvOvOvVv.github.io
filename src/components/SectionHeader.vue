<template>
  <div class="section-header container d-flex flex-column mb-3">
    <colored-text :size="isSubheader ? '35px' : '45px'" weight="bold">
      <slot />
    </colored-text>
    <canvas id="header-partition" ref="canvasElement" width="200" height="1"></canvas>
  </div>
</template>

<script>
import ColoredText from './ColoredText.vue'

export default {
  name: 'SectionHeader',
  components: {
    ColoredText,
  },
  data() {
    return {
      primaryColor: '#0a9396',
      secondaryColor: '#ca6702',
    }
  },
  props: {
    isSubheader: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    const canvas = this.$refs.canvasElement
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = this.secondaryColor
    ctx.fillRect(0, 0, 40, 1)

    console.log(this.isSubheader)
  },
}
</script>
