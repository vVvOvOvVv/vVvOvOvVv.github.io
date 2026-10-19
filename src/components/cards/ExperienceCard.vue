<template>
  <div :class="`experience-card p-4 ${className}`">
    <div class="experience-large mb-4">
      {{ experience.title }}
    </div>
    <div class="experience-details">
      <div>{{ experience.company }} || {{ experience.startDate }} <span v-if="experience.endDate">- {{ experience.endDate }} </span></div>
      <div v-if="experience.location">
        {{ experience.location }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    experience: {
      type: Object,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
