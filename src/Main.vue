<template>
  <div class="flex min-h-screen flex-col">
    <header-bar />
    <HomeComponent className="px-40 pt-12" />
    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import HomeComponent from './components/Home.vue'
import FooterBar from './components/FooterBar.vue'

import jsonData from './assets/data.json'

export default {
  name: 'MainComponent',
  components: {
    HeaderBar,
    HomeComponent,
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
