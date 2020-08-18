<template>
  <fragment>
    <transition name="fade">
      <main-mobile-menu v-if="isMenuOpen" />
    </transition>
    <transition name="fade">
      <video-modal v-if="isVideoOpen" />
    </transition>
    <main-navigation />
    <slot/>
    <main-footer />
  </fragment>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapState({
      isMenuOpen: state => state.mobileMenu,
      isVideoOpen: state => state.videoModal,
    }),
  },
  watch: {
    isMenuOpen() {
      this.disableScroll();
    },
    isVideoOpen() {
      this.disableScroll();
    },
  },
  methods: {
    disableScroll() {
      const body = document.querySelector('body');

      if (this.isMenuOpen || this.isVideoOpen) {
        body.classList.add('no-scroll');
      } else {
        setTimeout(() => {
          body.classList.remove('no-scroll');
        }, 300);
      }
    },
  },
};
</script>
