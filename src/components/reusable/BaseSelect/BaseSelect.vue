<template>
  <div
    class="base-select"
    @keyup.esc="close()"
    @keydown.down.prevent="handleKeyDown()"
    @keydown.up.prevent="handleKeyDown()"
  >
    <label
      class="base-select__label"
      :for="selectID"
      v-if="label"
    >
      {{ label }}
    </label>

    <!-- Search mode -->
    <div class="base-select__inner-wrapper" v-if="searchMode">
      <svg
        v-if="languageIcon"
        class="base-select__icon"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.48358 17.182C14.0023 17.182 17.6654 13.5189 17.6654 9.00018C17.6654 4.48148 14.0023 0.818359 9.48358 0.818359C4.96488 0.818359 1.30176 4.48148 1.30176 9.00018C1.30176 13.5189 4.96488 17.182 9.48358 17.182Z" stroke="white" stroke-width="1.63636" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.30176 9H17.6654" stroke="white" stroke-width="1.63636" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.48366 0.818359C11.5302 3.05883 12.6932 5.96639 12.7564 9.00018C12.6932 12.034 11.5302 14.9415 9.48366 17.182C7.43716 14.9415 6.27414 12.034 6.21094 9.00018C6.27414 5.96639 7.43716 3.05883 9.48366 0.818359Z" stroke="white" stroke-width="1.63636" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <input
        class="base-select__inner base-select__inner--input"
        :class="[
          isActive ? 'base-select__inner--active' : '',
          selected ? 'base-select__inner--selected' : '',
          languageIcon ? 'base-select__inner--with-icon' : '',
        ]"
        v-model="search"
        @input="makeSearch()"
        @focus="isActive = true"
        :id="selectID"
        :placeholder="selected ? selected.label : placeholder"
      />
      <button class="base-select__delete" @click="resetSelect()" v-if="selected">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
          <g id="Group_2213" data-name="Group 2213" transform="translate(-965.994 -2434)">
            <circle
              id="Ellipse_33"
              data-name="Ellipse 33"
              cx="7"
              cy="7"
              r="7"
              transform="translate(965.994 2434)"
              fill="#f2f2f2"
            />
            <path
              id="angle-right"
              d="M3.38,2.577.972.168a.568.568,0,0,0-.807.8L2.176,2.98.165,4.991a.568.568,0,0,0,.807.8L3.38,3.383a.568.568,0,0,0,0-.807Z"
              transform="translate(976.081 2438.017) rotate(90)"
              fill="#b4b4b4"
            />
            <path
              id="angle-right-2"
              data-name="angle-right"
              d="M3.38,2.577.972.168a.568.568,0,0,0-.807.8L2.176,2.98.165,4.991a.568.568,0,0,0,.807.8L3.38,3.383a.568.568,0,0,0,0-.807Z"
              transform="translate(970.125 2444.139) rotate(-90)"
              fill="#b4b4b4"
            />
          </g>
        </svg>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11.572"
        height="6.894"
        viewBox="0 0 11.572 6.894"
        class="base-select__arrow"
        :style="{ transform }"
      >
        <path
          id="angle-right"
          d="M15.447,11.76,10.767,7.081A1.1,1.1,0,1,0,9.2,8.637l3.907,3.907L9.2,16.45a1.1,1.1,0,0,0,1.567,1.556l4.679-4.679a1.1,1.1,0,0,0,0-1.567Z"
          transform="translate(-6.754 15.773) rotate(-90)"
          fill="#132b50"
        />
      </svg>
    </div>

    <!-- Normal mode -->
    <button
      type="button"
      class="base-select__inner"
      :class="[
        isActive ? 'base-select__inner--active' : '',
        selected ? 'base-select__inner--selected' : '',
        mode === 'picker' ? 'base-select__inner--picker' : '',
      ]"
      @click="(isActive = !isActive), $emit('click')"
      aria-controls="base-select__content"
      :aria-label="helpfulText"
      :title="helpfulText"
      :aria-expanded="isActive ? 'true' : 'false'"
      aria-haspopup="listbox"
      :id="selectID"
      v-else
    >
      <template v-if="hasHeaderSlot">
        <slot name="header"></slot>
      </template>
      <template v-else>{{ selected ? selected.label : text }}</template>
      <button class="base-select__delete" @click="resetSelect()" v-if="selected">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
          <g id="Group_2213" data-name="Group 2213" transform="translate(-965.994 -2434)">
            <circle
              id="Ellipse_33"
              data-name="Ellipse 33"
              cx="7"
              cy="7"
              r="7"
              transform="translate(965.994 2434)"
              fill="#f2f2f2"
            />
            <path
              id="angle-right"
              d="M3.38,2.577.972.168a.568.568,0,0,0-.807.8L2.176,2.98.165,4.991a.568.568,0,0,0,.807.8L3.38,3.383a.568.568,0,0,0,0-.807Z"
              transform="translate(976.081 2438.017) rotate(90)"
              fill="#b4b4b4"
            />
            <path
              id="angle-right-2"
              data-name="angle-right"
              d="M3.38,2.577.972.168a.568.568,0,0,0-.807.8L2.176,2.98.165,4.991a.568.568,0,0,0,.807.8L3.38,3.383a.568.568,0,0,0,0-.807Z"
              transform="translate(970.125 2444.139) rotate(-90)"
              fill="#b4b4b4"
            />
          </g>
        </svg>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11.572"
        height="6.894"
        viewBox="0 0 11.572 6.894"
        class="base-select__arrow"
        :style="{ transform }"
      >
        <path
          id="angle-right"
          d="M15.447,11.76,10.767,7.081A1.1,1.1,0,1,0,9.2,8.637l3.907,3.907L9.2,16.45a1.1,1.1,0,0,0,1.567,1.556l4.679-4.679a1.1,1.1,0,0,0,0-1.567Z"
          transform="translate(-6.754 15.773) rotate(-90)"
          fill="#132b50"
        />
      </svg>
    </button>

    <!-- List of elements -->
    <transition name="fade">
      <ul
        class="base-select__content"
        v-if="isActive"
        aria-label="Kontent listy"
        role="listbox"
        tabindex="-1"
      >
        <slot name="items"></slot>
        <li class="base-select__no-results" v-if="isEmpty">
          No results
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { uuid } from '@/helpers';
import debounce from 'lodash.debounce';

