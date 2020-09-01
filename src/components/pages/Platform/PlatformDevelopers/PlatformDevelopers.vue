<template>
  <section class="platform-developers platform-section" id="developers">
    <div class="container">
      <base-header
        mode="dark"
        max-width="640px"
        align="center"
        class="platform-developers__header"
        heading="Hey Developers"
        sub-heading="Api refference "
        text="You’ll love our standardized, user-friendly API and SDK. We agonize over the right abstractions so your teams don’t need to stitch together disparate systems."
      />
      <div class="platform-developers__inner">
        <mobile-tabs
          v-model="activeTab"
          mode="light"
          :data="tabs"
          showLabel
        >
          <div class="platform-developers__content" slot="content">
            <transition name="fade" mode="out-in">
              <video
                v-video-autoplay
                key="entity"
                muted
                width="auto"
                height="500"
                class="platform-developers__content-img"
              >
                <source src="@/assets/videos/platform/code_1.mp4" type="video/mp4" />
              </video>

              <video
                v-video-autoplay
                key="collection"
                muted
                width="auto"
                height="500"
                class="platform-developers__content-img"
              >
                <source src="@/assets/videos/platform/code_1.mp4" type="video/mp4" />
              </video>

              <video
                v-video-autoplay
                key="pagination"
                muted
                width="auto"
                height="500"
                class="platform-developers__content-img"
              >
                <source src="@/assets/videos/platform/code_1.mp4" type="video/mp4" />
              </video>
              <!-- <g-image
                src="@/assets/images/code.svg"
                alt=""
                class="platform-developers__content-img"
                key="collection"
                v-if="activeTab === 'collection'"
              /> -->
              <!-- <g-image
                src="@/assets/images/code.svg"
                alt=""
                class="platform-developers__content-img"
                key="pagination"
                v-if="activeTab === 'pagination'"
              /> -->
            </transition>
          </div>
        </mobile-tabs>
        <base-tabs
          v-model="activeTab"
          mode="dark"
          columns="1"
          direction="vertical"
          directionLocation="right"
          class="platform-developers__tabs"
        >
          <base-tab-item
            class="platform-developers-tab"
            v-for="item in tabs"
            :key="item.heading"
            :name="item.name"
          >
            <div class="platform-developers-tab__header">
              <span class="platform-developers-tab__header-label">
                {{ item.label }}
              </span>
              <h3 class="platform-developers-tab__header-name">
                {{ item.heading }}
              </h3>
            </div>
            <p class="platform-developers-tab__text">
              {{ item.text }}
            </p>
          </base-tab-item>
        </base-tabs>
        <div class="platform-developers__content platform-developers__content--hide-on-mobile">
          <transition name="fade" mode="out-in">
            <video
              v-video-autoplay
              key="entity"
              muted
              width="auto"
              height="500"
              class="platform-developers__content-img"
              v-if="activeTab === 'entity'"
            >
              <source src="@/assets/videos/platform/code_1.mp4" type="video/mp4" />
            </video>

            <video
              v-video-autoplay
              key="collection"
              muted
              width="auto"
              height="500"
              class="platform-developers__content-img"
              v-if="activeTab === 'collection'"
            >
              <source src="@/assets/videos/platform/code_1.mp4" type="video/mp4" />
            </video>

            <video
              v-video-autoplay
              key="pagination"
              muted
              width="auto"
              height="500"
              class="platform-developers__content-img"
              v-if="activeTab === 'pagination'"
            >
              <source src="@/assets/videos/platform/code_1.mp4" type="video/mp4" />
            </video>
            <!-- <g-image
              src="@/assets/images/code.svg"
              alt=""
              class="platform-developers__content-img"
              key="entity"
              v-if="activeTab === 'entity'"
            />
            <g-image
              src="@/assets/images/code.svg"
              alt=""
              class="platform-developers__content-img"
              key="collection"
              v-if="activeTab === 'collection'"
            />
            <g-image
              src="@/assets/images/code.svg"
              alt=""
              class="platform-developers__content-img"
              key="pagination"
              v-if="activeTab === 'pagination'"
            /> -->
          </transition>
        </div>
      </div>
      <div class="platform-developers__actions">
        <base-button
          to="/developers"
          title="Learn more"
          type="outline"
          class="platform-developers__actions-button"
        >
          Learn more
        </base-button>
      </div>
    </div>
  </section>
</template>

<script>
import { platform } from '@/data/staticData.js';

export default {
  name: "PlatformDevelopers",
  data: () => ({
    activeTab: '',
    tabs: platform.developers,
  }),
  created() {
    this.activeTab = this.tabs[0].name;
  },
}
</script>

<style lang="sass" src="./PlatformDevelopers.sass" />
