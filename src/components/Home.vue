<template>
  <div class="home-component m-5 px-5 container">
    <div class="row align-items-center">
      <div class="brief-intro col-md-8 d-flex flex-column align-items-start">
        <!-- flex-column changes flex direction to vertical -->
        <colored-text>Hey there! I'm</colored-text>
        <colored-text colorType="tealType" size="3vw" weight="bold">Verna Beltran Salangsang</colored-text>
        <div class="d-flex flex-row ml-auto">
          <colored-text>I'm a&nbsp;</colored-text>
          <Typer
            :text="[
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
              fontSize: '1.8vw',
            }"
          />
        </div>
      </div>
      <div class="image-intro col-md-4 d-flex align-items-center">
        <img
          src="../assets/profile.png"
          class="img-fluid m-2"
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
      // note to self: figure out a way to use the variables/values from the scss file
      // instead of duplicating the values
      secondaryColor: '#ca6702',
      primaryText: '#e9d8a6',
    }
  },
}
</script>
