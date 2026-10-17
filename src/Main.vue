<template>
  <div>
    <br id="home" />
    <header-bar />
    <br />
    <br />
    <div class="home mx-auto w-full max-w-6xl px-3">
      <home-component />
    </div>
    <div id="work" class="work mx-auto w-full max-w-6xl px-3">
      <section-header>Work & Experience</section-header>
      <div class="work-list flex flex-col items-center">
        <work-experience v-for="(job, idx) in workExpData" :key="idx" :work-obj="job" />
      </div>
    </div>
    <div id="project" class="project mx-auto w-full max-w-6xl px-3">
      <section-header>Projects</section-header>
      <div class="project-list">
        <project-table :project-data="projData" />
      </div>
    </div>
    <div id="skill" class="skill mx-auto w-full max-w-6xl px-3">
      <section-header>Skills & Tools</section-header>
      <div class="skill-cat-list">
        <skills-sub-section
          subsection-name="Programming Languages"
          :skill-array="programmingLangData"
        />
        <skills-sub-section subsection-name="Art & Design" :skill-array="artDesignData" />
        <skills-sub-section subsection-name="Development Tools" :skill-array="toolsData" />
      </div>
    </div>
    <div id="about" class="about mx-auto w-full max-w-6xl px-3">
      <section-header>About Me</section-header>
      <div class="about-desc">
        <colored-text class="m-5"> {{ aboutData }} </colored-text>
      </div>
    </div>
    <div class="socials mx-auto mb-5 w-full max-w-6xl px-3">
      <skills-sub-section subsection-name="Where you can find me" :skill-array="socialData" />
    </div>
  </div>
  <footer-bar />
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import HomeComponent from './components/Home.vue'
import SectionHeader from './components/SectionHeader.vue'
import WorkExperience from './components/WorkExperience.vue'
import ProjectTable from './components/ProjectTable.vue'
import SkillsSubSection from './components/SkillsSubSection.vue'
import ColoredText from './components/ColoredText.vue'
import FooterBar from './components/FooterBar.vue'

import jsonData from './assets/data.json'

export default {
  name: 'MainComponent',
  components: {
    HeaderBar,
    HomeComponent,
    SectionHeader,
    WorkExperience,
    ProjectTable,
    SkillsSubSection,
    ColoredText,
    FooterBar,
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
