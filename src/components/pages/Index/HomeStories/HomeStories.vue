<template>
  <section class="home-stories">
    <!-- <div class="container"> -->
      <main class="home-stories__inner">
        <swiper
          ref="stories"
          :options="options"
          class="home-stories__slider"
        >
          <swiper-slide
            v-for="item in stories"
            :key="item.id"
            class="home-stories-slide__inner"
          >
            <div class="home-stories-slide__content">
              <g-image
                class="home-stories-slide__content-logo"
                src="@/assets/images/stories-logo.png"
                alt=""
              />
              <g-image
                class="home-stories-slide__content-img"
                src="@/assets/images/stories.png"
                alt=""
              />
              <div class="home-stories-slide-info">
                <div class="home-stories-slide-info__author">
                  <g-image
                    class="home-stories-slide-info__author-avatar"
                    src="@/assets/images/stories-avatar.png"
                    alt=""
                  />
                  <div class="home-stories-slide-info__author-content">
                    <h5 class="home-stories-slide-info__author-name">
                      {{ item.story_author.name }}
                    </h5>
                    <p class="home-stories-slide-info__author-position">
                      {{ `${item.story_author.position} at ${item.story_company}` }}
                    </p>
                  </div>
                </div>
                <div class="home-stories-slide-info__content">
                  <p class="home-stories-slide-info__content-text">
                    {{ item.story_text }}
                  </p>
                  <base-button
                    :to="`/customers/${item.story_link}`"
                    :title="`Read ${item.story_company}'s Story`"
                    class="home-stories-slide-info__content-button"
                    type="text"
                    text-type="primary"
                    icon="arrow-right"
                  >
                    {{ `Read ${item.story_company}'s Story` }}
                  </base-button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div
            v-if="stories.length > 1"
            class="swiper-pagination home-stories__slider-pagination"
            slot="pagination"
          >
          </div>
        </swiper>

        <div class="home-stories__info">
          <div class="home-stories__info-inner container">
            <base-header
              max-width="450px"
              class="home-stories-slide__info-header"
              heading="See how Lottify is helping to <br/> start online lottery businesses "
              sub-heading="CUSTOMER STORY"
              text="Free and open source, Ionic offers a library of <br/> components, gestures, and tools."
            />
            <base-button
              to="/customers"
              title="See more success stories"
              class="home-stories-slide__info-button"
            >
              See more success stories
            </base-button>
          </div>
        </div>
      </main>
      <div class="home-stories__actions">
        <base-button
          to="/customers"
          title="See more success stories"
          class="home-stories__actions-button"
        >
          See more success stories
        </base-button>
      </div>
    <!-- </div> -->
  </section>
</template>

<script>
import { home } from '@/data/staticData.js';

export default {
  name: 'HomeStories',
  data() {
    return {
      stories: home.stories,
    };
  },
  computed: {
    options() {
      return {
        slidesPerView: 1,
        spaceBetween: 100,
        grabCursor: this.stories.length > 1,
        allowSlidePrev: this.stories.length > 1,
        allowSlideNext: this.stories.length > 1,
        preventInteractionOnTransition: this.stories.length < 1,
        loop: this.stories.length > 1,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<button class="${className} home-stories__slider-pagination-item"></button>`
          },
        },
      };
    },
  }
};
</script>

<style lang="sass" src="./HomeStories.sass" />
