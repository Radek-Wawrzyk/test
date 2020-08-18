 <template>
  <header
    class="base-header"
    :class="[
      align === 'left' ? 'base-header--left' : '',
      align === 'center' ? 'base-header--center' : '',
      align === 'right' ? 'base-header--right' : '',
      mode === 'light' ? 'base-header--light' : 'base-header--dark',
    ]"
    :style="maxWidth ? `max-width: ${maxWidth}` : false"
  >
    <span
      class="base-header__sub-heading"
      v-if="subHeading"
      v-html="subHeading"
    />
    <h3
      class="base-header__heading"
      v-if="heading"
      v-html="heading"
    />
    <p
      class="base-header__text"
      v-if="text"
      v-html="text"
    />
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    heading: {
      type: [String, Number],
      required: true,
    },
    subHeading: {
      type: [String, Number],
      required: false,
    },
    text: {
      type: [String, Number],
      required: false,
    },
    align: {
      type: String,
      required: false,
      default: 'left',
    },
    mode: {
      type: String,
      required: false,
      default: 'light',
    },
    maxWidth: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="sass" src="./BaseHeader.sass" />

