<template>
  <nav class="mobile-tabs">

    <transition name="fade" mode="out-in">
      <div class="mobile-tabs__wrapper" :key="Math.random()">
        <span
          class="mobile-tabs__selected-label"
          :class="[
            labelColor === 'blue' ? 'mobile-tabs__selected-label--blue' : 'mobile-tabs__selected-label--green'
          ]"
          v-if="activeElement.label && showLabel"
        >
          {{ activeElement.label }}
        </span>
        <h4
          class="mobile-tabs__selected-name"
          v-if="activeElement"
          :key="activeElement.name"
          :class="[
            mode === 'dark' ? 'mobile-tabs__selected-name--dark' : '',
          ]"
        >
          {{ activeElement.heading }}
        </h4>
      </div>

    </transition>
    <div class="mobile-tabs__content">
      <slot name="content"></slot>
    </div>
    <transition name="fade" mode="out-in">
      <p
        class="mobile-tabs__selected-text"
        v-if="activeElement && activeElement.text"
        :key="Math.random()"
      >
        {{ activeElement.text }}
      </p>
    </transition>

    <ul class="mobile-tabs__list">
      <li
        class="mobile-tabs__item"
        v-for="(item, index) in data"
        :key="index"
      >
        <button
          class="mobile-tabs__item-button"
          :class="[
            value === item.name ? 'mobile-tabs__item-button--active' : '',
            mode === 'dark' ? 'mobile-tabs__item-button--dark' : '',
          ]"
          :aria-label="item.heading"
          :title="item.heading"
          @click="setTab(item.name)"
        >
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MobileTabs',
  props: {
    value: {
      type: [Number, String, Object],
      required: true,
    },
    mode: {
      type: String,
      required: false,
      default: 'light',
    },
    data: {
      type: Array,
      required: true,
    },
    showLabel: {
      type: Boolean,
      required: false,
      default: false,
    },
    labelColor: {
      type: String,
      required: false,
      default: 'blue',
    },
  },
  methods: {
    setTab(payload) {
      this.$emit('input', payload);
    },
  },
  computed: {
    activeElement() {
      return this.data.find(item => item.name === this.value);
    },
  },
};
</script>

<style lang="sass" src="./MobileTabs.sass" />
