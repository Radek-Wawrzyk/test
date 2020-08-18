<template>
  <div
    class="info-bar"
    :class="[
      mode === 'light' ? 'info-bar--light' : '',
      size === 'small' ? 'info-bar--small' : '',
    ]"
  >
    <div class="info-bar__wrapper">
      <div class="info-bar__label">
        {{ this.labelText }}
      </div>
      <div class="info-bar__text" v-html="this.text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBar',
  props: {
    labelText: {
      type: String,
      reuired: true,
    },
    text: {
      type: String,
      reuired: true,
    },
    mode: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="sass" src="./InfoBar.sass" />
