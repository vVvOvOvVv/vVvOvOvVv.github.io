<template>
  <div class="">
    <br />
    <header-bar />
    <br />
    <br />
    <home-component />
    <work-experience />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import HomeComponent from './components/Home.vue'
import WorkExperience from './components/WorkExperience.vue'

import jsonData from './assets/data.json'

export default {
  name: 'App',
  components: {
    HeaderBar,
    HomeComponent,
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
