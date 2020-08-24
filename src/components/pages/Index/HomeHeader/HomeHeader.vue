<template>
  <header class="home-header">
    <main-header
      heading="We deliver the best Lotto as a Service solution"
      text="Lottify is an innovative solution that allows you to build and deploy lottery stores with minimum effort."
      labelText="Lottify is now available in <b>New Jersey</b> and <b>New York, US</b>"
      labelValue="New"
      mode="video"
      videoURL="https://i.imgur.com/nXNIzJd.png"
      videoPoster="https://i.imgur.com/aJxUgM5.png"
      videoText="See How the Platform Works"
    >
      <div class="home-header__content" slot="content">
        <video-poster
          text="See How the Platform Works"
          poster="https://i.imgur.com/aJxUgM5.png"
          video="https://i.imgur.com/nXNIzJd.png"
          class="home-header__mobile-poster"
        />
        <base-button
          type="primary"
          title="Get started for free"
          class="home-header__content-button"
          to="#"
        >
          Get started for free
        </base-button>
        <base-button
          type="outline"
          title="Get started for free"
          class="home-header__content-button"
          @click="scrollDown()"
        >
          Learn more
        </base-button>
      </div>
    </main-header>
  </header>
</template>

<script>
export default {
  name: 'PlatformHeader',
  methods: {
    scrollDown() {
      const target = document.querySelector('.get-started');

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },
  },
};
</script>

<style lang="sass" src="./HomeHeader.sass" />
