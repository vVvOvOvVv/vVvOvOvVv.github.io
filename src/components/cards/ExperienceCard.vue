<template>
  <div v-reveal :class="`experience-card p-4 ${className}`">
    <div class="experience-large mb-4">
      {{ experience.title }}
    </div>
    <div class="experience-details">
      <div>{{ experience.company }} || {{ experience.startDate }} <span v-if="experience.endDate">- {{ experience.endDate }} </span></div>
      <div v-if="experience.location">
        {{ experience.location }}
      </div>
      <div
        class="mt-2 italic"
        v-if="experience.desc">{{ experience.desc }}</div>
    </div>
  </div>
</template>

<script>
import revealOnScroll from '../../directives/revealOnScroll.js'

export default {
  name: 'ExperienceCard',
  directives: {
    reveal: revealOnScroll,
  },
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
