<template>
  <header class="customer-header">
    <main-header
      :topImageURL="require('@/assets/images/customers/1.png')"
      class="customer-header__inner"
      heading="“We could not believe that such a quick return on investment is even possible”"
      text="Lotto.com is a Jersey City based start-up that will change the way lottery is played. It leverages the Lottify Platform to enable a highly secure, resilient and innovative lottery solution."
    >
      <div class="customer-header__content" slot="content">
        <base-button
          type="outline"
          title="See more stories"
          class="customer-header__content-button"
          to="/customers"
        >
          See more stories
        </base-button>
        <base-button
          type="primary"
          title="See more stories"
          class="customer-header__content-button"
          @click="scrollDown()"
        >
          Read Lotto.com story
        </base-button>
      </div>
      <div class="customer-header__info" slot="info">
        <g-image
          class="customer-header__info-img"
          src="@/assets/images/customers/story.png"
          alt
        />
      </div>
    </main-header>
  </header>
</template>

<script>
export default {
  name: 'CustomerHeader',
  methods: {
    scrollDown() {
      const target = document.querySelector('#customer-content');

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },
  },
};
</script>

<style lang="sass" src="./CustomerHeader.sass" />
