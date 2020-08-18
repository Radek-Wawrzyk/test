<template>
  <Layout>
    <!-- <header-banner /> -->
    <home-header />
    <section-get-started />
    <section-features
      :subTitle="features.subTitle"
      :title="features.title"
      :subText="features.subText"
      :text="features.text"
      :data="features.data"
      mode="features"
    />
    <section-features
      :subTitle="benefits.subTitle"
      :title="benefits.title"
      :subText="benefits.subText"
      :text="benefits.text"
      :data="benefits.data"
      mode="benefits"
    />
    <section-whom />
    <section-coverage />
    <home-stories />
    <section-start />
  </Layout>
</template>

<script>
// Static data
import { benefits, features } from '@/data/staticData.js';

export default {
  name: 'HomePage',
  data: () => ({
    features: features,
    benefits: benefits,
  }),
  metaInfo: {
    title: 'Lottify',
  },
};
</script>
