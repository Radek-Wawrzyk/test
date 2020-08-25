<template>
  <section class="section-whom">
    <div class="container">
      <base-header
        align="left"
        mode="dark"
        class="section-whom__header"
        heading="Launch your own lottery store"
        sub-heading="Get started"
        text="It takes only a few minutes to get started with Lottify. You’re just a few clicks away from selling lottery tickets."
      />

      <mobile-tabs
        v-model="activeTab"
        mode="dark"
        :data="tabs"
        showLabel
        labelColor="green"
      >
        <template slot="content">
          <main class="section-whom__content">
            <transition name="fade" mode="out-in">
              <div
                class="section-whom__content-item"
                v-if="activeTab === 'gambling'"
                key="gambling"
              >
                <p class="section-whom__content-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img
                  class="section-whom__content-img"
                  alt
                  src="@/assets/images/whom.png"
                />
              </div>
              <div
                class="section-whom__content-item"
                v-if="activeTab === 'retailers'"
                key="retailers"
              >
                <p class="section-whom__content-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img
                  class="section-whom__content-img"
                  alt
                  src="@/assets/images/whom.png"
                />
              </div>
              <div
                class="section-whom__content-item"
                v-if="activeTab === 'regulators'"
                key="regulators"
              >
                <p class="section-whom__content-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img
                  class="section-whom__content-img"
                  alt
                  src="@/assets/images/whom.png"
                />
              </div>
              <div
                class="section-whom__content-item"
                v-if="activeTab === 'everyone'"
                key="everyone"
              >
                <p class="section-whom__content-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img
                  class="section-whom__content-img"
                  alt
                  src="@/assets/images/whom.png"
                />
              </div>
            </transition>
          </main>
        </template>
      </mobile-tabs>

      <base-tabs
        v-model="activeTab"
        tabsLocation="bottom"
        mode="dark"
        tabs-location="bottom"
        first-element="tabs"
        :columns="4"
      >
        <base-tab-item
          class="section-whom-tab"
          v-for="item in tabs"
          :key="item.heading"
          :name="item.name"
        >
          <span class="section-whom-tab__label">
            {{ item.label }}
          </span>
          <h3 class="section-whom-tab__heading">
            {{ item.heading }}
          </h3>
        </base-tab-item>
        <template slot="content">
          <main class="section-whom__content">
            <transition name="fade" mode="out-in">
              <div
                class="section-whom__content-item"
                v-if="activeTab === 'gambling'"
                key="gambling"
              >
                <p class="section-whom__content-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img
                  class="section-whom__content-img"
                  alt
                  src="@/assets/images/whom.png"
                />
              </div>
              <div
                class="section-whom__content-item"
                v-if="activeTab === 'retailers'"
                key="retailers"
              >
                <p class="section-whom__content-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img
                  class="section-whom__content-img"
                  alt
                  src="@/assets/images/whom.png"
                />
              </div>
              <div
                class="section-whom__content-item"
                v-if="activeTab === 'regulators'"
                key="regulators"
              >
                <p class="section-whom__content-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img
                  class="section-whom__content-img"
                  alt
                  src="@/assets/images/whom.png"
                />
              </div>
              <div
                class="section-whom__content-item"
                v-if="activeTab === 'everyone'"
                key="everyone"
              >
                <p class="section-whom__content-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing. Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img
                  class="section-whom__content-img"
                  alt
                  src="@/assets/images/whom.png"
                />
              </div>
            </transition>
          </main>
        </template>
      </base-tabs>
    </div>
  </section>
</template>

<script>
import { whomTabs } from '@/data/staticData.js';

export default {
  name: 'SectionWhom',
  data: () => ({
    activeTab: 'gambling',
    tabs: whomTabs,
  }),
};
</script>

<style lang="sass" src="./SectionWhom.sass" />
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
