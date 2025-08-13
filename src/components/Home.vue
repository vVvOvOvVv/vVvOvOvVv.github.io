<template>
  <div class="home-component mt-5 mx-5 px-5 container">
    <div class="row">
      <div class="col-md-8 d-flex flex-column align-items-start">
        <!-- flex-column changes flex direction to vertical -->
        <colored-text>Hey there! I'm</colored-text>
        <colored-text color="#0a9396" size="45px" weight="bold">
          Verna Beltran Salangsang
        </colored-text>
        <Typer
          :text="[
            'a game developer',
            'a digital artist',
            'a software developer',
            'a volunteer game & system tester',
            'a video game enthusiast',
          ]"
          style="
            --char-typed-color: #ca6702;
            --caret-idle-color: #ca6702;
            --caret-typing-color: #ca6702;
            --caret-selecting-color: #ca6702;
            --caret-erasing-color: #ca6702;
            --caret-complete-color: #ca6702;
            --char-selected-color: white;
            --char-selected-background-color: #ca6702;
          "
        ></Typer>
      </div>
      <div class="col-md-4 d-flex align-items-center">test 2</div>
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
}
</script>

<style></style>
