<template>
  <div class="header-bar container rounded p-2 pb-1 px-4 d-flex flex-row">
    <div class="align-items-start"><router-button target-id="home" /></div>

    <!-- sections -->
    <div class="ms-auto d-flex flex-row gap-3">
      <router-button msg="Work & Experience" :is-page-name="false" target-id="work" />
      <router-button msg="Projects" :is-page-name="false" target-id="project" />
      <router-button msg="Skills" :is-page-name="false" target-id="skill" />
      <router-button msg="About Me" :is-page-name="false" target-id="about" />
    </div>
  </div>
</template>

<script>
import RouterButton from './RouterButton.vue'

export default {
  name: 'HeaderBar',
  components: {
    RouterButton,
  },
}
</script>

<style lang="scss">
@use '@/assets/custom.scss' as *;

.header-bar {
  position: fixed;
  top: 5;
  left: 0;
  right: 0;
  z-index: 1030; /* high enough to be above other content */
  background-color: $transparent-primary-color;
}
</style>
