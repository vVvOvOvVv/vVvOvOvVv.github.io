<template>
  <div>
    <button
      class="text-2xl font-bold transition-transform hover:scale-105"
      :class="buttonClasses"
      @click="goToSection"
    >
      {{ msg }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'RouterButton',
  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
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
  computed: {
    buttonClasses() {
      return {
        'bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent':
          this.isPageName,
        'bg-transparent text-primary-text': !this.isPageName,
        'w-full text-left pl-1': this.fullWidth,
      }
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
