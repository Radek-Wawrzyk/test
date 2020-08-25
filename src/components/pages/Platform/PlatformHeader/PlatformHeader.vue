<template>
  <header class="platform-header">
    <main-header
      heading="Versatile Platform with a Rich Variety of Features"
      text="Lottify is an innovative solution that allows you to build and deploy lottery stores with minimum effort."
      mode="video-inline"
      imageURL="https://i.imgur.com/nXNIzJd.png"
      :videoURL="videoPlatformUrl"
      videoPoster="https://i.imgur.com/nXNIzJd.png"
    >
      <div class="platform-header__content" slot="content">
        <base-button
          type="primary"
          title="Get started for free"
          class="platform-header__content-button"
          to="#"
        >
          Get started for free
        </base-button>
      </div>
      <div class="platform-header__actions" slot="info">
        <base-button
          type="primary"
          title="Get started for free"
          class="platform-header__content-button"
          to="#"
        >
          Get started for free
        </base-button>
      </div>
    </main-header>
  </header>
</template>

<script>
import VideoPlatformUrl from '@/assets/videos/platform/animation-platform-banner.mp4'

export default {
  name: 'PlatformHeader',
  data () {
    return {
      videoPlatformUrl: VideoPlatformUrl
    }
  }
};
</script>

<style lang="sass" src="./PlatformHeader.sass" />
