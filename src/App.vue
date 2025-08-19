<template>
  <div class="">
    <br id="home" />
    <header-bar />
    <br />
    <br />
    <div class="home container">
      <home-component />
    </div>
    <div id="work" class="work container">
      <section-header>Work & Experience</section-header>
      <div class="work-list container d-flex flex-column align-items-center">
        <work-experience v-for="(job, idx) in workExpData" :key="idx" :work-obj="job" />
      </div>
    </div>
    <div id="project" class="project container">
      <section-header>Projects</section-header>
      <div class="project-list container">
        <project-table :project-data="projData" />
      </div>
    </div>
    <div id="skill" class="skill container">
      <section-header>Skills & Tools</section-header>
      <div class="skill-cat-list container">
        <skills-sub-section
          subsection-name="Programming Languages"
          :skill-array="programmingLangData"
        />
        <skills-sub-section subsection-name="Art & Design" :skill-array="artDesignData" />
        <skills-sub-section subsection-name="Development Tools" :skill-array="toolsData" />
      </div>
    </div>
    <div id="about" class="about container">
      <section-header>About Me</section-header>
      <div class="about-desc container">
        <colored-text class="m-5"> {{ aboutData }} </colored-text>
      </div>
    </div>
    <div class="socials container">
      <section-header :is-subheader="true">Where you can find me</section-header>
      <div class="social-list container d-flex flex-row">
        <link-box v-for="link in socialData" :key="link.name" :link="link" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import HomeComponent from './components/Home.vue'
import SectionHeader from './components/SectionHeader.vue'
import WorkExperience from './components/WorkExperience.vue'
import ProjectTable from './components/ProjectTable.vue'
import SkillsSubSection from './components/SkillsSubSection.vue'
import LinkBox from './components/LinkBox.vue'
import ColoredText from './components/ColoredText.vue'

import jsonData from './assets/data.json'

export default {
  name: 'App',
  components: {
    HeaderBar,
    HomeComponent,
    SectionHeader,
    WorkExperience,
    ProjectTable,
    SkillsSubSection,
    LinkBox,
    ColoredText,
  },
  data() {
    return {
      workExpData: jsonData.workAndExperience,
      projData: jsonData.projects,
      programmingLangData: jsonData.skills.programmingLang,
      artDesignData: jsonData.skills.artAndDesign,
      toolsData: jsonData.skills.devTools,
      aboutData: jsonData.aboutMe,
      socialData: jsonData.socials,
    }
  },
}
</script>

<style lang="scss">
@use '@/assets/custom.scss' as *;

/* to encompass the entire page */
html,
#app {
  background-color: $background-color;
  font-size: 20px;
}
a {
  text-decoration: none !important;
}
</style>
