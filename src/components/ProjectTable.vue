<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div
      v-for="(proj, projIndex) in projectData"
      :key="'proj-' + projIndex"
      class="p-3"
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
