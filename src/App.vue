<template>
  <div class="">
    <br />
    <header-bar />
    <br />
    <br />
    <home-component />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import HomeComponent from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
    HomeComponent,
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
