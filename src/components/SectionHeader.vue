<template>
  <div class="section-header">
    <colored-text colorType="tealType" size="45px" weight="bold"> <slot /> </colored-text>
  </div>
</template>

<script>
import ColoredText from './ColoredText.vue'

export default {
  name: 'SectionHeader',
  components: {
    ColoredText,
  },
}
</script>
