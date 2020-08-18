<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
    :name="name"
    tag="div"
    class="base-input"
    :id="id"
    mode="passive"
  >
    <label
      v-if="label"
      class="base-input__label"
      :for="name"
    >
      {{ label }}
    </label>
    <input
      :type="type === 'password' ? localType : type"
      :value="value"
      :disabled="disabled"
      :id="name"
      @input="updateValue"
      @change="updateValue"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      class="base-input__inner"
      :class="[
        emailIcon ? 'base-input__inner--with-icon' : '',
      ]"
      :placeholder="placeholder ? placeholder : label"
      autocomplete="off"
      :autofocus="autofocus"
    />
    <svg
      v-if="emailIcon"
      class="base-input__icon"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 3H15C15.825 3 16.5 3.675 16.5 4.5V13.5C16.5 14.325 15.825 15 15 15H3C2.175 15 1.5 14.325 1.5 13.5V4.5C1.5 3.675 2.175 3 3 3Z" stroke="#ADAEB0" stroke-width="1.5"/>
      <path d="M16.5 4.5L9 9.75L1.5 4.5" stroke="#ADAEB0" stroke-width="1.5"/>
    </svg>
    <transition name="fade">
      <span class="base-input__error" v-if="errors[0]">
        {{ errors[0] }}
      </span>
    </transition>
  </validation-provider>
</template>

<script>
export default {
  name: 'BaseInput',
  data: () => ({
    localType: 'password',
  }),
  props: {
    value: {
      type: [String, Number],
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    name: {
      type: String,
      required: false,
      default: 'Field',
    },
    rules: {
      type: [String, Object],
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    emailIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
    autofocus: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
    changeInputType() {
      switch (this.localType) {
        case 'password': {
          this.localType = 'text';
          break;
        }
        case 'text': {
          this.localType = 'password';
          break;
        }
        default: {
          break;
        }
      }
    },
  },
};
</script>

<style lang="sass" src="./BaseInput.sass" />
