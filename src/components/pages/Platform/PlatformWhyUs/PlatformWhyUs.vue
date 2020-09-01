<template>
  <section class="platform-why platform-section" id="why">
    <div class="container">
      <base-header
        align="center"
        class="platform-why__header"
        heading="Why choosing Lottify?"
        sub-heading="Why us"
        text="Lottify will help you to create your own Lottery Platform out of the box. We deliver the best Lotto as a service solution in the market."
      />
      <main class="platform-why__content">
        <div class="platform-why__content-left">
          <base-accordion
            v-model="activeFAQ"
            class="platform-why__faq"
            isAccordion
          >
            <base-accordion-item
              class="platform-why-question"
              v-for="item in leftFAQ"
              :key="item.label"
              :name="item.label"
            >
              <button
                class="platform-why-question__top"
                slot="trigger"
              >
                <span class="platform-why-question__label">
                  {{ item.label }}
                </span>
                <h4 class="platform-why-question__heading">
                  {{ item.name }}
                </h4>
                <g-image
                  src="@/assets/icons/chevron.svg"
                  alt=""
                  class="platform-why-question__icon"
                />
              </button>
              <p class="platform-why-question__content" slot="content">
                {{ item.text }}
              </p>
            </base-accordion-item>
          </base-accordion>
        </div>
        <div class="platform-why__content-right">
          <base-accordion
            v-model="activeFAQ"
            class="platform-why__faq"
            isAccordion
          >
            <base-accordion-item
              class="platform-why-question"
              v-for="item in rightFAQ"
              :key="item.label"
              :name="item.label"
            >
              <button
                class="platform-why-question__top"
                slot="trigger"
              >
                <span class="platform-why-question__label">
                  {{ item.label }}
                </span>
                <h4 class="platform-why-question__heading">
                  {{ item.name }}
                </h4>
                <g-image
                  src="@/assets/icons/chevron.svg"
                  alt=""
                  class="platform-why-question__icon"
                />
              </button>
              <p class="platform-why-question__content" slot="content">
                {{ item.text }}
              </p>
            </base-accordion-item>
          </base-accordion>
        </div>
      </main>
      <main class="platform-why__content platform-why__content--mobile">
        <base-accordion
          v-model="activeFAQ"
          class="platform-why__faq"
          isAccordion
        >
          <base-accordion-item
            class="platform-why-question"
            v-for="item in faqList"
            :key="item.label"
            :name="item.label"
          >
            <button
              class="platform-why-question__top"
              slot="trigger"
            >
              <span class="platform-why-question__label">
                {{ item.label }}
              </span>
              <h4 class="platform-why-question__heading">
                {{ item.name }}
              </h4>
              <g-image
                src="@/assets/icons/chevron.svg"
                alt=""
                class="platform-why-question__icon"
              />
            </button>
            <p class="platform-why-question__content" slot="content">
              {{ item.text }}
            </p>
          </base-accordion-item>
        </base-accordion>
      </main>
    </div>
  </section>
</template>

<script>
import { platform } from '@/data/staticData.js';

export default {
  name: 'PlatformWhyUs',
  data: () => ({
    activeFAQ: '',
    faqList: platform.faq,
    leftFAQ: '',
    rightFAQ: '',
  }),
  created() {
    this.leftFAQ = this.faqList.filter((item, index) => index % 2 === 0);
    this.rightFAQ = this.faqList.filter((item, index) => index % 2 !== 0);
  },
};
</script>

<style lang="sass" src="./PlatformWhyUs.sass" />
