<template>
  <section class="blog-content">
    <div class="container container--big">
      <social-tile
        class="blog-content__first-tile"
        :data="firstPost"
        newest
        mode="blog"
      />
      <ul class="blog-content__listing">
        <social-tile
          v-for="item in blogPosts"
          :key="item.heading"
          :data="item"
          mode="blog"
        />
      </ul>
      <div class="blog-content__actions" v-if="!allLoadedPosts">
        <base-button
          title="See all blog posts"
          class="blog-content__actions-button"
          to="https://medium.com/"
          nativeLink
        >
          See all blog posts
        </base-button>
      </div>
    </div>
  </section>
</template>

<script>
import { posts } from '@/data/staticData.js';

export default {
  name: 'BlogContent',
  data: () => ({
    posts: posts,
    allLoadedPosts: false,
  }),
  computed: {
    firstPost() {
      return this.posts[0];
    },
    blogPosts() {
      const posts = this.posts;
      return posts.filter((item, index) => index !== 0);
    },
  },
};
</script>

<style lang="sass" src="./BlogContent.sass" />
