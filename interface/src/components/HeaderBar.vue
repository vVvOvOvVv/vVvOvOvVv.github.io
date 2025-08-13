<template>
  <div class="header-bar container rounded p-2 pb-1 px-4">
    <router-button />
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

<style>
.header-bar {
  position: fixed;
  top: 5;
  left: 0;
  right: 0;
  z-index: 1030; /* high enough to be above other content */
  background-color: rgba(10, 148, 150, 0.5);
}
</style>
