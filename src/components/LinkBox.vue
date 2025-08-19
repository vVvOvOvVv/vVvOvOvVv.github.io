<template>
  <a :href="resolvedLink" target="_blank" rel="noopener noreferrer">
    <div
      class="link-box mb-2 mx-2 p-2 rounded-4 d-flex flex-column align-items-center justify-content-center"
    >
      <img class="link-img" :src="resolvedImg" :alt="link.name" width="50px" />
    </div>
  </a>
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
        refLink: '',
      }),
    },
  },
  computed: {
    resolvedImg() {
      return this.link.imgPath
        ? new URL(`../assets/icons/${this.link.imgPath}`, import.meta.url).href
        : new URL('../assets/placeholder.png', import.meta.url).href
    },
    resolvedLink() {
      return this.link.refLink
        ? this.link.refLink
        : 'https://media.tenor.com/0EDznml5BDAAAAAj/cat-spinning.gif'
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/custom.scss' as *;

.link-box {
  background-color: $primary-color;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
