<template>
  <Layout>
    <sub-header
      heading="Privacy Policy"
      text="Frequently asked questions, a FAQ is an online document that poses a <br/> series of common questions and answers on a specific topic."
    />
    <contentful-section :data="$page.allContentfulTerms.edges[0].node" />
  </Layout>
</template>

<page-query>

query contentfulTerms {
  allContentfulTerms {
    edges {
      node {
        id,
        title,
        headerText,
        headerTitle
        contentInner
      }
    }
  }
}

</page-query>
<script>
export default {
  name: 'PrivacyPolicyPage',
  metaInfo: {
    title: 'Privacy Policy',
  },
};
</script>
