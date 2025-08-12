<template>
  <div class="home-component mt-5">
    <div class="row">
      <div class="spacer col-md-2" />
      <div class="col-md-6 d-flex flex-column align-items-start">
        <!-- flex-column changes flex direction to vertical -->
        <colored-text>Hey there! I'm</colored-text>
        <colored-text color="#0a9396" size="5vw" weight="bold">
          Verna Beltran Salangsang
        </colored-text>
      </div>
      <div class="col-md-4 d-flex align-items-center">test 2</div>
    </div>
  </div>
</template>

<script>
import ColoredText from './ColoredText.vue'
export default {
  name: 'HomeComponent',
  components: {
    ColoredText,
  },
}
</script>

<style></style>
