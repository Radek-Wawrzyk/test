<template>
  <section class="market-content">
    <div class="container">
      <base-header
        align="center"
        class="market-content__header"
        heading="Countries supported "
        sub-heading="Global coverage"
        text="Turn your idea into a growth engine. Sign up for Lottify and start <br/> developing your own online Lotto store in just a few clicks."
      />
      <ul class="market-content__info">
        <li
          class="market-content-tile"
          v-for="country in countries"
          :key="country.name"
        >
          <header class="market-content-tile__header">
            <g-image
              src="@/assets/images/flag.png"
              class="market-content-tile__flag"
              alt=""
            />
            <h3 class="market-content-tile__name">
              {{ country.name }}
            </h3>
            <span class="market-content-tile__soon" v-if="country.comming_soon">
              Coming soon
            </span>
          </header>
          <ul class="market-content-tile__list">
            <li
              class="market-content-tile__list-item"
              v-for="feature in country.features"
              :key="feature"
            >
              <g-image
                src="@/assets/icons/benefits-check.svg"
                class="market-content-tile__list-icon"
                alt=""
              />
              <p class="market-content-tile__list-text">
                {{ feature }}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "MarketSection",
  computed: {
    countries() {
      return [
        {
          name: 'USA',
          flagIcon: '',
          comming_soon: false,
          features: [
            'Transactions',
            'Auth',
            'Balance',
            'Identity',
            'Investments',
            'Assets',
            'Liabilities',
            'Income',
          ],
        },
        {
          name: 'Canada',
          flagIcon: '',
          comming_soon: true,
          features: [
            'Transactions',
            'Auth',
            'Balance',
            'Identity',
            'Investments',
            'Assets',
          ],
        },
        {
          name: 'UK',
          flagIcon: '',
          comming_soon: true,
          features: [
            'Transactions',
            'Auth',
            'Balance',
            'Identity',
            'Investments',
            'Assets',
            'Payment initiation',
          ],
        },
      ];
    },
  },
};
</script>

<style lang="sass" src="./MarketContent.sass" />
