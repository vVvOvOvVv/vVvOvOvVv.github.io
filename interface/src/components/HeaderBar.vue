<template>
  <div class="header-bar container rounded m-4 p-2 pb-1 px-4">
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
  position: -webkit-sticky;
  position: sticky;
  background-color: rgba(10, 148, 150, 0.5);
}
</style>
