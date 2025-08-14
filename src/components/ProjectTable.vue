<template>
  <div class="project-table container"></div>
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
}
</script>

<style></style>
