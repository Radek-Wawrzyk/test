<template>
  <header class="main-header">
    <div class="container container--big main-header__container">
      <div class="main-header__content">
        <info-bar
          v-if="labelText && labelValue"
          :label-text="labelValue"
          :text="labelText"
          class="main-header__label"
        />
        <g-image
          class="main-header__top-img"
          alt
          :src="topImageURL"
          v-if="topImageURL"
        />
        <h1 class="main-header__heading">
          {{ heading }}
        </h1>
        <p class="main-header__text">
          {{ text }}
        </p>
        <slot name="content"></slot>
      </div>
      <div class="main-header__info">
        <video-poster
          :text="videoText"
          :poster="videoPoster"
          :video="videoURL"
          v-if="mode === 'video' && videoPoster && videoURL"
        />

        <video
          v-else-if="mode === 'video-inline' && videoPoster && videoURL"
          v-video-autoplay:value="false"
          :poster="videoPoster"
          muted
          width="auto"
          height="240"
          class="main-header__info-video"
        >
          <source :src="videoURL" type="video/mp4" />
        </video>

        <g-image
          v-else-if="mode === 'image' && imageURL"
          class="main-header__info-img"
          alt=""
          :src="imageURL"
        />
        <slot name="info"></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    labelText: {
      type: [String, Number],
      required: false,
      default: null,
    },
    labelValue: {
      type: [String, Number],
      required: false,
      default: null,
    },
    imageURL: {
      type: String,
      required: false,
      default: null,
    },
    topImageURL: {
      type: String,
      required: false,
      default: null,
    },
    videoURL: {
      type: String,
      required: false,
      default: null,
    },
    videoPoster: {
      type: String,
      required: false,
      default: null,
    },
    videoText: {
      type: String,
      required: false,
      default: null,
    },
    mode: {
      type: String,
      required: false,
      default: 'image',
    },
  },
};
</script>

<style lang="sass" src="./MainHeader.sass" />
