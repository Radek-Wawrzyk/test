<template>
  <component
    :is="componentType"
    :disabled="disabled"
    :class="classes"
    :to="to && !nativeLink ? to : false"
    :href="to && nativeLink ? to : false"
    :title="title"
    :aria-label="title"
    :type="nativeType"
    @click="$emit('click')"
    @focus="$emit('focus')"
    class="base-button"
  >
    <g-image
      v-if="icon && icon === 'book'"
      src="@/assets/icons/book.svg"
      alt=""
      class="base-button__icon-left"
    />
    <g-image
      v-if="icon && icon === 'cloud'"
      src="@/assets/icons/cloud.svg"
      alt=""
      class="base-button__icon-left"
    />
    <p class="base-button__text">
      <slot></slot>
    </p>
    <g-image
      v-if="icon && icon === 'arrow-right'"
      src="@/assets/icons/arrow-right.svg"
      alt=""
      class="base-button__icon"
    />
    <g-image
      v-if="icon && icon === 'small-right-arrow'"
      src="@/assets/icons/small-right-arrow.svg"
      alt=""
      class="base-button__icon-right"
    />
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    to: {
      type: String,
      required: false,
      default: null,
    },
    nativeLink: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: [String],
      required: false,
      default: null,
    },
    type: {
      type: String,
      required: false,
      default: 'default',
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    nativeType: {
      type: String,
      required: false,
      default: null,
    },
    size: {
      type: String,
      required: false,
      default: null,
    },
    outlineType: {
      type: String,
      required: false,
      default: 'dark',
    },
    textType: {
      type: String,
      required: false,
      default: 'default',
    },
  },
  computed: {
    componentType() {
      if (this.to && this.nativeLink) {
        return 'a';
      }

      if (this.to && !this.nativeLink) {
        return 'g-link';
      }

      if (!this.to && !this.nativeLink) {
        return 'button';
      }
    },
    classes() {
      return [
        this.type === 'primary' ? 'base-button--primary' : '',
        this.type === 'text' ? 'base-button--text' : '',
        this.type === 'outline' ? 'base-button--outline' : '',
        this.size === 'small' ? 'base-button--small' : '',
        this.disabled === 'small' ? 'base-button--disabled' : '',
        this.outlineType === 'light' && this.type === 'outline' ? 'base-button--outline-light' : '',
        this.outlineType === 'dark' && this.type === 'outline' ? 'base-button--outline-dark' : '',
        this.textType === 'primary' && this.type === 'text' ? 'base-button--text-primary' : '',
      ];
    },
  },
};
</script>

<style lang="sass" src="./BaseButton.sass" />
