<template>
  <g-link to="/" class="logo">
    <g-image
      :alt="$static.metadata.siteName"
      src="~/assets/images/logo.svg"
      class="logo__image"
      :style="{
        width: `${this.width}rem`
      }"
    />
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'BaseLogo',
  props: {
    width: {
      type: Number,
      default: 10,
    },
  },
};
</script>

<style lang="sass" src="./BaseLogo.sass" />
