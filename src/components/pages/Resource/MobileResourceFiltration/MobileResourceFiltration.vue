<template>
  <div class="mobile-resource-filtration">
    <h5 class="mobile-resource-filtration__heading">
      {{ heading }}
    </h5>
    <ul class="mobile-resource-filtration__list">
      <li
        class="mobile-resource-filtration__item"
        v-for="item in data"
        :key="item.heading"
        :id="`${heading}-${item.name}`"
      >
        <button
          class="mobile-resource-filtration__button"
          :class="[
            item.name === value ? 'mobile-resource-filtration__button--active' : '',
          ]"
          @click="handleClick(item)"
        >
          {{ item.heading }}
        </button>
      </li>
      <div
        class="mobile-resource-filtration__active-line"
        :style="{
          width: `${activeLineWidth}px`,
          transform: `translate(${activeLineOffset}px, 0)`
        }"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MobileResourceFiltration',
  props: {
    value: {
      type: [Number, String, Object],
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    heading: {
      type: [String, Number],
      required: false,
    },
  },
  data: () => ({
    activeFiltration: '',
    activeLineWidth: 0,
    activeLineHeight: 0,
    activeLineOffset: 0,
  }),
  watch: {
    value() {
      this.$emit('change', this.activeFiltration);
    },
  },
  methods: {
    handleClick(payload) {
      this.setTab(payload.name);
    },

    moveActiveLine(payload) {
      const element = document.querySelector(`#${this.heading}-${payload}`);

      this.activeLineWidth = element.clientWidth;
      this.activeLineOffset = element.offsetLeft;
    },
    setTab(payload) {
      this.$emit('input', payload);
      this.moveActiveLine(payload);
    },
  },
  mounted() {
    this.moveActiveLine(this.value);
  },
};
</script>

<style lang="sass" src="./MobileResourceFiltration.sass" />
