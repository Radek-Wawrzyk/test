<template>
  <section class="contact-info">
    <div class="container container--big">
      <div class="contact-info__content">
        <base-header
          sub-heading="HEADQUARTER"
          heading="Our Hamburg office "
          class="contact-info__header"
        />
        <ul class="contact-info__list">
          <li class="contact-info__item">
            <g-image
              class="contact-info__item-icon"
              alt=""
              src="@/assets/icons/contact/house.svg"
            />
            <p class="contact-info__item-content">
              Gaußtraße 126 <br/>
              22765 Hamburg <br/>
              Germany
            </p>
          </li>
          <li class="contact-info__item">
            <g-image
              class="contact-info__item-icon"
              alt=""
              src="@/assets/icons/contact/mail.svg"
            />
            <p class="contact-info__item-content">
              info@lottify.com
            </p>
          </li>
          <li class="contact-info__item">
            <g-image
              class="contact-info__item-icon"
              alt=""
              src="@/assets/icons/contact/phone.svg"
            />
            <p class="contact-info__item-content">
              (+49) 40-60 94 52 47-0
            </p>
          </li>
        </ul>
      </div>
    </div>
    <iframe
      src="https://snazzymaps.com/embed/253402"
      width="100%"
      style="border:none;"
      class="contact-info__map"
    >
    </iframe>
  </section>
</template>

<script>
export default {
  name: 'ContactInfo',
  data: () => ({

  }),
};
</script>

<style lang="sass" src="./ContactInfo.sass" />
