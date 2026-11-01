<template>
  <div id="socials" :class="`social-section ${className}`">
    <div class="social-section-heading">
      <SectionHeader title="Socials" />
      <button
        v-if="socialData.length"
        type="button"
        class="social-flip-all"
        :aria-pressed="anyCardsFlipped"
        @click="toggleAllCards"
      >
        <span aria-hidden="true">↻</span>
        {{ anyCardsFlipped ? 'Reset Cards' : 'Flip All' }}
      </button>
    </div>
    <div class="social-list">
      <SocialCard
        v-for="social in socialData"
        :key="social.name"
        :social="social"
        :flipped="flippedCards[social.name] ?? false"
        @update:flipped="setCardFlipped(social.name, $event)"
      />
    </div>
  </div>
</template>

<script>
import SectionHeader from '../SectionHeader.vue'
import SocialCard from '../cards/SocialCard.vue'

export default {
  name: 'SocialSection',
  components: {
    SectionHeader,
    SocialCard,
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    socialData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      flippedCards: {},
    }
  },
  computed: {
    anyCardsFlipped() {
      return this.socialData.some((social) => this.flippedCards[social.name] === true)
    },
  },
  methods: {
    setCardFlipped(name, flipped) {
      this.flippedCards[name] = flipped
    },
    toggleAllCards() {
      const flipped = !this.anyCardsFlipped
      this.socialData.forEach((social) => {
        this.flippedCards[social.name] = flipped
      })
    },
  },
}
</script>
