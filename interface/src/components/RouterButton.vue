<template>
  <div>
    <RouterLink
      :class="{ 'page-btn': isPageName, 'directory-btn': !isPageName }"
      class="fw-bold"
      :to="{ name: routeName }"
      >{{ msg }}</RouterLink
    >
  </div>
</template>

<script>
export default {
  name: 'RouterButton',
  props: {
    routeName: {
      type: String,
      default: 'home',
    },
    msg: {
      type: String,
      default: 'vVvOvOvVv.github.io',
    },
    isPageName: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style>
.page-btn {
  background: linear-gradient(90deg, #0bbbbe, #0b7ae2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.directory-btn {
  color: #e9d8a6;
}
</style>
