<template>
  <section class="section-start">
    <div class="container">
      <div class="section-start__content">
        <base-header
          class="section-start__header"
          align="center"
          heading="Start Your Own Lottery Business"
          text="Turn your idea into a growth engine. Sign up for Lottify and start <br/> developing your own online Lotto store in just a few clicks."
        />
        <validation-observer
          tag="form"
          ref="email"
          class="section-start__form"
          @submit.prevent="validateForm()"
        >
          <div class="section-start__form-group">
            <div class="section-start__form-input">
              <base-input
                rules="email|required"
                name="email"
                id="1"
                v-model="email"
                placeholder="Email address"
                emailIcon
              />
              <info-bar
                class="section-start__form-info"
                mode="light"
                size="small"
                label-text="NO CC"
                text="Signing up is completely free of charge. No credit card required."
              />
            </div>
            <base-button
              @click="validateForm()"
              title="Get started for free"
              type="primary"
              class="section-start__form-sumbmit"
            >
              Get started for free
            </base-button>
          </div>

        </validation-observer>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionStart',
  data: () => ({
    email: '',
  }),
  methods: {
    async validateForm() {
      const status = await this.$refs.email.validate();
      status ? this.sendRequest() : false;
    },
  },
  sendRequest() {
    console.log('sent!');
  },
};
</script>

<style lang="sass" src="./SectionStart.sass" />
