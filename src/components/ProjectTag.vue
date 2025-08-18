<template>
  <div
    class="proj-tag rounded-pill p-1 px-3 d-flex flex-row align-items-center justify-content-center"
    :class="{ 'type-tag': isType, 'wip-tag': isWip, 'link-tag': isLink }"
  >
    <a v-if="isLink" :href="link">
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

<style lang="scss">
@use '@/assets/custom.scss' as *;
.proj-tag {
  background-color: $primary-color;
}
.type-tag,
.link-tag {
  background-color: $secondary-color;
}
.wip-tag {
  background-color: $important-color;
}
</style>
