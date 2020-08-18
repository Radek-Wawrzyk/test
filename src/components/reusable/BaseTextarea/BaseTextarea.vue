<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
    :name="name"
    tag="div"
    class="base-textarea"
    :id="id"
    mode="passive"
  >
    <label
      v-if="label"
      class="base-textarea__label"
      :for="name"
    >
      {{ label }}
    </label>
    <textarea
      :value="value"
      :disabled="disabled"
      :id="name"
      @input="updateValue"
      @change="updateValue"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      class="base-textarea__inner"
      :placeholder="placeholder ? placeholder : label"
      autocomplete="off"
      :autofocus="autofocus"
      resize="false"
    >

    </textarea>
    <transition name="fade">
      <span class="base-textarea__error" v-if="errors[0]">
        {{ errors[0] }}
      </span>
    </transition>
  </validation-provider>
</template>

<script>
export default {
  name: 'BaseTextarea',
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
    resize: {
      type: Boolean,
      required: false,
      default: false,
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
  },
};
</script>

<style lang="sass" src="./BaseTextarea.sass" />
