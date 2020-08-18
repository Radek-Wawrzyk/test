<template>
  <section class="developers-info">
    <div class="container">
      <base-header
        align="center"
        class="developers-info__header"
        heading="Powerful API design stack built for developers "
        sub-heading="API REFERENCE "
        text="Turn your idea into a growth engine. Sign up for Lottify and start developing <br/>your own online Lotto store in just a few clicks."
      />
      <div class="developers-info__actions">
        <base-button
          class="developers-info__actions-button"
          type="primary"
          icon="book"
        >
          Learn core concepts
        </base-button>
        <base-button
          class="developers-info__actions-button"
          type="primary"
          icon="cloud"
        >
          GraphQl API Reference
        </base-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DevelopersInfo',
};
</script>

<style lang="sass" src="./DevelopersInfo.sass" />
