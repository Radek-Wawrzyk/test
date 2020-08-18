<template>
  <li
    class="base-option"
    :class="[
      ...classes,
      divinder ? 'base-option--divinder' : '',
    ]"
    v-show="isFiltered"
  >
    <button
      class="base-option__inner"
      :class="[
        isSelected ? 'base-option--selected' : '',
        disabled ? 'base-option--disabled' : '',
        isPickerMode ? 'base-option--picker' : '',
      ]"
      @click="$emit('click'), handleClick()"
      @blur="$emit('blur')"
    >
      <slot></slot>
    </button>
  </li>
</template>

<script>
export default {
  name: 'BaseOption',
  props: {
    classes: {
      type: [String, Array],
      required: false,
      default: '',
    },
    divinder: {
      type: Boolean,
      required: false,
    },
    label: {
      type: [String, Number],
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    noResults: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({
    isSelected: false,
    isFiltered: false,
  }),
  inject: ['select'],
  watch: {
    options() {
      setTimeout(() => {
        if (this.select.selected) {
          this.select.selected.value === this.value ? this.isSelected = true : this.isSelected = false;
        } else {
          this.isSelected = false;
        }
      }, 0);
    },
    filteredList() {
      setTimeout(() => {
        const currentObject = this.select.filteredOptions.find((item) => item.value === this.value);
        currentObject === undefined ? this.isFiltered = false : this.isFiltered = true;
      }, 0);
    },
  },
  methods: {
    handleClick() {
      this.select.selectOption({
        value: this.value,
        label: this.label,
      });
    },
  },
  computed: {
    options() {
      return this.select.options;
    },
    isPickerMode() {
      return this.select.mode === 'picker';
    },
    filteredList() {
      return this.select.filteredOptions;
    },
  },
  created() {
    this.select.options.push({
      value: this.value,
      label: this.label,
    });
    this.select.filteredOptions.push({
      value: this.value,
      label: this.label,
    });
  },
};
</script>

<style lang="sass" src="./BaseOption.sass" />
