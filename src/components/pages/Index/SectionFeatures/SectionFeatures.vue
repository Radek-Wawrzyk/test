<template>
  <section
    class="features"
    :class="[
      mode === 'benefits' ? 'features--benefits' : '',
    ]"
  >
    <div class="container">
      <div class="features-content">
        <div
          class="features-content__info"
          :style="[
            mode === 'benefits' ? { 'order' : 1 } : ''
          ]"
        >
          <base-header
            :heading="title"
            :sub-heading="subTitle"
            aling="left"
            class="features-content__info-header"
          />
          <p class="features-content__info-sub-text">
           {{ subText }}
          </p>
          <p class="features-content__info-text">
            {{ text }}
          </p>
          <base-button
            :to="mode === 'benefits' ? '/platform#benefits' : '/platform#features'"
            :title="mode === 'benefits' ? 'See all benefits' : 'See all features'"
            class="features-content__info-button"
          >
            {{ mode === 'benefits' ? 'See all benefits' : 'See all features' }}
          </base-button>
        </div>
        <div
          class="features-content__features"
          :class="[
            mode === 'benefits' ? 'features-content__features--benefits' : '',
          ]"
        >
          <div
            class="features-tile"
            :class="[
              mode === 'benefits' ? 'features-tile--benefits' : '',
            ]"
            v-for="item in data"
            :key="item.name"
          >
            <figure
              class="features-tile__icon"
            >
              <g-image
                class="features-tile__icon-inner"
                alt
                :src="require(`@/assets/icons/index/${item.key}.svg`)"
              />
            </figure>
            <div
              class="features-tile__lines"
              :style="{ backgroundImage: `url('${require('@/assets/icons/lines.svg')}')` }"
            />
            <div class="features-tile__content">
              <h4 class="features-tile__heading">
                {{ item.name }}
              </h4>
              <p class="features-tile__text">
                {{ item.text }}
              </p>
              <div class="data.features__list-wrapper" v-if="item.features.length">
                <ul
                  v-for="feature in item.features"
                  :key="feature"
                  class="features-tile__features"
                >
                  <li class="features-tile__features-item">
                    <g-image
                      class="features-tile__features-icon"
                      alt
                      src="@/assets/icons/benefits-check.svg"
                    />
                    <p class="features-tile__features-text">
                      {{ feature }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="features-tile">
            <figure
              class="features-tile__icon"
            >
              <g-image
                class="features-tile__icon-inner"
                alt
                :src="mode === 'benefits' ? require('@/assets/icons/index/more-2.svg') : require('@/assets/icons/index/more.svg')"
              />
            </figure>
            <div class="features-tile__content">
              <h4 class="features-tile__heading features-tile__heading--more">
                And many more...
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionFeatures',
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    subText: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: false,
    },
    mode: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass" src="./SectionFeatures.sass" />
