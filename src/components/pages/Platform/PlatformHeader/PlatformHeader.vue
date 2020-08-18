<template>
  <header class="platform-header">
    <main-header
      heading="Versatile Platform with a Rich Variety of Features"
      text="Lottify is an innovative solution that allows you to build and deploy lottery stores with minimum effort."
      mode="image"
      imageURL="https://i.imgur.com/nXNIzJd.png"
    >
      <div class="platform-header__content" slot="content">
        <base-button
          type="primary"
          title="Get started for free"
          class="platform-header__content-button"
          to="#"
        >
          Get started for free
        </base-button>
      </div>
    </main-header>
  </header>
</template>

<script>
export default {
  name: 'PlatformHeader',

}
</script>

<style>

</style>
