<template>
  <section class="privacy-settings">
    <div class="container">
      <div class="privacy-settings-item">
        <header class="privacy-settings-item__header">
          <h2 class="privacy-settings-item__heading">
            Core cookies
          </h2>
          <p class="privacy-settings-item__text">
            Required cookies cannot be deactivated because the proper functioning of the system and its functions could not be guaranteed.
          </p>
        </header>
        <div class="privacy-settings-table">
          <div class="privacy-settings-table__column">
            <h5 class="privacy-settings-table__heading">
              Active
            </h5>
            <div class="privacy-settings-table__content">
              <base-checkbox
                v-model="cookies"
                class="privacy-settings-table__checkbox"
              />
            </div>
          </div>
          <div class="privacy-settings-table__column privacy-settings-table__column--providers">
            <h5 class="privacy-settings-table__heading">
              Providers
            </h5>
            <div class="privacy-settings-table__content">
              <h6 class="privacy-settings-table__provider">
                Lottify
              </h6>
            </div>
          </div>
          <div class="privacy-settings-table__column">
            <h5 class="privacy-settings-table__heading">
              Description
            </h5>
            <div class="privacy-settings-table__content">
              With this cookie, we provide functions such as the "stay logged in" function. Please note that manual deactivation of the required cookies in our data protection module is unfortunately not possible for technical reasons.
            </div>
          </div>
        </div>
      </div>

      <div class="privacy-settings-item">
        <header class="privacy-settings-item__header">
          <h2 class="privacy-settings-item__heading">
            Voluntary cookies
          </h2>
          <p class="privacy-settings-item__text">
             Your privacy settings are saved in the browser you are currently using. If you change your browser, you have to make the settings again.
          </p>
        </header>
        <div class="privacy-settings-table">
          <div class="privacy-settings-table__column">
            <h5 class="privacy-settings-table__heading">
              Active
            </h5>
            <div class="privacy-settings-table__content">
              <base-checkbox
                v-model="cookies"
                class="privacy-settings-table__checkbox"
              />
            </div>
          </div>
          <div class="privacy-settings-table__column privacy-settings-table__column--providers">
            <h5 class="privacy-settings-table__heading">
              Providers
            </h5>
            <div class="privacy-settings-table__content">
              <h6 class="privacy-settings-table__provider">
                Google Analytics
              </h6>
            </div>
          </div>
          <div class="privacy-settings-table__column">
            <h5 class="privacy-settings-table__heading">
              Description
            </h5>
            <div class="privacy-settings-table__content">
              In the usage analysis, we collect information about the use of our website, e.g. website visits or error messages. We do not store any information that allows the user to be identified. The information collected is only aggregated and thus evaluated anonymously. Google evaluates the use of the website in order to compile reports on website activity for us.
            </div>
          </div>
        </div>
      </div>

      <footer class="privacy-settings-actions">
        <base-button
          type="primary"
          @click="saveSettings()"
          title="Save"
          class="privacy-settings-actions__button"
        >
          Save
        </base-button>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrivacySettings',
  data: () => ({
    cookies: false,
    voluntary_cookies: false,
  }),
  methods: {
    saveSettings() {

    },
  },
};
</script>

<style lang="sass" src="./PrivacySettings.sass" />
