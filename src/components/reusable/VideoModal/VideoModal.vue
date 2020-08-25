<template>
  <section class="video-modal" @click.self="closeVideoModal()">
    <video
      width="320"
      height="240"
      controls
      autoplay
      class="video-modal__inner"
    >
      <source :src="getVideoModalPath" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <button class="video-modal__exit">
      <img
        class="video-modal__exit-inner"
        alt=""
        src="@/assets/icons/exit.svg"
        @click="closeVideoModal()"
      />
    </button>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'VideoModal',
  methods: {
    closeVideoModal() {
      this.$store.dispatch('toggleVideoModal');
      this.$store.dispatch('setVideoModalPath', '');
    },
  },
  computed: {
    ...mapState({
      isVideoOpen: state => state.videoModal,
    }),
    ...mapGetters({
      getVideoModalPath: 'getVideoModalPath'
    })
  },
  mounted() {
    document.addEventListener('keydown', (event) => {
      this.isVideoOpen && event.keyCode === 27 ? this.closeVideoModal() : false;
    });
  },
};
</script>

<style lang="sass" src="./VideoModal.sass" />
