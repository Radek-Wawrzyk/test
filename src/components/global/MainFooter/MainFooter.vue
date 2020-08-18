<template>
  <footer class="main-footer">
    <div class="main-footer__top">
      <div class="main-footer__container container">
        <div class="main-footer-top">
          <div class="main-footer-top__branding">
            <base-logo />
          </div>
          <div class="main-footer-top__navigation">
            <div
              class="main-footer-top__column"
              v-for="column in $static.footerColumns.edges"
              :key="column.node.title"
            >
              <div class="main-footer-column">
                <h4 class="main-footer-column__headline h5">{{ column.node.title }}</h4>
                <div class="main-footer-column__links">
                  <div
                    class="main-footer-column__item"
                    v-for="item in column.node.items"
                    :key="item.label"
                  >
                    <g-link
                      v-if="!item.external"
                      :to="item.url"
                      :aria-label="item.label"
                      :title="item.label"
                      class="main-footer-column__link"
                    >
                      {{ item.label }}
                    </g-link>
                    <a
                      v-else
                      :href="item.url"
                      :aria-label="item.label"
                      :title="item.label"
                      class="main-footer-column__link"
                    >
                      {{ item.label }}
                    </a>
                    <span class="main-footer-column__new" v-if="item.new">
                      New
                    </span>
                    <g-image
                      class="main-footer-column__external"
                      v-if="item.external"
                      alt=""
                      src="@/assets/icons/external.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-footer__bottom">
      <div class="main-footer__container container">
        <div class="main-footer-bottom">
          <div class="main-footer-bottom__left">
            <div class="main-footer-bottom__main">
              <div class="main-footer-bottom__copyright">&copy; 2020 Lottify. All rights reserved.</div>
              <g-link to="/terms-of-service" class="main-footer-bottom__link">Terms of Service</g-link>
              <g-link to="/privacy-settings" class="main-footer-bottom__link">Privacy Settings</g-link>
            </div>
            <div class="main-footer-bottom__disclaimer">
              Lottify is a brand of dreamIT GmbH registered in Hamburg, Germany in Hamburg State Court under European VAT ID DE815442282.
            </div>
          </div>
          <div class="main-footer-bottom__right">
            <main-social-media />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<static-query>
query {
  footerColumns: allFooterColumn(order: ASC) {
    edges {
      node {
        title
        items {
          label
          url
          new
          external
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "MainFooter",
};
</script>

<style lang="sass" src="./MainFooter.sass" />
