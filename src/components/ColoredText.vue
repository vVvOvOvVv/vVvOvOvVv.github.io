<!-- Only for non-interactable text (i.e. not links) -->
<template>
  <div class="colored-text" :style="{ color: color, fontSize: size, fontWeight: weight }">
    <slot />
    <!-- ensure contents are within the div -->
  </div>
</template>

<script>
export default {
  name: 'ColoredText',
  props: {
    color: {
      type: String,
      default: '#e9d8a6',
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
