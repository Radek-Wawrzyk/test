<template>
  <div class="main-navbar-item">
    <g-link
      :to="this.url"
      class="main-navbar-item__link"
      v-bind:class="{'main-navbar-item__link--no-menu': !this.menuItems.length}"
    >
      <div class="main-navbar-item__text">{{ this.label }}</div>
      <ChevronDownIcon
        v-if="this.menuItems.length"
        size="1.25x"
        class="main-navbar-item__icon"
      />
    </g-link>
    <div v-if="this.menuItems.length" class="main-navbar-item__menu">
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

export default {
  name: 'NavbarItem',
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
}
</script>

<style lang="sass" src="./MainNavbarItem.sass" />
