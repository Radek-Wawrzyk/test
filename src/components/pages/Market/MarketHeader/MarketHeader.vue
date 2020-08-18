<template>
  <header class="market-header">
    <main-header
      heading="Solution Available on Every Continent"
      text="Sign up to be notified as soon as we launch in your country"
    >
      <div class="market-header-info" slot="info">
        <g-image
          src="@/assets/images/market.svg"
          class="market-header-info__map"
          alt
        />
        <div
          class="market-header-info__marker"
          v-for="mark in marks"
          :key="mark.id"
          :style="{
            left: `${mark.left}%`,
            top: `${mark.top}%`
          }"
        />
      </div>
      <div class="market-header-content" slot="content">
        <validation-observer
          tag="form"
          ref="market"
          class="market-header-content__form"
          @submit.prevent="validateForm()"
        >
          <div class="market-header-content__form-inputs">
            <base-input
              rules="required|email"
              name="email"
              v-model="email"
              placeholder="Email address"
              class="market-header-content__form-input"
              emailIcon
            />
            <base-select
              languageIcon
              helpfulText="Select country"
              placeholder="Your country"
              searchMode
              v-model="country"
              class="market-header-content__form-input market-header-content__form-select"
            >
              <template v-slot:items>
                <base-option
                  v-for="option in options"
                  :key="option.value"
                  :value="option.value"
                  :label="option.label"
                >
                  {{ option.label }}
                </base-option>
              </template>
            </base-select>
          </div>
          <base-button
            type="primary"
            title="Get started for free"
            class="market-header-content__button"
            @click="validateForm()"
          >
            Notify me
          </base-button>
          <p class="market-header-content__text">
            By submitting this form, I confirm that I have read and understood Lottify's
            <g-link
              to="/privacy-statment"
              title="Privacy Statement"
              aria-label="Privacy Statement"
              class="market-header-content__text-link"
            >
              Privacy Statement.
            </g-link>
          </p>
        </validation-observer>

      </div>
    </main-header>
  </header>
</template>

<script>
export default {
  name: 'MarketHeader',
  data: () => ({
    country: '',
    email: '',
    options: [
      {
        value: 'pl',
        label: 'PL',
      },
      {
        value: 'de',
        label: 'DE',
      },
      {
        value: 'uk',
        label: 'UK',
      },
      {
        value: 'es',
        label: 'ES',
      },
    ],
    marks: [
      {
        id: 1,
        left: 20,
        top: 28,
      },
      {
        id: 2,
        left: 49,
        top: 20,
      },
      {
        id: 3,
        left: 92,
        top: 30,
      },
      {
        id: 4,
        left: 92,
        top: 80,
      },
      {
        id: 5,
        left: 28,
        top: 58,
      },
      {
        id: 6,
        left: 68,
        top: 36,
      },
    ]
  }),
  methods: {
    async validateForm() {
      const status = await this.$refs.market.validate();
      status ? this.sendRequest() : false;
    },
    sendRequest() {
      console.log('sent!');
    },
  },
};
</script>

<style lang="sass" src="./MarketHeader.sass" />
