<template>
  <li
    class="base-tab-item"
    :class="[
      isActive ? 'base-tab-item--active' : false,
      mode === 'light' ? 'base-tab-item--light' : 'base-tab-item--dark',
      tabsLocation === 'top' ? 'base-tab-item--top' : 'base-tab-item--bottom',
    ]"
    :ref="name"
  >
    <button
      class="base-tab-item__button"
      @click="setTab()"
    >
      <slot></slot>
    </button>
  </li>
</template>

<script>
import { uuid } from '@/helpers/index.js';

export default {
  name: 'BaseTabItem',
  inject: ['tabs'],
  props: {
    name: {
      type: [String, Number],
      requred: true,
    },
  },
  methods: {
    setTab() {
      this.tabs.setTab(this.name);
    },
  },
  computed: {
    id() {
      return uuid();
    },
    mode() {
      return this.tabs.mode;
    },
    tabsLocation() {
      return this.tabs.tabsLocation;
    },
    isActive() {
      return this.tabs.value === this.name;
    },
  },
  created() {
    this.tabs.navigation.push(this.name);
  },
}
</script>

<style lang="sass" src="./BaseTabItem.sass" />
