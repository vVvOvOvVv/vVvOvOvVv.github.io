<template>
  <header class="header-bar sticky top-0 z-10 w-full h-fit px-12 py-4">
    <div class="grid grid-cols-[20%_80%] items-center">
      <a class="title-text text-left w-fit" href="#home">V.DEV</a>
      <div class="flex items-center justify-end gap-4">
        <nav class="nav-bar flex items-center justify-end gap-4" aria-label="Page sections">
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
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3.5" />
              <path
                d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
              />
            </svg>
          </span>
          <span
            class="theme-toggle-option"
            :class="{ 'theme-toggle-option-active': isDarkMode }"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.2 15.6A8.5 8.5 0 0 1 8.4 3.8 8.5 8.5 0 1 0 20.2 15.6Z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderBar',
  components: {  },
  data() {
    return {
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
