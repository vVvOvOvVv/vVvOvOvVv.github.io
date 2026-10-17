<template>
  <div class="box-border w-full rounded bg-primary-text">
    <div class="grid md:grid-cols-2">
      <div class="flex w-full flex-col items-start p-3">
        <colored-text color-type="tealType" size="22px" weight="bold">{{ proj.name }}</colored-text>
        <colored-text class="m-1" color-type="tealType">{{ proj.desc }}</colored-text>
        <project-tag v-if="hasLink" :is-link="true" :link="proj.externalLink">
          {{ proj.linkLabel }}
        </project-tag>
      </div>
      <div class="p-3">
        <img
          class="max-h-[250px] max-w-full rounded object-cover"
          :src="resolvedImg"
          oncontextmenu="return false;"
        />
        <div class="grid grid-cols-2">
          <div class="p-3">
            <project-tag :is-type="true">{{ proj.type }}</project-tag>
          </div>
          <div class="p-3">
            <project-tag v-if="proj.isWIP" :is-wip="proj.isWIP">WIP</project-tag>
          </div>
        </div>
        <div class="p-2" v-for="tool in proj.toolsUsed" :key="tool">
          <project-tag>{{ tool }}</project-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColoredText from './ColoredText.vue'
import ProjectTag from './ProjectTag.vue'

export default {
  name: 'ProjectBox',
  components: {
    ColoredText,
    ProjectTag,
  },
  props: {
    proj: {
      type: Object,
      default: () => ({
        name: 'testName',
        desc: 'long ass description',
        imgPath: '',
        type: 'testType',
        isWIP: true,
        toolsUsed: ['Tool1', 'Tool2'],
      }),
    },
  },
  computed: {
    resolvedImg() {
      return this.proj.imgPath
        ? new URL(`../assets/project_previews/${this.proj.imgPath}`, import.meta.url).href
        : new URL('../assets/placeholder.png', import.meta.url).href
    },
    hasLink() {
      return this.proj.externalLink ? true : false
    },
  },
}
</script>
