<template>
  <div class="">
    <HeaderBar />
    <HomeComponent />
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

<style>
/* to encompass the entire page */
html,
#app {
  background-color: #000d13;
}
</style>
