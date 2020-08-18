<template>
  <section class="contentful-section">
    <div class="container">
      <div
        class="contentful-section__inner"
        v-html="richtextToHTML(data.contentInner)"
      />
    </div>
  </section>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default {
  name: 'ContentfulSection',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    richtextToHTML (payload) {
      return documentToHtmlString(payload);
    },
  },
};
</script>

<style lang="sass" src="./ContentfulSection.sass" />
