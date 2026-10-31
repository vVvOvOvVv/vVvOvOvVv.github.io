<template>
  <div id="home" class="flex min-h-screen flex-col">
    <header-bar />
    <HomeComponent className="px-40 pt-12" />
    <div class="px-30 py-12">
      <ExperienceSection
        className="mb-12"
        :workExpData="workExpData"
      />
      <ProjectsSection
        className="mb-12"
        :projData="projData"
      />
      <SkillsToolsSection
        className=""
        :programmingLangData="programmingLangData"
        :artDesignData="artDesignData"
        :devToolsData="toolsData"
      />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import HomeComponent from './components/Home.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import SkillsToolsSection from './components/sections/SkillsToolsSection.vue';
import FooterBar from './components/FooterBar.vue'

import jsonData from './assets/data.json'

export default {
  name: 'MainComponent',
  components: {
    HeaderBar,
    HomeComponent,
    ExperienceSection,
    ProjectsSection,
    SkillsToolsSection,
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
