<template>
  <div
    class="fixed left-0 right-0 top-[5px] z-[1030] mx-auto flex w-full max-w-6xl flex-row rounded bg-primary/60 px-4 pb-1 pt-2"
  >
    <!-- logo / home button -->
    <div class="items-start">
      <router-button target-id="home" />
    </div>

    <!-- desktop section buttons -->
    <div class="ml-auto hidden flex-row gap-3 md:flex">
      <router-button msg="Work & Experience" :is-page-name="false" target-id="work" />
      <router-button msg="Projects" :is-page-name="false" target-id="project" />
      <router-button msg="Skills" :is-page-name="false" target-id="skill" />
      <router-button msg="About Me" :is-page-name="false" target-id="about" />
    </div>

    <!-- mobile menu button -->
    <button class="ml-auto rounded border-0 bg-transparent md:hidden" @click="toggleSidebar">
      <colored-text size="24px" weight="bold">
      ☰
      </colored-text>
    </button>

    <!-- sidebar -->
    <transition
      enter-active-class="transition-transform duration-300 ease-out"
      leave-active-class="transition-transform duration-300 ease-in"
      enter-from-class="translate-x-full"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="sidebarOpen"
        class="fixed right-0 top-0 z-[2000] flex h-full w-60 flex-col items-start gap-4 bg-primary/60 p-4 shadow-lg"
      >
        <button
          class="self-end border-0 bg-transparent text-2xl"
          @click="toggleSidebar"
        >
          <colored-text>✕</colored-text>
        </button>
        <router-button
          msg="Work & Experience"
          :is-page-name="false"
          :full-width="true"
          target-id="work"
          @click="toggleSidebar"
        />
        <router-button
          msg="Projects"
          :is-page-name="false"
          :full-width="true"
          target-id="project"
          @click="toggleSidebar"
        />
        <router-button
          msg="Skills"
          :is-page-name="false"
          :full-width="true"
          target-id="skill"
          @click="toggleSidebar"
        />
        <router-button
          msg="About Me"
          :is-page-name="false"
          :full-width="true"
          target-id="about"
          @click="toggleSidebar"
        />
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
