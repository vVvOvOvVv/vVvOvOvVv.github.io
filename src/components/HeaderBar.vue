<template>
  <div class="header-bar container rounded p-2 pb-1 px-4 d-flex flex-row">
    <!-- logo / home button -->
    <div class="align-items-start">
      <router-button target-id="home" />
    </div>

    <!-- desktop section buttons -->
    <div class="ms-auto d-none d-md-flex flex-row gap-3">
      <router-button msg="Work & Experience" :is-page-name="false" target-id="work" />
      <router-button msg="Projects" :is-page-name="false" target-id="project" />
      <router-button msg="Skills" :is-page-name="false" target-id="skill" />
      <router-button msg="About Me" :is-page-name="false" target-id="about" />
    </div>

    <!-- mobile menu button -->
    <button class="ms-auto d-md-none btn" @click="toggleSidebar">
      <colored-text size="2vw" weight="bold">
      ☰
      </colored-text>
    </button>

    <!-- sidebar -->
    <transition name="slide">
      <div v-if="sidebarOpen" class="sidebar">
        <button class="close-btn" @click="toggleSidebar">✕</button>
        <router-button msg="Work & Experience" :is-page-name="false" target-id="work" @click="toggleSidebar" />
        <router-button msg="Projects" :is-page-name="false" target-id="project" @click="toggleSidebar" />
        <router-button msg="Skills" :is-page-name="false" target-id="skill" @click="toggleSidebar" />
        <router-button msg="About Me" :is-page-name="false" target-id="about" @click="toggleSidebar" />
      </div>
    </transition>
  </div>
</template>

<script>
import ColoredText from './ColoredText.vue';
import RouterButton from './RouterButton.vue'

export default {
  name: 'HeaderBar',
  components: { RouterButton, ColoredText },
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

<style lang="scss" scoped>
@use '@/assets/custom.scss' as *;

.header-bar {
  position: fixed;
  top: 5px;
  left: 0;
  right: 0;
  z-index: 1030;
  background-color: $transparent-primary-color;
}

/* sidebar */
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 240px;
  height: 100%;
  background-color: $transparent-primary-color;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 2000;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
}

.close-btn {
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* sidebar slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
