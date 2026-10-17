<!-- Only for non-interactable text (i.e. not links) -->
<template>
  <div
    class="break-words [overflow-wrap:break-word]"
    :class="{
      'text-primary-text': colorType === 'whiteType',
      'text-primary': colorType === 'tealType',
      'text-important': colorType === 'importantType',
    }"
    :style="{ fontSize: size, fontWeight: weight, whiteSpace: 'pre-wrap' }"
  >
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
      default: '16px',
    },
    weight: {
      type: String,
      default: 'normal',
    },
  },
}
</script>
