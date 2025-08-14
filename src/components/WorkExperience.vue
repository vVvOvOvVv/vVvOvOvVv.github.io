<template>
  <div class="work-experience">
    <colored-text>{{ getString() }}</colored-text>
  </div>
</template>

<script>
import ColoredText from './ColoredText.vue'

export default {
  name: 'WorkExperience',
  components: {
    ColoredText,
  },
  props: {
    workObj: {
      type: Object,
      default: () => ({
        company: 'co.',
        title: 'employee',
        startDate: 'never',
        endDate: 'whenever',
      }),
    },
  },
  methods: {
    getString() {
      const msgLength = 100 // excluding [[ and ]]
      var strLength =
        this.workObj.company.length +
        this.workObj.title.length +
        this.workObj.startDate.length +
        this.workObj.endDate.length +
        3 + // ' | '
        4 + // spaces
        3 // ' - '
      const hyphenCount = Math.max(msgLength - strLength, 0)
      const hyphenStr = '-'.repeat(hyphenCount)

      return (
        '[[ ' +
        this.workObj.company +
        ' | ' +
        this.workObj.title +
        ' ' +
        hyphenStr +
        ' ' +
        this.workObj.startDate +
        ' - ' +
        this.workObj.endDate +
        ' ]]'
      )
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/custom.scss' as *;
</style>
