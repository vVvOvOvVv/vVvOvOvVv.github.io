<template>
  <div class="mx-auto my-5 w-full max-w-6xl px-5">
    <div class="flex flex-col items-center md:flex-row">
      <div class="flex flex-col items-start md:w-2/3">
        <!-- flex-column changes flex direction to vertical -->
        <colored-text>Hey there! I'm</colored-text>
        <colored-text colorType="tealType" size="3vw" weight="bold">Verna Beltran Salangsang</colored-text>
        <div class="ml-auto flex flex-row">
          <colored-text>I'm a&nbsp;</colored-text>
          <Typer
            :text="[
              'systems developer',
              'game developer',
              'digital artist',
              'software developer',
              'volunteer game & system tester',
              'video game enthusiast',
              'gym rat',
            ]"
            :style="{
              '--char-typed-color': secondaryColor,
              '--caret-idle-color': secondaryColor,
              '--caret-typing-color': secondaryColor,
              '--caret-selecting-color': secondaryColor,
              '--caret-erasing-color': secondaryColor,
              '--caret-complete-color': secondaryColor,
              '--char-selected-color': primaryText,
              '--char-selected-background-color': secondaryColor,
              fontSize: '16px',
            }"
          />
        </div>
      </div>
      <div class="flex items-center md:w-1/3">
        <img
          src="../assets/profile.png"
          class="m-2 h-auto max-w-full"
          alt="Me! ...and my profile picture"
          width="80%"
          oncontextmenu="return false;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ColoredText from './ColoredText.vue'
import { Typer } from 'vue3-typer'
import 'vue3-typer/dist/vue-typer.css'

export default {
  name: 'HomeComponent',
  components: {
    ColoredText,
    Typer,
  },
  data() {
    return {
      secondaryColor: 'var(--color-secondary)',
      primaryText: 'var(--color-primary-text)',
    }
  },
}
</script>
