<template>
  <div :class="`home-component w-full h-100 ${className}`">
    <div class="relative grid h-full min-h-0 grid-cols-[60%_40%]">
      <div class="relative z-10 flex flex-col justify-end gap-4">
        <div class="flex flex-col gap-4">
          <div class="text-left">
            Hey there! I'm
          </div>
          <div class="name-text whitespace-nowrap">
            VERNA B. SALANGSANG
          </div>
        </div>
        <div class="text-2xl">
          I'm a
          <Typer
            :text="[
              'systems developer',
              'software developer',
              'game developer',
              'digital artist',
              'volunteer game & systems tester',
              'video game enthusiast',
              'MTG enjoyer',
              'gym rat',
            ]"
            :style="{
              '--char-typed-color': blue,
              '--caret-idle-color': blue,
              '--caret-typing-color': blue,
              '--caret-selecting-color': blue,
              '--caret-erasing-color': blue,
              '--caret-complete-color': blue,
              '--char-selected-color': white,
              '--char-selected-background-color': orange,
            }"
          />.
        </div>
      </div>
      <div class="image-outline min-h-0 overflow-hidden">
        <img
          src="../assets/images/profile.jpg"
          alt="Profile Picture"
          class="h-full w-full rounded-md object-cover pointer-events-none"
        />
      </div>
    </div>


  </div>
</template>

<script>
import { Typer } from 'vue3-typer'
import 'vue3-typer/dist/vue-typer.css'

export default {
  name: 'HomeComponent',
  components: {
    Typer,
  },
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      blue: '#465C88',
      orange: '#FF7A30',
      white: '#FFFFFF',
    }
  },
}
</script>
