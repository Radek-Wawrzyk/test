<template>
  <nav class="mobile-tabs">
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
          {{ index + 1}}
        </button>
      </li>
    </ul>
    <transition name="fade" mode="out-in">
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
