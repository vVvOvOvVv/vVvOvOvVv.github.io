<template>
  <div :class="`section-header ${className}`">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
