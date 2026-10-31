<template>
  <header class="header-bar sticky top-0 z-10 w-full h-fit px-12 py-4">
    <div class="grid grid-cols-[20%_80%] items-center">
      <a class="title-text text-left w-fit" href="#home">V.DEV</a>
      <nav class="nav-bar flex items-center justify-end gap-4" aria-label="Page sections">
        <a class="nav-button" href="#work-experience">Work & Experience</a>
        <a class="nav-button" href="#projects">Projects</a>
        <a class="nav-button" href="#skills-tools">Skills & Tools</a>
      </nav>
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
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
  },
}
</script>
