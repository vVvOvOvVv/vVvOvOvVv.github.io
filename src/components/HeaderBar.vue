<template>
  <header class="header-bar sticky top-0 z-10 w-full h-fit px-12 py-4">
    <div class="grid grid-cols-[40%_60%] items-center">
      <div class="title-text text-left">
        V.DEV
      </div>
      <div class="nav-bar grid grid-cols-auto items-center justify-center">
        test!
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
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
  },
}
</script>
