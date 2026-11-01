<template>
  <div
    :class="[
      'project-tag inline-block',
      className,
      {
        'wip-tag': isWIP,
        'type-tag': isType,
        'category-tag': category,
        'tool-tag': isTool,
      },
    ]"
  >
    <span v-if="isWIP">WIP</span>
    <span v-else-if="category">{{ category }}</span>
    <slot v-else />

  </div>
</template>

<script>
export default {
  name: 'ProjectTag',
  props: {
    className: {
      type: String,
      default: '',
    },
    isWIP: {
      type: Boolean,
      default: false,
    },
    isType: {
      type: Boolean,
      default: false,
    },
    isTool: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      default: '',
    },
  },
}
</script>
