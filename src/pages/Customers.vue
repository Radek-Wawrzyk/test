<template>
  <Layout>
    <sub-header
      class="customers-content__top-header"
      heading="Customer Stories"
      text="Lottify is an innovative solution that allows you to build <br/> and deploy lottery stores with minimum effort."
    />
    <customers-content />
    <section-start />
  </Layout>
</template>

<script>
export default {
  name: 'CustomersPage',
  metaInfo: {
    title: 'Customers',
  },
};
</script>
