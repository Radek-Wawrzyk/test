<template>
  <section class="faq-info">
    <div class="container container--big">
      <div class="faq-info__inner">
        <h3 class="faq-info__tabs-heading faq-info__tabs-heading--mobile">
          Topic
        </h3>
        <mobile-tabs
          v-model="activeTab"
          mode="light"
          :data="tabs"
        >
          <template slot="content">
            <transition name="fade" mode="out-in">
              <base-accordion
                v-model="activeFAQ"
                class="faq-info__faq"
                v-if="activeTab === 'category-1'"
                key="category-1"
                isAccordion
              >
                <base-accordion-item
                  class="faq-info-question"
                  v-for="item in questions"
                  :key="item.label"
                  :name="item.label"
                >
                  <button
                    class="faq-info-question__top"
                    slot="trigger"
                  >
                    <span class="faq-info-question__label">
                      {{ item.label }}
                    </span>
                    <h4 class="faq-info-question__heading">
                      {{ item.name }}
                    </h4>
                    <img
                      src="@/assets/icons/chevron.svg"
                      alt=""
                      class="faq-info-question__icon"
                    />
                  </button>
                  <p class="faq-info-question__content" slot="content">
                    {{ item.text }}
                  </p>
                </base-accordion-item>
              </base-accordion>
              <base-accordion
                v-model="activeFAQ"
                class="faq-info__faq"
                v-if="activeTab === 'category-2'"
                key="category-2"
                isAccordion
              >
                <base-accordion-item
                  class="faq-info-question"
                  v-for="item in questions"
                  :key="item.label"
                  :name="item.label"
                >
                  <button
                    class="faq-info-question__top"
                    slot="trigger"
                  >
                    <span class="faq-info-question__label">
                      {{ item.label }}
                    </span>
                    <h4 class="faq-info-question__heading">
                      {{ item.name }}
                    </h4>
                    <img
                      src="@/assets/icons/chevron.svg"
                      alt=""
                      class="faq-info-question__icon"
                    />
                  </button>
                  <p class="faq-info-question__content" slot="content">
                    {{ item.text }}
                  </p>
                </base-accordion-item>
              </base-accordion>
              <base-accordion
                v-model="activeFAQ"
                class="faq-info__faq"
                v-if="activeTab === 'category-3'"
                key="category-3"
                isAccordion
              >
                <base-accordion-item
                  class="faq-info-question"
                  v-for="item in questions"
                  :key="item.label"
                  :name="item.label"
                >
                  <button
                    class="faq-info-question__top"
                    slot="trigger"
                  >
                    <span class="faq-info-question__label">
                      {{ item.label }}
                    </span>
                    <h4 class="faq-info-question__heading">
                      {{ item.name }}
                    </h4>
                    <img
                      src="@/assets/icons/chevron.svg"
                      alt=""
                      class="faq-info-question__icon"
                    />
                  </button>
                  <p class="faq-info-question__content" slot="content">
                    {{ item.text }}
                  </p>
                </base-accordion-item>
              </base-accordion>
              <base-accordion
                v-model="activeFAQ"
                class="faq-info__faq"
                v-if="activeTab === 'category-4'"
                key="category-4"
                isAccordion
              >
                <base-accordion-item
                  class="faq-info-question"
                  v-for="item in questions"
                  :key="item.label"
                  :name="item.label"
                >
                  <button
                    class="faq-info-question__top"
                    slot="trigger"
                  >
                    <span class="faq-info-question__label">
                      {{ item.label }}
                    </span>
                    <h4 class="faq-info-question__heading">
                      {{ item.name }}
                    </h4>
                    <img
                      src="@/assets/icons/chevron.svg"
                      alt=""
                      class="faq-info-question__icon"
                    />
                  </button>
                  <p class="faq-info-question__content" slot="content">
                    {{ item.text }}
                  </p>
                </base-accordion-item>
              </base-accordion>
            </transition>
          </template>
        </mobile-tabs>

        <div class="faq-info__content">
          <div class="faq-info__tabs">
            <h3 class="faq-info__tabs-heading">
              Topic
            </h3>
            <base-tabs
              v-model="activeTab"
              mode="light"
              columns="1"
              direction="vertical"
              directionLocation="left"
              class="faq-info__tabs-inner"
            >
              <base-tab-item
                class="faq-info-tab"
                v-for="item in tabs"
                :key="item.heading"
                :name="item.name"
              >
                <h3 class="faq-info-tab__heading">
                  {{ item.heading }}
                </h3>
              </base-tab-item>
            </base-tabs>
          </div>
          <div class="faq-info__content-list">
            <transition name="fade" mode="out-in">
              <base-accordion
                v-model="activeFAQ"
                class="faq-info__faq"
                v-if="activeTab === 'category-1'"
                key="category-1"
                isAccordion
              >
                <base-accordion-item
                  class="faq-info-question"
                  v-for="item in questions"
                  :key="item.label"
                  :name="item.label"
                >
                  <button
                    class="faq-info-question__top"
                    slot="trigger"
                  >
                    <span class="faq-info-question__label">
                      {{ item.label }}
                    </span>
                    <h4 class="faq-info-question__heading">
                      {{ item.name }}
                    </h4>
                    <img
                      src="@/assets/icons/chevron.svg"
                      alt=""
                      class="faq-info-question__icon"
                    />
                  </button>
                  <p class="faq-info-question__content" slot="content">
                    {{ item.text }}
                  </p>
                </base-accordion-item>
              </base-accordion>
              <base-accordion
                v-model="activeFAQ"
                class="faq-info__faq"
                v-if="activeTab === 'category-2'"
                key="category-2"
                isAccordion
              >
                <base-accordion-item
                  class="faq-info-question"
                  v-for="item in questions"
                  :key="item.label"
                  :name="item.label"
                >
                  <button
                    class="faq-info-question__top"
                    slot="trigger"
                  >
                    <span class="faq-info-question__label">
                      {{ item.label }}
                    </span>
                    <h4 class="faq-info-question__heading">
                      {{ item.name }}
                    </h4>
                    <img
                      src="@/assets/icons/chevron.svg"
                      alt=""
                      class="faq-info-question__icon"
                    />
                  </button>
                  <p class="faq-info-question__content" slot="content">
                    {{ item.text }}
                  </p>
                </base-accordion-item>
              </base-accordion>
              <base-accordion
                v-model="activeFAQ"
                class="faq-info__faq"
                v-if="activeTab === 'category-3'"
                key="category-3"
                isAccordion
              >
                <base-accordion-item
                  class="faq-info-question"
                  v-for="item in questions"
                  :key="item.label"
                  :name="item.label"
                >
                  <button
                    class="faq-info-question__top"
                    slot="trigger"
                  >
                    <span class="faq-info-question__label">
                      {{ item.label }}
                    </span>
                    <h4 class="faq-info-question__heading">
                      {{ item.name }}
                    </h4>
                    <img
                      src="@/assets/icons/chevron.svg"
                      alt=""
                      class="faq-info-question__icon"
                    />
                  </button>
                  <p class="faq-info-question__content" slot="content">
                    {{ item.text }}
                  </p>
                </base-accordion-item>
              </base-accordion>
              <base-accordion
                v-model="activeFAQ"
                class="faq-info__faq"
                v-if="activeTab === 'category-4'"
                key="category-4"
                isAccordion
              >
                <base-accordion-item
                  class="faq-info-question"
                  v-for="item in questions"
                  :key="item.label"
                  :name="item.label"
                >
                  <button
                    class="faq-info-question__top"
                    slot="trigger"
                  >
                    <span class="faq-info-question__label">
                      {{ item.label }}
                    </span>
                    <h4 class="faq-info-question__heading">
                      {{ item.name }}
                    </h4>
                    <img
                      src="@/assets/icons/chevron.svg"
                      alt=""
                      class="faq-info-question__icon"
                    />
                  </button>
                  <p class="faq-info-question__content" slot="content">
                    {{ item.text }}
                  </p>
                </base-accordion-item>
              </base-accordion>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { platform } from '@/data/staticData.js';
import { faq } from '@/data/staticData.js';

export default {
  name: 'FaqInfo',
  data: () => ({
    activeTab: '',
    activeFAQ: '',
    tabs: faq.tabs,
    questions: faq.questions,
  }),
  created() {
    this.activeTab = this.tabs[0].name;
  },
};
</script>

<style lang="sass" src="./FaqInfo.sass" />
