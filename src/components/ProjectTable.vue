<template>
  <div class="project-table container">
    <div
      v-for="(proj, projIndex) in projectData"
      :key="'proj-' + projIndex"
      class="project-item p-3"
    >
      <project-box :proj="proj" />
    </div>
  </div>
</template>

<script>
import ProjectBox from './ProjectBox.vue'

export default {
  name: 'ProjectTable',
  components: {
    ProjectBox,
  },
  props: {
    projectData: {
      type: Array,
      default: () => [
        {
          name: 'testName',
          desc: 'long ass description',
          imgPath: '',
          type: 'testType',
          isWIP: true,
          toolsUsed: ['Tool1', 'Tool2'],
        },
        {
          name: 'anotherTest',
          desc: 'long ass description',
          imgPath: '',
          type: 'idk man',
          isWIP: false,
          toolsUsed: ['Tool1', 'Tool2'],
        },
      ],
    },
  },
}
</script>

<style scoped>
.project-table {
  display: grid;
  grid-template-columns: 1fr; /* 1 per row by default */
  gap: 1rem;
}

@media (min-width: 768px) {
  .project-table {
    grid-template-columns: repeat(2, 1fr); /* 2 per row */
  }
}
</style>
