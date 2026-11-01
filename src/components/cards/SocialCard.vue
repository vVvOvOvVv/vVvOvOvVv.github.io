<template>
  <article :class="['social-card', { 'social-card-flipped': flipped }, className]">
    <div class="social-card-inner">
      <button
        type="button"
        class="social-card-face social-card-front"
        :aria-label="`Show details for ${social.name}`"
        :aria-expanded="flipped"
        :inert="flipped"
        @click="toggleCard"
      >
        <div class="social-card-front-top">
          <img
            v-if="resolvedImage"
            :src="resolvedImage"
            :alt="`${social.name} icon`"
            class="social-card-image"
          />
          <span v-else class="social-card-image social-card-image-fallback">
            {{ social.name?.charAt(0) }}
          </span>
          <span class="social-card-badge">
            {{ social.type || 'Social' }}
          </span>
        </div>

        <div class="social-card-front-copy">
          <h3>{{ social.name }}</h3>
          <p v-if="social.handle" class="social-card-handle">{{ social.handle }}</p>
        </div>

        <div class="social-card-footer">
          <span>Inspect Details</span>
          <span>Flip Card <span aria-hidden="true">→</span></span>
        </div>
      </button>

      <div
        class="social-card-face social-card-back"
        :aria-hidden="!flipped"
        :inert="!flipped"
      >
        <header class="social-card-back-header">
          <div class="social-card-back-identity">
            <img
              v-if="resolvedImage"
              :src="resolvedImage"
              alt=""
              class="social-card-back-image"
            />
            <span class="social-card-back-name">{{ social.name }}</span>
          </div>
          <div class="social-card-back-actions">
            <span v-if="social.handle" class="social-card-handle">
              {{ social.handle }}
            </span>
            <button
              type="button"
              class="social-card-flip-back"
              :aria-label="`Flip ${social.name} card back`"
              @click="toggleCard"
            >
              ↻
            </button>
          </div>
        </header>

        <p v-if="description" class="social-card-description">
          {{ description }}
        </p>

        <div class="social-card-actions">
          <button
            v-if="social.handle"
            type="button"
            class="social-card-action social-card-copy"
            @click="copyHandle"
          >
            {{ copyFeedback || 'Copy Handle' }}
          </button>
          <a
            v-if="social.refLink"
            :href="social.refLink"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card-action social-card-link"
          >
            Visit {{ social.name }}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'SocialCard',
  props: {
    social: {
      type: Object,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    flipped: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:flipped'],
  data() {
    return {
      copyFeedback: '',
    }
  },
  computed: {
    description() {
      return this.social.description || this.social.desc || ''
    },
    resolvedImage() {
      return this.social.imgPath
        ? new URL(`../../assets/images/icons/${this.social.imgPath}`, import.meta.url).href
        : ''
    },
  },
  methods: {
    toggleCard() {
      this.$emit('update:flipped', !this.flipped)
      this.copyFeedback = ''
    },
    async copyHandle() {
      try {
        await navigator.clipboard.writeText(this.social.handle)
        this.copyFeedback = 'Copied!'
      } catch {
        this.copyFeedback = 'Copy unavailable'
      }
    },
  },
}
</script>
