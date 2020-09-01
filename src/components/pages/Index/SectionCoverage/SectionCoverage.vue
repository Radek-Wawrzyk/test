<template>
  <section class="section-coverage">
    <div class="container">
      <base-header
        align="center"
        class="section-coverage__header"
        heading="Launch your own lottery store"
        sub-heading="Get started"
        text="It takes only a few minutes to get started with Lottify. You’re just a few clicks away from selling lottery tickets."
      />
      <main class="section-coverage__content">
        <world-map
          :countries="activeCountries"
          :marker="activePin"
        />
      </main>

      <div class="section-coverage-mobile__wrapper">
        <h5 class="section-coverage-mobile__selected-name">
          {{ selectedTabHeading }}
        </h5>
        <ul class="section-coverage-mobile">
          <li
            class="section-coverage-mobile__item"
            v-for="item in tabs"
            :key="item.heading"
          >
            <button
              class="section-coverage-mobile__button"
              :class="[
                item.name === activeTab ? 'section-coverage-mobile__button--active' : '',
              ]"
              @click="activeTab = item.name;selectedTabHeading = item.heading"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </div>

      <base-tabs
        v-model="activeTab"
        mode="light"
      >
        <base-tab-item
          class="section-coverage-tab"
          v-for="item in tabs"
          :key="item.heading"
          :name="item.name"
        >
          <span class="section-coverage-tab__label">
            {{ item.label }}
          </span>
          <h3 class="section-coverage-tab__heading">
            {{ item.heading }}
          </h3>
          <p class="section-coverage-tab__text">
            {{ item.text }}
          </p>
        </base-tab-item>
      </base-tabs>
    </div>
  </section>
</template>

<script>
import { coverageTabs } from '@/data/staticData.js';

export default {
  name: 'SectionCoverage',
  data: () => ({
    activeTab: 'singapore',
    selectedTabHeading: '',
    tabs: coverageTabs,
    activePin: null,
    activeCountries: null,
    backupPins: [
      {
        "title": "Frankfurt",
        "key_name": 'frankfurt',
        "latitude": 50.110924,
        "longitude": 8.682127,
      },
      {
        "title": "New Virginia",
        "key_name": 'new_virgina',
        "latitude": 37.070831,
        "longitude": -76.484444
      },
      {
        "title": "Singapore",
        "key_name": 'singapore',
        "latitude": 1.2902,
        "longitude": 103.8519,
        "left": 40,
        "top": 40,
      },
    ],
  }),
  computed: {
    frankfurtPin() {
      return [
        {
          "title": "Frankfurt",
          "mobile_title": "Frk",
          "key_name": 'frankfurt',
          "left": 51,
          "top": 24,
        },
      ];
    },
    virginiaPin() {
      return [
        {
          "title": "New Virginia",
          "mobile_title": "Vir",
          "key_name": 'new_virgina',
          "left": 28,
          "top": 34,
        },
      ];
    },
    singaporePin() {
      return [
        {
          "title": "Singapore",
          "mobile_title": "Sin",
          "key_name": 'singapore',
          "left": 83,
          "top": 60,
        },
      ];
    },
    frankfurtData() {
      return [
        {
          "code": "FR",
          "name": "France",
          "value": 50,
          "fill": '#4070C5'
        },
        {
          "code": "DE",
          "name": "Germany",
          "value": 50,
          "fill": '#4070C5'
        },
        {
          "code": "PL",
          "name": "France",
          "value": 50,
          "fill": '#4070C5'
        },
      ];
    },
    singaporeData() {
      return [
        {
          "code": "RU",
          "name": "Germany",
          "value": 50,
          "fill": '#7799F6'
        },
        {
          "code": "ES",
          "name": "France",
          "value": 50,
          "fill": '#7799F6'
        },
        {
          "code": "IT",
          "name": "France",
          "value": 50,
          "fill": '#7799F6'
        },
        {
          "code": "TR",
          "name": "Germany",
          "value": 50,
          "fill": '#AEC2F8'
        },
        {
          "code": "EG",
          "name": "France",
          "value": 50,
          "fill": '#AEC2F8'
        },
        {
          "code": "PT",
          "name": "France",
          "value": 50,
          "fill": '#AEC2F8'
        },
      ];
    },
    virginiaData() {
      return [
        {
          "code": "UK",
          "name": "France",
          "value": 50,
          "fill": '#4070C5'
        },
        {
          "code": "FR",
          "name": "France",
          "value": 50,
          "fill": '#4070C5'
        },
        {
          "code": "RU",
          "name": "Germany",
          "value": 50,
          "fill": '#7799F6'
        },
      ];
    },
  },
  methods: {

  },
  watch: {
    activeTab() {
      switch (this.activeTab) {
        case 'singapore': {
          this.activePin = this.singaporePin[0];
          this.activeCountries = this.singaporeData;
          break;
        };
        case 'frankfurt': {
          this.activePin = this.frankfurtPin[0];
          this.activeCountries = this.frankfurtData;
          break;
        };
        case 'new_virgina': {
          this.activePin = this.virginiaPin[0];
          this.activeCountries = this.virginiaData;
          break;
        };
        default: {
          break;
        }
      }
    }
  },
  created() {
    this.selectedTabHeading = 'Singapore';

    switch (this.activeTab) {
      case 'singapore': {
        this.activePin = this.singaporePin[0];
        this.activeCountries = this.singaporeData;
        break;
      };
      case 'frankfurt': {
        this.activePin = this.frankfurtPin[0];
        this.activeCountries = this.frankfurtData;
        break;
      };
      case 'new_virgina': {
        this.activePin = this.virginiaPin[0];
        this.activeCountries = this.virginiaData;
        break;
      };
      default: {
        break;
      }
    }
  },
};
</script>

<style lang="sass" src="./SectionCoverage.sass" />
<style>
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.2s;
  }

  .fade-enter-active {
    transition-delay: 0.2s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
