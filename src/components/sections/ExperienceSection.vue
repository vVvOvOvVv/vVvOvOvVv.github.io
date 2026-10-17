<template>
  <div :class="`experience-section ${className}`">
    <SectionHeader
      title="Work & Experience"
      className="mb-6"
    />
    <div class="experience-list px-6">
      <div
        v-for="(exp, index) in workExpData"
        :key="index"
        class="experience-item mb-4"
      >
        <ExperienceCard :experience="exp" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '../SectionHeader.vue'
import ExperienceCard from '../cards/ExperienceCard.vue'

export default {
  name: 'ExperienceSection',
  components: {
    SectionHeader,
    ExperienceCard,
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    workExpData: {
      type: Array,
      required: true,
    },
  },
}
</script>
