<template>
  <header class="header-bar sticky top-0 w-full px-4 py-3 sm:px-6 lg:px-12 lg:py-4">
    <div class="header-layout">
      <a class="title-text" href="#home">V.DEV</a>
      <nav class="nav-bar" aria-label="Page sections">
        <a class="nav-button" href="#work-experience">Work & Experience</a>
        <a class="nav-button" href="#projects">Projects</a>
        <a class="nav-button" href="#skills-tools">Skills & Tools</a>
      </nav>
      <button
        class="theme-toggle"
        type="button"
        role="switch"
        :aria-label="`Color theme: ${isDarkMode ? 'dark' : 'light'}`"
        :aria-checked="isDarkMode"
        @click="toggleTheme"
      >
          <span
            class="theme-toggle-option"
            :class="{ 'theme-toggle-option-active': !isDarkMode }"
            aria-hidden="true"
          >
            <img :src="sunIcon" alt="" />
          </span>
          <span
            class="theme-toggle-option"
            :class="{ 'theme-toggle-option-active': isDarkMode }"
            aria-hidden="true"
          >
            <img :src="moonIcon" alt="" />
          </span>
      </button>
    </div>
  </header>
</template>

<script>
import moonIcon from '../assets/images/icons/moon.svg'
import sunIcon from '../assets/images/icons/sun.svg'

export default {
  name: 'HeaderBar',
  components: {  },
  data() {
    return {
      moonIcon,
      sunIcon,
      sidebarOpen: false,
      isDarkMode: false,
      systemTheme: null,
    }
  },
  mounted() {
    this.systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem('theme')
    this.isDarkMode = savedTheme
      ? savedTheme === 'dark'
      : this.systemTheme.matches
    this.applyTheme()
    this.systemTheme.addEventListener('change', this.onSystemThemeChange)
  },
  beforeUnmount() {
    this.systemTheme?.removeEventListener('change', this.onSystemThemeChange)
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light')
      this.applyTheme()
    },
    applyTheme() {
      document.documentElement.dataset.theme = this.isDarkMode ? 'dark' : 'light'
    },
    onSystemThemeChange(event) {
      if (localStorage.getItem('theme') === null) {
        this.isDarkMode = event.matches
        this.applyTheme()
      }
    },
  },
}
</script>
