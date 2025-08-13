<template>
  <div class="">
    <br />
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

// test
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
