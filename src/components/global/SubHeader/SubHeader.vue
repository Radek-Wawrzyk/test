<template>
  <header class="sub-header">
    <div class="container sub-header__container">
      <h1
        class="sub-header__heading"
        v-html="heading"
        v-if="heading"
      />
      <p
        class="sub-header__text"
        v-html="text"
        v-if="text"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'SubHeader',
  props: {
    heading: {
      type: [String, Number],
      required: false,
    },
    text: {
      type: [String, Number],
      required: false,
    },
  },
}
</script>

<style lang="sass" src="./SubHeader.sass" />
