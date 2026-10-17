<template>
  <a :href="resolvedLink" target="_blank" rel="noopener noreferrer">
    <div
      class="mb-2 mx-2 flex flex-col items-center justify-center rounded-2xl bg-primary p-2 transition-transform hover:scale-105"
    >
      <img :src="resolvedImg" :alt="link.name" width="50" />
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
