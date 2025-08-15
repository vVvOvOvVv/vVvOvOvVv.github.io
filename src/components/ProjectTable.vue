<template>
  <div class="project-table container">
    <div v-for="(row, rowIndex) in projectRows" :key="'row-' + rowIndex" class="d-flex">
      <div
        v-for="(proj, projIndex) in row"
        :key="'proj-' + rowIndex + '-' + projIndex"
        class="project-item flex-fill"
      >
        {{ proj.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectTable',
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
          type: 'testType',
          isWIP: false,
          toolsUsed: ['Tool1', 'Tool2'],
        },
      ],
    },
  },
  computed: {
    projectRows() {
      const rows = []
      for (let i = 0; i < this.projectData.length; i += 2) {
        rows.push(this.projectData.slice(i, i + 2))
      }
      return rows
    },
  },
}
</script>

<style></style>
