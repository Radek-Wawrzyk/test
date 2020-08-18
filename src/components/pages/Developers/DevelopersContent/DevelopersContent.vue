<template>
  <section class="developers-content">
    <div class="container container--big">
       <base-header
        align="center"
        class="developers-content__header"
        heading="Build your custom lottery solution "
        sub-heading="Developer resources"
        text="Turn your idea into a growth engine. Sign up for Lottify and start <br/> developing your own online Lotto store in just a few clicks."
      />
      <ul class="developers-content__listing">
        <social-tile
          v-for="item in posts"
          :key="item.heading"
          :data="item"
          :label="item.category"
          mode="developers"
        />
      </ul>
      <div class="developers-content__actions" v-if="!allLoadedPosts">
        <base-button
          title="Load more posts"
          class="developers-content__actions-button"
          @click="loadMorePosts()"
        >
          See all resources
        </base-button>
      </div>
    </div>
  </section>
</template>

<script>
import { developers } from '@/data/staticData.js';

export default {
  name: 'DevelopersContent',
  data: () => ({
    posts: developers,
    allLoadedPosts: false,
  }),
  methods: {
    loadMorePosts() {
      this.posts = [...this.posts, ...developers];
      this.allLoadedPosts = true;
    },
  }
};
</script>

<style lang="sass" src="./DevelopersContent.sass" />
