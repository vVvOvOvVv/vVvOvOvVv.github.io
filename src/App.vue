<template>
  <div class="">
    <br />
    <header-bar />
    <br />
    <br />
    <div class="home container">
      <home-component />
    </div>
    <div class="work container">
      <section-header>Work & Experience</section-header>
      <div class="work-list container d-flex flex-column align-items-center">
        <work-experience />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import HomeComponent from './components/Home.vue'
import SectionHeader from './components/SectionHeader.vue'
import WorkExperience from './components/WorkExperience.vue'

// import jsonData from './assets/data.json'

export default {
  name: 'App',
  components: {
    HeaderBar,
    HomeComponent,
    SectionHeader,
    WorkExperience,
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
</style>
