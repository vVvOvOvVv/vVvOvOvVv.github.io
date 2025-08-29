<template>
  <div>
    <button v-if="isPageName" class="page-btn fw-bold" @click="goToSection">{{ msg }}</button>
    <button v-else class="directory-btn fw-bold" @click="goToSection">{{ msg }}</button>
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
    targetId: {
      type: String,
      default: '',
    },
  },
  methods: {
    goToSection() {
      if (this.targetId.length == 0) return
      const el = document.getElementById(this.targetId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      else console.error(this.targetId + ' could not be found')
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/custom.scss' as *;

.page-btn {
  background: linear-gradient(90deg, $gradient-start, $gradient-end);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 2vw;

  &:hover {
    transform: scale(1.05);
  }
}
.directory-btn {
  color: $primary-text;
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 2vw;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
