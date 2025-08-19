<template>
  <div
    class="link-box m-3 p-2 rounded-4 d-flex flex-column align-items-center justify-content-center"
  >
    <a :href="link.refLink"> <img class="link-img" :src="resolvedImg" width="70px" /></a>
  </div>
</template>

<script>
export default {
  name: 'LinkBox',
  props: {
    link: {
      type: Object,
      default: () => ({
        name: 'placeholder',
        imgPath: '',
        refLink: 'https://tenor.com/view/cat-rotating-rotating-cat-gif-27069837',
      }),
    },
  },
  computed: {
    resolvedImg() {
      return this.link.imgPath
        ? new URL(`../assets/icons/${this.link.imgPath}`, import.meta.url).href
        : new URL('../assets/placeholder.png', import.meta.url).href
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/custom.scss' as *;

.link-box {
  background-color: $primary-color;
}
</style>
