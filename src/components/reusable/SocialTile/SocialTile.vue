<template>
  <li
    class="social-tile"
    :class="[
      mode === 'developers' ? 'social-tile--developers' : '',
      mode === 'blog' ? 'social-tile--blog' : '',
      newest ? 'social-tile--big' : '',
    ]"
  >
    <figure class="social-tile__img">
      <g-image
        v-if="data.img"
        class="social-tile__img-inner"
        alt=""
        :src="data.img"
      />
      <g-image
        v-else
        class="social-tile__img-inner"
        alt=""
        src="@/assets/images/social.png"
      />
      <span class="social-tile__img-label" v-if="data.label">
        {{ data.label }}
      </span>
      <span class="social-tile__img-label" v-if="label">
        {{ label }}
      </span>
      <span class="social-tile__img-label" v-if="newest">
        latest post
      </span>
    </figure>
    <div class="social-tile__content">
      <label class="social-tile__date" v-if="data.date">
        {{ data.date }}
      </label>
      <h5 class="social-tile__name">
        {{ data.heading }}
      </h5>
      <p class="social-tile__text">
        {{ data.text }}
      </p>
      <base-button
        :to="mode === 'stories' ? `customers/${data.link}` : data.link"
        :title="data.heading"
        class="social-tile__link"
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
  name: 'SocialTile',
  props: {
    data: {
      type: Object,
      required: true,
    },
    newest: {
      type: Boolean,
      required: false,
      default: false,
    },
    mode: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="sass" src="./SocialTile.sass" />
