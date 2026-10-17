<template>
  <div
    class="flex flex-row items-center justify-center rounded-full bg-primary px-3 p-1"
    :class="{
      'bg-secondary': isType || isLink,
      'bg-important': isWip,
      'transition-transform hover:scale-105': isLink,
    }"
  >
    <a v-if="isLink" :href="link" target="_blank" rel="noopener noreferrer">
      <colored-text weight="bold"> <slot /> </colored-text>
    </a>
    <colored-text v-else weight="bold"> <slot /> </colored-text>
  </div>
</template>

<script>
import ColoredText from './ColoredText.vue'

export default {
  name: 'ProjectTag',
  components: {
    ColoredText,
  },
  props: {
    isType: {
      type: Boolean,
      default: false,
    },
    isWip: {
      type: Boolean,
      default: false,
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>
