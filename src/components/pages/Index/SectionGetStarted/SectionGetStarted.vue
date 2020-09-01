<template>
  <section class="get-started">
    <div class="container">
      <base-header
        align="center"
        class="get-started__header"
        heading="Launch your own lottery store"
        sub-heading="Get started"
        text="It takes only a few minutes to get started with Lottify. You’re just a few clicks away from selling lottery tickets."
      />
      <mobile-tabs
        v-model="activeTab"
        mode="light"
        :data="tabs"
      >
        <template slot="content">
          <main class="get-started__content">
            <video
              key="sign"
              v-video-autoplay
              width="100%"
              height="240"
              muted
              class="get-started__content-video"
            >
              <source src="@/assets/videos/home/animation-steps-1.mp4" type="video/mp4" />
            </video>

            <video
              v-if="activeTab === 'set'"
              key="set"
              v-video-autoplay
              width="100%"
              height="240"
              muted
              class="get-started__content-video">
              <source src="@/assets/videos/home/animation-steps-2.mp4" type="video/mp4" />
            </video>

            <video
              key="start"
              v-video-autoplay
              width="100%"
              height="240"
              muted
              class="get-started__content-video">
              <source src="@/assets/videos/home/animation-steps-1.mp4" type="video/mp4" />
            </video>
          </main>
        </template>
      </mobile-tabs>

      <base-tabs
        v-model="activeTab"
        tabsLocation="top"
        mode="light"
        first-element="content"
      >
        <base-tab-item
          class="get-started-tab"
          v-for="item in tabs"
          :key="item.heading"
          :name="item.name"
        >
          <span class="get-started-tab__label">
            {{ item.label }}
          </span>
          <h3 class="get-started-tab__heading">
            {{ item.heading }}
          </h3>
          <p class="get-started-tab__text">
            {{ item.text }}
          </p>
        </base-tab-item>

        <template slot="content">
          <main class="get-started__content">
            <transition name="fade" mode="out-in">
              <video
                v-if="activeTab === 'sign'"
                v-video-autoplay
                key="sign"
                muted
                width="auto" height="500"
                class="get-started__content-video"
              >
                <source src="@/assets/videos/home/get-started-1.mp4" type="video/mp4" />
              </video>

              <video
                v-if="activeTab === 'set'"
                v-video-autoplay
                key="set"
                muted
                width="auto" height="500"
                class="get-started__content-video"
              >
                <source src="@/assets/videos/home/get-started-2.mp4" type="video/mp4" />
              </video>

              <video
                v-if="activeTab === 'start'"
                v-video-autoplay
                key="start"
                muted
                width="auto" height="500"
                class="get-started__content-video"
              >
                <source src="@/assets/videos/home/get-started-3.mp4" type="video/mp4" />
              </video>
            </transition>
          </main>
        </template>
      </base-tabs>
    </div>
  </section>
</template>

<script>
import { startedTabs } from '@/data/staticData.js';

export default {
  name: 'SectionGetStarted',
  data: () => ({
    activeTab: 'sign',
    tabs: startedTabs
  })
};
</script>

<style lang="sass" src="./SectionGetStarted.sass" />
<style>
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.2s;
  }

  .fade-enter-active {
    transition-delay: 0.2s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
