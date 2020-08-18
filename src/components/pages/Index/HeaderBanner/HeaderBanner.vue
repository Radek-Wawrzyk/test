<template>
  <div class="header-banner">
    <div class="header-banner__container container">
      <div class="header-banner__text">
        <div class="header-banner-text">
          <div class="header-banner-text__info">
            <info-bar
              label-text="New"
              text="Lottify is now available in <b>New Jersey</b> and <b>New York, US</b>"
            />
          </div>
          <h1 class="header-banner-text__headline">We deliver the best Lotto as a Service solution</h1>
          <p class="header-banner-text__paragraph">Lottify is an innovative solution that allows you to build and deploy lottery stores with minimum effort.</p>
          <div class="header-banner-text__action">
            <div class="header-banner-action">
              <div class="header-banner-action__item">
                <base-button
                  type="primary"
                  title="Get started for free"
                  outline-type="light"
                >
                  Get started for free
                </base-button>
              </div>
              <div class="header-banner-action__item">
                <base-button
                  type="outline"
                  outline-type="dark"
                  title="Learn more"
                >
                  Learn more
                </base-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-banner__explainer">
        <div class="explainer">
          <div class="explainer__video">
            <video-poster/>
          </div>
          <div class="explainer__caption">See how the platform works</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',
}
</script>

<style lang="sass" src="./HeaderBanner.sass" />