export default {
  name: 'BaseSelect',
  provide() {
    return {
      select: this,
    };
  },
  data: () => ({
    isActive: false,
    selected: null,
    search: null,
    options: [],
    filteredOptions: [],
    isEmpty: false,
  }),
  props: {
    value: {
      type: [Number, String, Object],
      required: true,
    },
    searchMode: {
      type: Boolean,
      required: false,
      default: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Select',
    },
    label: {
      type: String,
      required: false,
      default: null,
    },
    helpfulText: {
      type: String,
      required: false,
      default: 'Otwórz listę',
    },
    languageIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
    mode: {
      type: String,
      required: false,
      default: 'default',
    },
  },
  watch: {
    value() {
      this.$emit('change', this.selected);
    },
    filteredOptions() {
      this.filteredOptions.length === 0
        ? (this.isEmpty = true)
        : (this.isEmpty = false);
    },
    isActive() {
      if (!this.isActive) {
        this.options = [];
        this.filteredOptions = [];
        this.isEmpty = false;
      }
    },
  },
  computed: {
    selectID() {
      return uuid();
    },
    hasSlot() {
      if (this.$slots.items) {
        return this.$slots.items.length > 0;
      }

      return false;
    },
    hasHeaderSlot() {
      if (this.$slots) {
        if (this.$slots.header) {
          return true;
        }
      }

      return false;
    },
    transform() {
      return this.isActive
        ? 'rotate(0deg) translateY(-50%)'
        : 'rotate(180deg) translateY(-50%)';
    },
  },
  methods: {
    close() {
      this.isActive = false;
    },
    resetSelect() {
      this.selected = null;
      this.close();
      this.$emit('input', '');
    },
    selectOption(payload) {
      this.close();
      this.selected = payload;
      this.$emit('input', payload.value);
    },
    makeSearch: debounce(function filter() {
      if (this.options.length > 0) {
        this.filteredOptions = this.options.filter((item) => item.value.toLowerCase().includes(this.search));
      }
    }, 100),
    handleOutsideClick({ target }) {
      const isClickInside = this.$el.contains(target);

      if (!isClickInside) {
        this.close();

        if (!this.selected) {
          this.filteredOptions = [];
          this.options = [];
          this.search = '';
        }
      }
    },
    handleKeyDown() {
      this.isActive ? this.$emit('keydown') : (this.isActive = true);
    },
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  created() {
    if (this.value && typeof this.value === 'object') {
      this.selected = this.value;
    }
  }
};
</script>

<style lang='sass' src='./BaseSelect.sass' />
