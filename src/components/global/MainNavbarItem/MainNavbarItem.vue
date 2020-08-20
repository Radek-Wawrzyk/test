<template>
  <div class="main-navbar-item">
    <g-link
      :to="this.url"
      class="main-navbar-item__link"
      :class="{'main-navbar-item__link--no-menu': !this.menuItems.length}"
      @mouseleave.native="hideMenu()"
      @mouseenter.native="setMenu()"
    >
      <div class="main-navbar-item__text">
        {{ this.label }}
      </div>
      <ChevronDownIcon
        v-if="this.menuItems.length"
        size="1.25x"
        class="main-navbar-item__icon"
      />
    </g-link>
    <div
      v-if="this.menuItems.length"
      class="main-navbar-item__menu"

    >
      <g-link
        v-for="menuItem in this.menuItems"
        :key="menuItem.label"
        :to="menuItem.url"
        class="main-navbar-item__sublink"
      >
        {{ menuItem.label }}
      </g-link>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons'
import { mapState } from 'vuex';

export default {
  name: 'NavbarItem',
  data: () => ({
    subMenuStatus: false,
  }),
  props: {
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    menuItems: {
      type: Array,
    },
  },
  components: {
    ChevronDownIcon,
  },
  methods: {
    hideMenu() {
      this.subMenuStatus = false;
    },
    setMenu() {
      if (this.menuItems.length) {
        this.subMenuStatus = true;
      }
    },
  },
  computed: {
    ...mapState({
      isMenuOpen: state => state.mobileMenu,
      canShow: state => state.navigationScrollBehavior,
    }),
  },
};
</script>

<style lang="sass" src="./MainNavbarItem.sass" />
