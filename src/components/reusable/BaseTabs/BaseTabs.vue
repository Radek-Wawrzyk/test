<template>
  <div
    ref="tabs"
    class="base-tabs"
    :class="[
      direction === 'vertical' ? 'base-tabs--vertical' : '',
    ]"
  >
    <ul
      class="base-tabs__list"
      :style="[
        {
          'grid-template-columns' : `repeat(${columns}, 1fr`,
        },
        {
          'order': `${ firstElement === 'content' ? '1' : '-1'}`
        }
      ]"
      :class="[
        tabsLocation === 'top' ? 'base-tabs__list--top' : 'base-tabs__list--bottom',
        direction === 'vertical' ? 'base-tabs__list--vertical' : 'base-tabs__list--horizontal',
        directionLocation === 'left' && direction === 'vertical' ? 'base-tabs__list--vertical-left' : '',
        directionLocation === 'right' && direction === 'vertical' ? 'base-tabs__list--vertical-right' : '',
        mode === 'dark' ? 'base-tabs__list--dark' : '',
      ]"
    >
      <slot></slot>

      <div
        class="base-tabs__active-line"
        :class="[
          tabsLocation === 'top' ? 'base-tabs__active-line--top' : 'base-tabs__active-line--bottom',
          directionLocation === 'left' && direction === 'vertical' ? 'base-tabs__active-line--left' : '',
          directionLocation === 'right' && direction === 'vertical' ? 'base-tabs__active-line--right' : '',
          mode === 'dark' ? 'base-tabs__active-line--dark' : '',
        ]"
        :style="{
          width: `${direction === 'horizontal' ? activeLineWidth : 5}px`,
          height: `${direction === 'vertical' ? activeLineHeight : 5}px`,
          transform: `translate(${direction === 'horizontal' ? activeLineOffset : 0}px, ${direction === 'vertical' ? activeLineOffset : 0}px)`
        }"
      />
    </ul>

    <div class="base-tabs__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseTabs',
  provide() {
    return {
      tabs: this,
    };
  },
  data: () => ({
    navigation: [],
    activeLineWidth: 0,
    activeLineHeight: 0,
    activeLineOffset: 0,
  }),
  props: {
    value: {
      type: [Number, String, Object],
      required: true,
    },
    tabsLocation: {
      type: String,
      required: false,
      default: 'top'
    },
    mode: {
      type: String,
      required: false,
      default: 'light',
    },
    direction: {
      type: String,
      required: false,
      default: 'horizontal',
    },
    directionLocation: {
      type: String,
      required: false,
      default: 'right',
    },
    columns: {
      type: [String, Number],
      required: false,
      default: 3,
    },
    firstElement: {
      type: String,
      required: false,
      default: 'content'
    },
  },
  watch: {
    value() {
      this.$emit('change', this.selected);
    },
  },
  mounted() {
    this.moveActiveLine(this.value);
  },
  methods: {
    moveActiveLine(payload) {
      let element;

      // Find vue component based on payload name
      for (var key in this.$children) {
        if (this.$children.hasOwnProperty(key)) {
          this.$children[key].name === payload ? element = this.$children[key] : false;
        }
      }

      if (this.direction === 'horizontal') {
        this.activeLineWidth = element.$el.clientWidth;
        this.activeLineOffset = element.$el.offsetLeft;
      }

      if (this.direction === 'vertical') {
        this.activeLineHeight= element.$el.clientHeight;
        this.activeLineOffset = element.$el.offsetTop;
      }
    },
    setTab(payload) {
      this.$emit('input', payload);
      this.moveActiveLine(payload);
    },
  },
};
</script>

<style lang="sass" src="./BaseTabs.sass" />
