<template>
  <Layout>
    <sub-header
      class="blog-content__header"
      heading="Blog"
      text="Stay up to date with prevailing trends and latest news <br/> from the lottery games industry with our Medium blog."
    />
    <blog-content />
    <section-start />
  </Layout>
</template>

<script>
export default {
  name: 'BlogPage',
  metaInfo: {
    title: 'Blog',
  },
};
</script>
