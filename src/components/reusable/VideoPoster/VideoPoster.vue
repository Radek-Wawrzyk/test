<template>
  <section class="video-poster">
    <div class="video-poster__inner" @click="playVideo()">
      <button
        class="video-poster__button"
        title="Play video"
        aria-label="Play video"
      >
        <g-image
          class="video-poster__button-icon"
          alt=""
          src="@/assets/icons/video-arrow.svg"
        />
      </button>
      <g-image
        class="video-poster__img"
        alt=""
        :src="poster"
      />
    </div>
    <p class="video-poster__text" v-if="text">
      {{ text }}
    </p>
  </section>
</template>

<script>

export default {
  name: 'VideoPoster',
  props: {
    poster: {
      type: String,
      required: false,
      default: null,
    },
    video: {
      type: String,
      required: true,
    },
    text: {
      type: [String, Number],
      required: false,
      default: null,
    },
  },
  methods: {
    playVideo() {
      this.$store.dispatch('toggleVideoModal');
      this.$store.dispatch('setVideoModalPath', this.video);
    },
  },
};
</script>

<style lang="sass" src="./VideoPoster.sass" />
