<template>
  <div class="skills-subsection">
    <section-header :is-subheader="true"> {{ subsectionName }} </section-header>
    <div class="skill-list d-flex flex-row flex-wrap">
      <link-box v-for="skill in skillArray" :key="skill.name" :link="skill" />
    </div>
  </div>
</template>

<script>
import SectionHeader from './SectionHeader.vue'
import LinkBox from './LinkBox.vue'

export default {
  name: 'SkillsSubsection',
  components: {
    SectionHeader,
    LinkBox,
  },
  props: {
    subsectionName: {
      type: String,
      default: 'Skillset',
    },
    skillArray: {
      type: Array,
      default: () => [
        {
          name: 'skill name',
          imgPath: '',
          refLink: '',
        },
      ],
    },
  },
}
</script>
