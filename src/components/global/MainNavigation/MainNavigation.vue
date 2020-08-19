<template>
  <nav
    class="main-navigation"
    :class="[
      !showNavbar ? 'main-navigation--hidden' : false,
      hasScrolled ? 'main-navigation--scrolled' : false,
    ]"
  >
    <div class="main-navigation__container container container--big">
      <div class="main-navigation__branding">
        <base-logo />
      </div>
      <div class="main-navigation__navbar">
        <main-navbar />
      </div>
      <div class="main-navigation__spacer"></div>
      <div class="main-navigation__action">
        <div class="action">
          <div class="action__item">
            <base-button
              size="small"
              type="outline"
              title="Get started for free"
              mode="light"
            >
              Get started for free
            </base-button>
          </div>
          <div class="action__item">
            <base-button
              size="small"
              type="outline"
              title="Sign in"
              mode="light"
            >
              Sign in
            </base-button>
          </div>
        </div>
      </div>
      <button
        class="navigation__hamburger"
        :class="{'navigation__hamburger--active' : isMenuOpen}"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-label="Open Menu"
        aria-controls="menu"
        title="Open Menu"
        @click="toggleMenu()"
      >
        <transition name="fade">
          <span class="navigation__hamburger-text" :key="isMenuOpen">
            {{ isMenuOpen ? 'Close' : 'Menu' }}
          </span>
        </transition>
        <span class="navigation__hamburger-box">
          <span class="navigation__hamburger-line"></span>
        </span>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MainNavigation',
  data: () => ({
    showNavbar: true,
    lastScrollPosition: 0,
    currentScrollPosition: 0,
    hasScrolled: false,

  }),
  computed: {
    ...mapState({
      isMenuOpen: state => state.mobileMenu,
      canShow: state => state.navigationScrollBehavior,
    }),
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('toggleMenu');
    },
    onScroll () {
      this.currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (this.currentScrollPosition < 0) {
        return;
      }

      if (Math.abs(this.currentScrollPosition - this.lastScrollPosition) < 101) {
        return;
      }

      if (this.isMenuOpen) {
        this.showNavbar = true;
      }

      if (!this.canShow) {
        return;
      }

      this.currentScrollPosition >= 100 ? this.hasScrolled = true : this.hasScrolled = false;
      this.showNavbar = this.currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = this.currentScrollPosition;
    },
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
};
</script>

<style lang="sass" src="./MainNavigation.sass" />
