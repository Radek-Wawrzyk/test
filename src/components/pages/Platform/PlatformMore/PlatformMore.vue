<template>
  <section class="platform-more">
    <div class="container">
      <base-header
        align="center"
        class="platform-more__header"
        heading="...and Even More Scalable and Managed Features"
      />
      <main class="platform-more__content">
        <ul class="platform-more__list">
          <li
            class="platform-more__tile"
            v-for="item in features"
            :key="item.name"
          >
            <figure class="platform-more__tile-icon">
              <g-image
                class="features-tile__icon-inner"
                alt
                :src="require(`@/assets/icons/platform/${item.key}.svg`)"
              />
            </figure>
            <div class="platform-more__tile-content">
              <h4 class="platform-more__tile-heading">
                {{ item.name }}
              </h4>
              <p class="platform-more__tile-text">
                {{ item.text }}
              </p>
              <div class="platform-more__tile-list-wrapper">
                <ul
                  v-for="feature in item.features"
                  :key="feature"
                  class="platform-more__tile-features"
                >
                  <li class="platform-more__tile-features-item">
                    <img
                      class="platform-more__tile-features-icon"
                      alt
                      src="@/assets/icons/benefits-check.svg"
                    />
                    <p class="platform-more__tile-features-text">
                      {{ feature }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </main>
      <footer class="platform-more__bottom" v-if="!allLoadedFeatures">
        <base-button
          title="Show more features"
          class="platform-more__button"
          @click="loadMore()"
        >
          Show more features
        </base-button>
      </footer>
    </div>
  </section>
</template>

<script>
import { platform } from '@/data/staticData.js';

export default {
  name: 'PlatformMore',
  data: () => ({
    moreFeatures: platform.more,
    allLoadedFeatures: false,
    features: [],
    featuresAll: [],
    windowWidth: 0,
  }),
  computed: {
    features() {
      const projects = platform.more;
      return projects.slice(0, 6);
    },
  },
  mounted() {
    const projects = platform.more;
    this.windowWidth = window.innerWidth;

    if (this.windowWidth >= 768) {
      this.features = projects.slice(0, 6);
      this.featuresAll = projects.slice(6);
    } else {
      this.features = projects.slice(0, 3);
      this.featuresAll = projects.slice(3);
    }

    window.onresize = () => {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth >= 768) {
        this.features = projects.slice(0, 6);
        this.featuresAll = projects.slice(6);
      } else {
        this.features = projects.slice(0, 3);
        this.featuresAll = projects.slice(3);
      }
    };
  },
  methods: {
    loadMore() {
      this.features = [...this.features, ...this.featuresAll];
      this.allLoadedFeatures = true;
    },
    setFeatures() {

    }
  },
};
</script>

<style lang="sass" src="./PlatformMore.sass" />
