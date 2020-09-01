<template>
  <section class="platform-licences platform-section" id="licenses">
    <div class="platform-licences__inner">
      <base-header
        max-width="520px"
        align="center"
        class="platform-licences__header"
        heading="Certified & Licensed <br/> by Multiple Organizations "
        sub-heading="LICENSES "
        text="Lottify will help you to create your own Lottery Platform out of the box. We deliver the best Lotto as a service solution in the market."
      />
      <div class="platform-licences__content">
        <div class="platform-licences-slide">
          <g-image
            class="platform-licences-slide__img"
            alt=""
            src="@/assets/images/platform/license.png"
          />
          <p
            class="platform-licences-slide__text"
          >
            he New Jersey Lottery is run by the U.S. state of New Jersey. Its In-house draw games include Pick-3, Pick-4, Jersey Cash 5, 5 Card Cash, Pick-6, Quick Draw, and Cash Pop
          </p>
        </div>
        <div class="platform-licences-slide platform-licences-slide--soon">
          <g-image
            class="platform-licences-slide__img"
            alt=""
            src="@/assets/images/platform/soon-license.png"
          />
          <p
            class="platform-licences-slide__text platform-licences-slide__text--soon"
          >
            More cooming soon...
          </p>
        </div>
      </div>
      <!-- <swiper
        ref="license"
        :options="options"
        class="platform-licences__slider"
      >
        <swiper-slide
          v-for="item in licenses"
          :key="item.text"
          class="platform-licences-slide__inner"
        >
          <div class="platform-licences-slide">
            <g-image
              class="platform-licences-slide__img"
              alt=""
              src="@/assets/images/platform/compliance.png"
            />
            <p
              class="platform-licences-slide__text"
              v-html="item.text"
            />
          </div>
        </swiper-slide>
        <button
          class="platform-licences__slider-button platform-licences__slider-button--prev"
          slot="button-prev"
          @click="goPrev()"
          v-if="!this.commingSoon"
        >
          <g-image
            class="platform-licences__slider-button-icon"
            alt=""
            src="@/assets/icons/blue-btn-prev.svg"
          />
        </button>
        <button
          class="platform-licences__slider-button"
          slot="button-next"
          @click="goNext()"
          v-if="!this.commingSoon"
        >
          <g-image
            class="platform-licences__slider-button-icon"
            alt=""
            src="@/assets/icons/blue-btn-next.svg"
          />
        </button>
      </swiper> -->
    </div>
  </section>
</template>

<script>
import { platform } from '@/data/staticData.js';

export default {
  name: 'PlatformLicences',
  data: () => ({
    activeFAQ: '',
    licenses: platform.licenses,
    commingSoon: true,
  }),
  methods: {
    goNext() {
      this.slider.slideNext();
    },
    goPrev() {
      this.slider.slidePrev();
    },
  },
  computed: {
    options() {
      return {
        slidesPerView: 3,
        spaceBetween: 38,
        grabCursor: true,
        loop: false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          920: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      };
    },
    slider() {
      return this.$refs.license.$swiper;
    },
  },
};
</script>

<style lang="sass" src="./PlatformLicences.sass" />
