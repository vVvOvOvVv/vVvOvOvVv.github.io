<template>
  <div id="work-experience" :class="`experience-section scroll-mt-24 ${className}`">
    <SectionHeader
      title="Work & Experience"
      className="mb-4"
    />
    <div class="experience-list sm:px-6">
      <ExperienceCard
        v-for="(exp, index) in workExpData"
        :key="index"
        :experience="exp"
        class="mb-4"
      />
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
