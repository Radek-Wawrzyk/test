<template>
  <div class="base-accordion-item">
    <div
      class="base-accordion-item__trigger"
      :class="{'base-accordion-item__trigger--active' : isActive}"
      @click="handleEnterClick"
      :aria-controls="`base-accordion-item-${name}`"
      :aria-expanded="isActive ? 'true' : 'false'"
    >
      <slot name="trigger">
        {{ this.name }}
      </slot>
    </div>
    <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div
        :id="`base-accordion-item-${name}`"
        class="base-accordion-item__content"
        v-if="isActive"
        :aria-hidden="isActive ? 'false' : 'true'"
      >
        <slot name="content"/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AccordionElement',
  inject: ['accordion'],
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.accordion.activeNames.indexOf(this.name) > -1;
    },
    transitionName() {
      return this.accordion.transitionName;
    },
  },
  methods: {
    afterEnter(element) {
      element.style.height = "auto";
    },
    enter(element) {
      const { width } = getComputedStyle(element);
      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";
      // Height
      const { height } = getComputedStyle(element);
      // const height = element.scrollHeight;
      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;
      getComputedStyle(element).height;
      setTimeout(() => {
        element.style.height = height;
      });
    },
    leave(element) {
      const { height } = getComputedStyle(element);
      element.style.height = height;
      getComputedStyle(element).height;
      setTimeout(() => {
        element.style.height = 0;
      });
    },
    handleEnterClick() {
      this.dispatch('Accordion', 'item-click', this);
    },
    dispatch (componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
  },
};
</script>

<style>
  .expand-enter-active, .expand-leave-active {
	 transition: height 0.2s ease-in-out;
	 overflow: hidden;
}
 .expand-enter, .expand-leave-to {
	 height: 0;
}
</style>
