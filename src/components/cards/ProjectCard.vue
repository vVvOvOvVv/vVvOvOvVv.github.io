<template>
  <article v-reveal :class="`project-card p-4 ${className}`">
    <div
      class="grid grid-cols-1 items-center gap-4"
      :class="index % 2 === 0 ? 'grid-cols-[40fr_60fr]' : 'grid-cols-[60fr_40fr]'"
    >
      <img
        :src="resolvedImage"
        :alt="proj.name"
        :class="{ 'md:order-2': index % 2 !== 0 }"
        class="project-image w-full object-cover"
      />
      <div :class="{ 'md:order-1': index % 2 !== 0 }">
        <div class="project-title mb-2">{{ proj.name }}</div>
        <ProjectTag :category="proj.category" class="mb-2 mr-2" />
        <ProjectTag v-if="proj.isWIP" :isWIP="true" />
        <p class="project-description whitespace-pre-line text-sm mb-2">
          {{ proj.desc }}
        </p>
        <div v-if="proj.links?.length" class="mb-2 flex flex-wrap gap-2">
          <a
            v-for="projectLink in proj.links"
            :key="projectLink.link"
            :href="projectLink.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
          >
            {{ projectLink.label }}
          </a>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <ProjectTag :isType="true">
            {{ proj.type }}
          </ProjectTag>
          <ProjectTag
            :isTool="true"
            v-for="tool in proj.toolsUsed"
            :key="tool"
          >
            {{ tool }}
          </ProjectTag>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import ProjectTag from '../tags/ProjectTag.vue'
import revealOnScroll from '../../directives/revealOnScroll.js'

export default {
  name: 'ProjectCard',
  directives: {
    reveal: revealOnScroll,
  },
  components: {
    ProjectTag,
  },
  props: {
    proj: {
      type: Object,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    resolvedImage() {
      return this.proj.imgPath
        ? new URL(`../../assets/images/project_previews/${this.proj.imgPath}`, import.meta.url).href
        : new URL('../../assets/images/placeholder.png', import.meta.url).href
    },
  },
}
</script>
