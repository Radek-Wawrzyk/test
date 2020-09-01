<template>
  <section class="platform-architecture platform-section" id="architecture">
    <div class="container">
      <base-header
        align="left"
        class="platform-architecture__header"
        heading="Platform architecture"
        sub-heading="ARCHITECTURE"
        text="Lottify will help you to create your own Lottery Platform out of the box. We deliver the best Lotto as a service solution in the market."
      />

      <base-tabs
        v-model="activeTab"
        mode="light"
        columns="4"
        first-element="content"
        class="architecture__tabs"
      >
        <base-tab-item
          class="platform-architecture-tab"
          :id="'step-' + i"
          v-for="(item, i) in tabs"
          :key="item.name"
          :name="item.name"
        >
          <h3 class="platform-architecture-tab__heading">
            {{ item.text }}
          </h3>
        </base-tab-item>
        <template slot="content">
          <main class="platform-architecture__content">
            <transition name="fade" mode="out-in">
              <div class="platform-architecture__imgarea">
                <!-- Step 1 -->
                <div
                  @click="activeTab = 'step1'"
                  class="step step--1"
                  :class="{ active: activeTab === 'step1' }"
                >
                  <base-button
                    title="Omnichannel GUI"
                    type="primary"
                    class="architecture__button architecture__button--xs architecture__button--soft mb-2"
                  >
                    Omnichannel GUI
                  </base-button>
                  <div class="iconwrapper">
                    <g-image
                      alt
                      src="@/assets/icons/architecture/mobileoptions.svg"
                      class="main-social-media__icon icon--step1"
                    />
                  </div>
                  <div class="hlines__wrapper">
                    <div class="hline__pulse hline__pulse--top"></div>
                    <div class="hline hline--left hline--green"></div>
                    <g-image
                      class="hline__img"
                      src="@/assets/icons/architecture/lock-blue.svg"
                    />
                    <div class="hline hline--right hline--blue"></div>
                    <div class="hline__pulse hline__pulse--bottom"></div>
                  </div>
                  <div class="gateway-wrapper">
                    <g-image
                      alt
                      src="@/assets/icons/architecture/api.svg"
                      class="main-social-media__icon"
                    />
                    <base-button
                      title="API Gateway"
                      type="primary"
                      class="architecture__button architecture__button--xs "
                    >
                      API Gateway
                    </base-button>
                  </div>
                </div>

                <!-- Step 2 -->
                <div
                  class="step step--2"
                  @click="activeTab = 'step2'"
                  :class="{ active: activeTab === 'step2' }"
                >
                  <div class="vlines__wrapper vlines__wrapper--left">
                    <div class="vline__pulse vline__pulse--top"></div>
                    <div class="vline vline--top vline--green"></div>
                    <g-image
                      class="vline__img"
                      src="@/assets/icons/architecture/lock-green.svg"
                    />
                    <div class="vline vline--bottom vline--green"></div>
                    <div class="vline__pulse vline__pulse--bottom"></div>
                  </div>
                  <g-image alt src="@/assets/icons/architecture/main.svg" />
                  <base-button
                    title="Scalable point of operations & management"
                    type="primary"
                    class="architecture__button"
                  >
                    Scalable point of operations & management
                  </base-button>
                  <div class="vlines__wrapper vlines__wrapper--right">
                    <div class="vline__pulse vline__pulse--top"></div>
                    <div class="vline vline--top vline--green"></div>
                    <g-image
                      class="vline__img"
                      src="@/assets/icons/architecture/lock-green.svg"
                    />
                    <div class="vline vline--bottom vline--green"></div>
                    <div class="vline__pulse vline__pulse--bottom"></div>
                  </div>
                </div>

                <!-- Step 3 -->
                <div
                  class="step step--3"
                  @click="activeTab = 'step3'"
                  :class="{ active: activeTab === 'step3' }"
                >
                  <base-button
                    title="State Authority Lotteries"
                    type="primary"
                    class="architecture__button architecture__button--xs architecture__button--soft mb-2"
                  >
                    State Authority Lotteries
                  </base-button>
                  <div class="iconwrapper iconwrapper--right">
                    <g-image
                      alt
                      src="@/assets/icons/architecture/government.svg"
                      class="main-social-media__icon"
                    />
                  </div>
                  <div class="hlines__wrapper">
                    <div class="hline__pulse hline__pulse--top"></div>
                    <div class="hline hline--left hline--green"></div>
                    <g-image
                      class="hline__img"
                      src="@/assets/icons/architecture/lock-blue.svg"
                    />
                    <div class="hline hline--right hline--blue"></div>
                    <div class="hline__pulse hline__pulse--bottom"></div>
                  </div>
                  <div class="gateway-wrapper">
                    <g-image
                      alt
                      src="@/assets/icons/architecture/cogwheels.svg"
                      class="main-social-media__icon"
                    />
                    <base-button
                      title="Ticket Processing"
                      type="primary"
                      class="architecture__button architecture__button--xs "
                    >
                      Ticket Processing
                    </base-button>
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
import { platform } from "@/data/staticData.js";

export default {
  name: "PlatformArchitecture",
  data: () => ({
    activeTab: "step1",
    tabs: platform.architectureFeatures
  })
};
</script>

<style lang="sass" src="./PlatformArchitecture.sass" />
<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.2s;
}

.fade-enter-active {
  transition-delay: 0.2s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
