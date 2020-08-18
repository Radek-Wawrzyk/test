<template>
  <section class="contact-form">
    <div class="container">
       <base-header
        max-width="440px"
        align="center"
        class="contact-form__header"
        heading="Get in touch with us"
        sub-heading="MESSAGE FORM"
        text="Lottify is an innovative solution that allows you to build and deploy lottery stores with minimum effort. "
      />
      <validation-observer
        tag="form"
        ref="contact"
        class="contact-form__inner"
        @submit.prevent="validateForm()"
      >
        <div class="contact-form__row">
          <base-input
            rules="required"
            name="fullname"
            v-model="fullname"
            placeholder="Full name"
            class="contact-form__input"
          />
          <base-input
            rules="required|email"
            name="email"
            v-model="email"
            placeholder="Email address"
            class="contact-form__input"
          />
        </div>
        <div class="contact-form__row">
          <base-input
            rules="required"
            name="company"
            v-model="company"
            placeholder="Company"
            class="contact-form__input"
          />
          <base-select
            helpfulText="Select subject"
            placeholder="Select subject"
            searchMode
            v-model="subject"
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
        <div class="contact-form__row contact-form__row--single">
          <base-textarea
            rules="required"
            name="message"
            v-model="message"
            placeholder="Your message"
            class="contact-form__input"
            :resize="false"
          />
        </div>
        <div class="contact-form__row contact-form__row--single">
          <base-checkbox
            v-model="privacy"
            class="contact-form__checkbox"
            required
          >
            I hereby consent to having my personal data process according to the
            <g-link
              to="/privacy-policy"
              class="contact-form__link"
              title="Privacy Policy"
              aria-label="Privacy Policy"
            >
              Privacy Policy.
            </g-link>
          </base-checkbox>
          <base-button
            type="primary"
            @click="validateForm()"
            title="Send message"
            class="contact-form__button"
          >
            Send message
          </base-button>
        </div>

      </validation-observer>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    fullname: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    privacy: false,
    options: [
      {
        value: 'work',
        label: 'Work',
      },
      {
        value: 'business',
        label: 'Business',
      },
      {
        value: 'marketing',
        label: 'Marketing',
      },
      {
        value: 'Other',
        label: 'other',
      },
    ],
  }),
  methods: {
    async validateForm() {
      const status = await this.$refs.contact.validate();
      status ? this.sendRequest() : false;
    },
    sendRequest() {
      console.log('sent!');
    },
  },
};
</script>

<style lang="sass" src="./ContactForm.sass" />
