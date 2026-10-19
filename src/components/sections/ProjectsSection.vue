<template>
  <div id="projects" :class="`projects-section scroll-mt-24 ${className}`">
    <SectionHeader
      title="Projects"
      className="mb-4"
    />
    <div class="projects-list px-6">
      <ProjectCard
        v-for="(proj, index) in projData"
        :key="index"
        :proj="proj"
        :index="index"
        className="mb-4"
      />
    </div>
  </div>
</template>

<script>
import SectionHeader from '../SectionHeader.vue'
import ProjectCard from '../cards/ProjectCard.vue'

export default {
  name: 'ProjectsSection',
  components: {
    SectionHeader,
    ProjectCard,
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    projData: {
      type: Array,
      required: true,
    },
  },
}
</script>
