<template>
  <section class="platform-features platform-section" id="features">
    <div class="container">
      <base-header
        align="left"
        class="platform-features__header"
        heading="Easy access to features and capabilities"
        sub-heading="KEY FEATURES"
        text="Free and open source, Ionic offers a library of components, gestures, and tools."
      />

      <mobile-tabs
        v-model="activeTab"
        mode="light"
        :data="tabs"
      >
        <template slot="content">
          <main class="platform-features__content">
            <transition name="fade" mode="out-in">
              <div
                class="platform-features-content"
                v-if="activeTab === 'brands'"
                key="brands"
              >
                <video
                  v-video-autoplay
                  key="collection"
                  muted
                  width="auto"
                  height="auto"
                  class="platform-features-content__img"
                >
                  <source src="@/assets/videos/platform/feature-1.mp4" type="video/mp4" />
                </video>
                <div class="platform-features-content__tile">
                  <figure class="platform-features-content__tile-icon">
                    <!-- <g-image
                      class="features-tile__icon-inner"
                      alt
                      src="@/assets/icons/features-icon.svg"
                    /> -->
                  </figure>
                  <div class="platform-features-content__tile-content">
                    <h4 class="platform-features-content__tile-heading">
                      {{ staticTabData.name }}
                    </h4>
                    <p class="platform-features-content__tile-text">
                      {{ staticTabData.text }}
                    </p>
                    <div class="platform-features-content__tile-list-wrapper">
                      <ul
                        v-for="feature in staticTabData.features"
                        :key="feature"
                        class="platform-features-content__tile-features"
                      >
                        <li class="platform-features-content__tile-features-item">
                          <g-image
                            class="platform-features-content__tile-features-icon"
                            alt
                            src="@/assets/icons/benefits-check.svg"
                          />
                          <p class="platform-features-content__tile-features-text">
                            {{ feature }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="platform-features-content"
                v-if="activeTab === 'marketing'"
                key="marketing"
              >
                <video
                  v-video-autoplay
                  key="collection"
                  muted
                  width="auto"
                  height="auto"
                  class="platform-features-content__img"
                >
                  <source src="@/assets/videos/platform/feature-1.mp4" type="video/mp4" />
                </video>
                <div class="platform-features-content__tile">
                  <figure class="platform-features-content__tile-icon">
                    <!-- <g-image
                      class="features-tile__icon-inner"
                      alt
                      src="@/assets/icons/features-icon.svg"
                    /> -->
                  </figure>
                  <div class="platform-features-content__tile-content">
                    <h4 class="platform-features-content__tile-heading">
                      {{ staticTabData.name }}
                    </h4>
                    <p class="platform-features-content__tile-text">
                      {{ staticTabData.text }}
                    </p>
                    <div class="platform-features-content__tile-list-wrapper">
                      <ul
                        v-for="feature in staticTabData.features"
                        :key="feature"
                        class="platform-features-content__tile-features"
                      >
                        <li class="platform-features-content__tile-features-item">
                          <g-image
                            class="platform-features-content__tile-features-icon"
                            alt
                            src="@/assets/icons/benefits-check.svg"
                          />
                          <p class="platform-features-content__tile-features-text">
                            {{ feature }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="platform-features-content"
                v-if="activeTab === 'product'"
                key="product"
              >
                <video
                  v-video-autoplay
                  key="collection"
                  muted
                  width="auto"
                  height="auto"
                  class="platform-features-content__img"
                >
                  <source src="@/assets/videos/platform/feature-1.mp4" type="video/mp4" />
                </video>
                <div class="platform-features-content__tile">
                  <figure class="platform-features-content__tile-icon">
                    <!-- <g-image
                      class="features-tile__icon-inner"
                      alt
                      src="@/assets/icons/features-icon.svg"
                    /> -->
                  </figure>
                  <div class="platform-features-content__tile-content">
                    <h4 class="platform-features-content__tile-heading">
                      {{ staticTabData.name }}
                    </h4>
                    <p class="platform-features-content__tile-text">
                      {{ staticTabData.text }}
                    </p>
                    <div class="platform-features-content__tile-list-wrapper">
                      <ul
                        v-for="feature in staticTabData.features"
                        :key="feature"
                        class="platform-features-content__tile-features"
                      >
                        <li class="platform-features-content__tile-features-item">
                          <g-image
                            class="platform-features-content__tile-features-icon"
                            alt
                            src="@/assets/icons/benefits-check.svg"
                          />
                          <p class="platform-features-content__tile-features-text">
                            {{ feature }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="platform-features-content"
                v-if="activeTab === 'bi'"
                key="bi"
              >
                <video
                  v-video-autoplay
                  key="collection"
                  muted
                  width="auto"
                  height="auto"
                  class="platform-features-content__img"
                >
                  <source src="@/assets/videos/platform/feature-1.mp4" type="video/mp4" />
                </video>
                <div class="platform-features-content__tile">
                  <figure class="platform-features-content__tile-icon">
                    <!-- <g-image
                      class="features-tile__icon-inner"
                      alt
                      src="@/assets/icons/features-icon.svg"
                    /> -->
                  </figure>
                  <div class="platform-features-content__tile-content">
                    <h4 class="platform-features-content__tile-heading">
                      {{ staticTabData.name }}
                    </h4>
                    <p class="platform-features-content__tile-text">
                      {{ staticTabData.text }}
                    </p>
                    <div class="platform-features-content__tile-list-wrapper">
                      <ul
                        v-for="feature in staticTabData.features"
                        :key="feature"
                        class="platform-features-content__tile-features"
                      >
                        <li class="platform-features-content__tile-features-item">
                          <g-image
                            class="platform-features-content__tile-features-icon"
                            alt
                            src="@/assets/icons/benefits-check.svg"
                          />
                          <p class="platform-features-content__tile-features-text">
                            {{ feature }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </main>
        </template>
      </mobile-tabs>

      <base-tabs
        v-model="activeTab"
        mode="light"
        columns="4"
        first-element="content"
      >
        <base-tab-item
          class="platform-features-tab"
          v-for="item in tabs"
          :key="item.heading"
          :name="item.name"
        >
          <h3 class="platform-features-tab__heading">
            {{ item.heading }}
          </h3>
        </base-tab-item>
        <template slot="content">
          <main class="platform-features__content">
            <transition name="fade" mode="out-in">
              <div
                class="platform-features-content"
                v-if="activeTab === 'brands'"
                key="brands"
              >
                <video
                  v-video-autoplay
                  key="collection"
                  muted
                  width="auto"
                  height="auto"
                  class="platform-features-content__img"
                >
                  <source src="@/assets/videos/platform/feature-1.mp4" type="video/mp4" />
                </video>

                <div class="platform-features-content__tile">
                  <figure class="platform-features-content__tile-icon">
                    <!-- <g-image
                      class="features-tile__icon-inner"
                      alt
                      src="@/assets/icons/features-icon.svg"
                    /> -->
                  </figure>
                  <div class="platform-features-content__tile-content">
                    <h4 class="platform-features-content__tile-heading">
                      {{ staticTabData.name }}
                    </h4>
                    <p class="platform-features-content__tile-text">
                      {{ staticTabData.text }}
                    </p>
                    <div class="platform-features-content__tile-list-wrapper">
                      <ul
                        v-for="feature in staticTabData.features"
                        :key="feature"
                        class="platform-features-content__tile-features"
                      >
                        <li class="platform-features-content__tile-features-item">
                          <g-image
                            class="platform-features-content__tile-features-icon"
                            alt
                            src="@/assets/icons/benefits-check.svg"
                          />
                          <p class="platform-features-content__tile-features-text">
                            {{ feature }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="platform-features-content"
                v-if="activeTab === 'marketing'"
                key="marketing"
              >
                <video
                  v-video-autoplay
                  key="collection"
                  muted
                  width="auto"
                  height="auto"
                  class="platform-features-content__img"
                >
                  <source src="@/assets/videos/platform/feature-1.mp4" type="video/mp4" />
                </video>
                <div class="platform-features-content__tile">
                  <figure class="platform-features-content__tile-icon">
                    <!-- <g-image
                      class="features-tile__icon-inner"
                      alt
                      src="@/assets/icons/features-icon.svg"
                    /> -->
                  </figure>
                  <div class="platform-features-content__tile-content">
                    <h4 class="platform-features-content__tile-heading">
                      {{ staticTabData.name }}
                    </h4>
                    <p class="platform-features-content__tile-text">
                      {{ staticTabData.text }}
                    </p>
                    <div class="platform-features-content__tile-list-wrapper">
                      <ul
                        v-for="feature in staticTabData.features"
                        :key="feature"
                        class="platform-features-content__tile-features"
                      >
                        <li class="platform-features-content__tile-features-item">
                          <g-image
                            class="platform-features-content__tile-features-icon"
                            alt
                            src="@/assets/icons/benefits-check.svg"
                          />
                          <p class="platform-features-content__tile-features-text">
                            {{ feature }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="platform-features-content"
                v-if="activeTab === 'product'"
                key="product"
              >
                <video
                  v-video-autoplay
                  key="collection"
                  muted
                  width="auto"
                  height="auto"
                  class="platform-features-content__img"
                >
                  <source src="@/assets/videos/platform/feature-1.mp4" type="video/mp4" />
                </video>
                <div class="platform-features-content__tile">
                  <figure class="platform-features-content__tile-icon">
                    <!-- <g-image
                      class="features-tile__icon-inner"
                      alt
                      src="@/assets/icons/features-icon.svg"
                    /> -->
                  </figure>
                  <div class="platform-features-content__tile-content">
                    <h4 class="platform-features-content__tile-heading">
                      {{ staticTabData.name }}
                    </h4>
                    <p class="platform-features-content__tile-text">
                      {{ staticTabData.text }}
                    </p>
                    <div class="platform-features-content__tile-list-wrapper">
                      <ul
                        v-for="feature in staticTabData.features"
                        :key="feature"
                        class="platform-features-content__tile-features"
                      >
                        <li class="platform-features-content__tile-features-item">
                          <g-image
                            class="platform-features-content__tile-features-icon"
                            alt
                            src="@/assets/icons/benefits-check.svg"
                          />
                          <p class="platform-features-content__tile-features-text">
                            {{ feature }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="platform-features-content"
                v-if="activeTab === 'bi'"
                key="bi"
              >
                <video
                  v-video-autoplay
                  key="collection"
                  muted
                  width="auto"
                  height="auto"
                  class="platform-features-content__img"
                >
                  <source src="@/assets/videos/platform/feature-1.mp4" type="video/mp4" />
                </video>
                <div class="platform-features-content__tile">
                  <figure class="platform-features-content__tile-icon">
                    <!-- <g-image
                      class="features-tile__icon-inner"
                      alt
                      src="@/assets/icons/features-icon.svg"
                    /> -->
                  </figure>
                  <div class="platform-features-content__tile-content">
                    <h4 class="platform-features-content__tile-heading">
                      {{ staticTabData.name }}
                    </h4>
                    <p class="platform-features-content__tile-text">
                      {{ staticTabData.text }}
                    </p>
                    <div class="platform-features-content__tile-list-wrapper">
                      <ul
                        v-for="feature in staticTabData.features"
                        :key="feature"
                        class="platform-features-content__tile-features"
                      >
                        <li class="platform-features-content__tile-features-item">
                          <g-image
                            class="platform-features-content__tile-features-icon"
                            alt
                            src="@/assets/icons/benefits-check.svg"
                          />
                          <p class="platform-features-content__tile-features-text">
                            {{ feature }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </main>
        </template>
      </base-tabs>
    </div>
  </section>
</template>

<script>
import { platform } from '@/data/staticData.js';

export default {
  name: 'PlatformFeatures',
  data: () => ({
    activeTab: 'brands',
    tabs: platform.keyFeatures,
    staticTabData: platform.keysTabData,
  }),
};
</script>

<style lang="sass" src="./PlatformFeatures.sass" />
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
