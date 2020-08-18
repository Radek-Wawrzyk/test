<template>
  <section class="customers-content">
    <div class="container container--big">
      <header class="customers-content-header">
        <g-image
          src="@/assets/images/customers/story.png"
          alt=""
          class="customers-content-header__img"
        />
        <span class="customers-content-header__label">
          {{ firstStory.category }}
        </span>
        <footer class="customers-content-header__info">
          <h3 class="customers-content-header__name">
            {{ firstStory.heading }}
          </h3>
          <base-button
            class="customers-content-header__link"
            :to="`/customers/${firstStory.link}`"
            :title="firstStory.heading"
            type="text"
            icon="small-right-arrow"
          >
            Read story
          </base-button>
        </footer>
      </header>

      <h4 class="customers-content-companies__text customers-content-companies__text--mobile">
        They have trusted us:
      </h4>
      <ul class="customers-content-companies">
        <li class="customers-content-companies__item">
          <h5 class="customers-content-companies__text">
            They have trusted us:
          </h5>
        </li>
        <li
          class="customers-content-companies__item"
          v-for="(company, index) in companies"
          :key="index"
        >
          <g-image
            :src="company"
            alt=""
            class="customers-content-companies__logo"
          />
        </li>
      </ul>

      <ul class="customers-content__list">
        <social-tile
          v-for="item in storiesPosts"
          :key="item.heading"
          :data="item"
          :label="item.category"
          link-text="Read Help Scout story"
          mode="stories"
        />
      </ul>

      <div class="customers-content__actions" v-if="!allLoadedStories">
        <base-button
          title="See all stories"
          class="customers-content__actions-button"
          @click="loadStories()"
        >
          Load more stories
        </base-button>
      </div>
    </div>
  </section>

</template>

<script>
import { stories } from '@/data/staticData.js';

export default {
  name: 'CustomersContent',
  data: () => ({
    stories: stories,
    allLoadedStories: false,
  }),
  methods: {
    loadStories() {
      this.stories = [...this.stories, ...stories];
      this.allLoadedStories = true;
    },
  },
  computed: {
    companies() {
      return [
        require('@/assets/images/customers/1.png'),
        require('@/assets/images/customers/2.png'),
        require('@/assets/images/customers/3.png'),
        require('@/assets/images/customers/4.png'),
        require('@/assets/images/customers/5.png'),
      ];
    },
    firstStory() {
      return this.stories[0];
    },
    storiesPosts() {
      const stories = this.stories;
      return stories.filter((item, index) => index !== 0);
    },
  },
};
</script>

<style lang="sass" src="./CustomersContent.sass" />
