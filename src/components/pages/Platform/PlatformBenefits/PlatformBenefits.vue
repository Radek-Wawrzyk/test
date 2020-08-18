<template>
  <section class="platform-benefits platform-section" id="benefits">
    <div class="platform-benefits__content">
      <base-header
        mode="dark"
        align="center"
        class="platform-benefits__header"
        heading="You gain a whole lot by using our platform "
        sub-heading="Key benefits "
        text="Lottify offers so much more than just establishing your <br/> lottery business."
      />
      <ClientOnly>
        <v-touch
          v-if="isClient"
          class="platform-benefits-carousel"
          ref="carousel"
          @pan="onPan($event)"
          @panend="panEnd($event)"
          @tap="onPress"
          @press="onPress($event)"
          @pressup="onPressUp($event)"
          :pan-options="{ threshold: 0, pointers: 0, width: 100 }"
        >
          <div
            class="platform-benefits-carousel__inner"
            ref="carousel-inner"
          >
            <div class="platform-benefits-carousel__row">
              <div
                class="platform-benefits-slide"
                v-for="(item, index) in licensesTop"
                :key="index"
              >
                <figure class="platform-benefits-slide__icon">
                  <!-- <g-image
                    class="platform-benefits-slide__icon-inner"
                    alt=""
                    src=""
                  /> -->
                </figure>
                <div class="platform-benefits-slide__content">
                  <h4
                    class="platform-benefits-slide__heading"
                    v-html="item.name"
                  />
                  <p
                    class="platform-benefits-slide__text"
                    v-html="item.text"
                    :style="{
                      width: `${getTextWidth(item.text, 'normal 14px Poppins') / 4}px`
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="platform-benefits-carousel__row platform-benefits-carousel__row--bottom">
              <div
                class="platform-benefits-slide platform-benefits-slide--bottom"
                v-for="(item, index) in licensesBottom"
                :key="index"
              >
                <figure class="platform-benefits-slide__icon">
                  <!-- <g-image
                    class="platform-benefits-slide__icon-inner"
                    alt=""
                    src=""
                  /> -->
                </figure>
                <div class="platform-benefits-slide__content">
                  <h4
                    class="platform-benefits-slide__heading"
                    v-html="item.name"
                  />
                  <p
                    class="platform-benefits-slide__text"
                    v-html="item.text"
                    :style="{
                      width: `${getTextWidth(item.text, 'normal 14px Poppins') / 4}px`
                    }"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="platform-benefits-carousel__actions">
            <button
              @click="goPrev()"
              class="platform-benefits-carousel__actions-button"
            >
              <img
                class="platform-benefits__slider-button-icon"
                alt=""
                src="@/assets/icons/green-btn-prev.svg"
              />
            </button>
            <button
              @click="goNext()"
              class="platform-benefits-carousel__actions-button"
            >
              <img
                class="platform-benefits__slider-button-icon"
                alt=""
                src="@/assets/icons/green-btn-next.svg"
              />
            </button>
          </div>
        </v-touch>
      </ClientOnly>
    </div>
  </section>
</template>

<script>
import { platform } from '@/data/staticData.js';
import Vue from 'vue';

export default {
  name: 'PlatformBenefits',
  data: () => ({
    transform: 0,
    newTransform: 0,
    width: 0,
    activeFAQ: '',
    licenses: platform.benefits,
    licensesBottom: [],
    licensesTop: [],
  }),
  methods: {
    goNext() {
      if (this.width - this.transform - 300 >= 2800) {
        return;
      }

      this.transform = this.transform - 300;
      this.$refs['carousel-inner'].style.transform = `translateX( ${this.transform }px )`;
    },
    goPrev() {
      if (this.transform >= 600) {
        return;
      }

      this.transform = this.transform + 300;
      this.$refs['carousel-inner'].style.transform = `translateX( ${this.transform }px )`;
    },
    onPan(event) {
      this.newTransform = this.transform + event.deltaX;
      this.$refs['carousel-inner'].style.transform = `translateX( ${this.newTransform}px )`;
    },
    panEnd(event) {
      if (this.width - this.newTransform - 300 >= 2800) {
        return;
      }

      if (this.newTransform >= 600) {
        return;
      }

      this.transform = this.newTransform;
    },
    onPress(event) {
      this.$refs['carousel-inner'].style.cursor = 'grabbing';
    },
    onPressUp(event) {
      this.$refs['carousel-inner'].style.cursor = 'grab';
    },
    getTextWidth(text, font) {
      let canvas = this.getTextWidth.canvas || (this.getTextWidth.canvas = document.createElement("canvas"));
      let context = canvas.getContext("2d");
      context.font = font;
      let metrics = context.measureText(text);
      return metrics.width;
    },
    calculateWidth() {
      const carousel = this.$refs['carousel-inner'];
      carousel.style.width = `${ carousel.scrollWidth }px`;
      // this.transform = -carousel.scrollWidth / 4
      // this.$refs['carousel-inner'].style.transform = `translateX( ${-carousel.scrollWidth / 4 }px )`;
    },
  },
  watch: {
    isClient() {
      setTimeout(() => {
        this.isClient ? this.calculateWidth() : false;
      }, 300);
    },
  },
  mounted() {
    setTimeout(() => {
      this.calculateWidth();
    }, 100);
  },
  created() {
    if (process.isClient) {
      const VueTouch = require('vue-touch');
      Vue.use(VueTouch, { name: 'v-touch' });
    }

    this.licensesTop = this.licenses.filter((item, index) => index % 2 === 0);
    this.licensesBottom = this.licenses.filter((item, index) => index % 2 !== 0);
  },
  computed: {
    isClient() {
      return process.isClient;
    }
  },
};
</script>

<style lang="sass" src="./PlatformBenefits.sass" />
