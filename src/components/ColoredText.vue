<!-- Only for non-interactable text (i.e. not links) -->
<template>
  <div class="colored-text" :class="[colorType]" :style="{ fontSize: size, fontWeight: weight }">
    <slot />
    <!-- ensure contents are within the div -->
  </div>
</template>

<script>
export default {
  name: 'ColoredText',
  props: {
    colorType: {
      type: String,
      default: 'whiteType',
    },
    size: {
      type: String,
      default: '20px',
    },
    weight: {
      type: String,
      default: 'normal',
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/custom.scss' as *;

.whiteType {
  color: $primary-text;
}
.tealType {
  color: $primary-color;
}
.importantType {
  color: $important-color;
}
.colored-text {
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
}
</style>
