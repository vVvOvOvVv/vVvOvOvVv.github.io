<template>
  <div class="mx-auto mb-3 flex w-full max-w-6xl flex-col px-3">
    <colored-text :size="isSubheader ? '24px' : '35px'" weight="bold">
      <slot />
    </colored-text>
    <canvas id="header-partition" ref="canvasElement" class="block" width="200" height="1"></canvas>
  </div>
</template>

<script>
import ColoredText from './ColoredText.vue'

export default {
  name: 'SectionHeader',
  components: {
    ColoredText,
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

    const canvasWidth = this.isSubheader ? 20 : 40
    ctx.fillStyle = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-secondary')
      .trim()
    ctx.fillRect(0, 0, canvasWidth, 1)
  },
}
</script>
