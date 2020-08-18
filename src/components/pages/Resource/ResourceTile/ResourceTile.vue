<template>
  <li
    class="resource-tile"
    :class="[
      featured ? 'resource-tile--featured' : '',
    ]"
  >
    <g-image
      alt=""
      src="@/assets/images/resource.png"
      class="resource-tile__img"
    />
    <div class="resource-tile__content">
      <span class="resource-tile__sub-heading">
        {{ data.subHeading }}
      </span>
      <h4 class="resource-tile__heading">
        {{ data.heading }}
      </h4>
      <p class="resource-tile__text">
        {{ data.text }}
      </p>
      <base-button
        :to="data.link"
        :title="data.heading"
        class="resource-tile__link"
        type="text"
        text-type="primary"
        icon="arrow-right"
      >
        Read more
      </base-button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ResourceTile',
  props: {
    data: {
      type: Object,
      required: true,
    },
    featured: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="sass" src="./ResourceTile.sass" />
