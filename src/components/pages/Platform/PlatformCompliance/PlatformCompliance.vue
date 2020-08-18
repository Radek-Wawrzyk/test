<template>
  <section class="platform-section platform-compliance" id="compliance">
    <div class="container">
      <base-header
        max-width="520px"
        align="center"
        class="platform-compliance__header"
        heading="Regulation and Compliance"
        sub-heading="Compliance"
        text=" Lottify will help you to create your own Lottery Platform out of the box. We deliver the best Lotto as a service solution in the market."
      />
      <ul class="platform-compliance__listing">
        <li
          class="platform-compliance__item"
          v-for="item in compliance"
          :key="item.name"
        >
          <img
            class="platform-compliance__item-img"
            alt=""
            src="@/assets/images/platform/compliance.png"
          />
          <h4 class="platform-compliance__item-heading" v-html="item.name" />
          <p class="platform-compliance__item-text" v-html="item.text" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { platform } from '@/data/staticData.js';

export default {
  name: 'PlatformCompliance',
  data: () => ({
    compliance: platform.compliance,
  }),
};
</script>

<style lang="sass" src="./PlatformCompliance.sass" />
