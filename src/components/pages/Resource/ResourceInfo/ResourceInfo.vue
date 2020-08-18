<template>
  <section class="resource-info">
    <div class="container container--big">
      <div class="resource-info__inner">
        <div class="resource-info__mobile">
          <h3 class="resource-info__mobile-heading">
            Assets
          </h3>
          <mobile-tabs
            v-model="activeAsset"
            mode="light"
            :data="assets"
            class="resource-info__mobile-tabs"
          />
          <h3 class="resource-info__mobile-heading">
            Topics
          </h3>
          <mobile-tabs
            v-model="activeTopic"
            mode="light"
            :data="topics"
            class="resource-info__mobile-tabs"
          />
        </div>
        <div class="resource-info__tabs">
          <div class="resource-info__tabs-item">
            <h3 class="resource-info__tabs-heading">
              Assets
            </h3>
            <base-tabs
              v-model="activeAsset"
              mode="light"
              columns="1"
              direction="vertical"
              directionLocation="left"
              class="resource-info__tabs-inner"
            >
              <base-tab-item
                class="resource-info-tab"
                v-for="item in assets"
                :key="item.heading"
                :name="item.name"
              >
                <h3 class="resource-info-tab__heading">
                  {{ item.heading }}
                </h3>
              </base-tab-item>
            </base-tabs>
          </div>

          <div class="resource-info__tabs-item">
            <h3 class="resource-info__tabs-heading">
              Topic
            </h3>
            <base-tabs
              v-model="activeTopic"
              mode="light"
              columns="1"
              direction="vertical"
              directionLocation="left"
              class="resource-info__tabs-inner"
            >
              <base-tab-item
                class="resource-info-tab"
                v-for="item in topics"
                :key="item.heading"
                :name="item.name"
              >
                <h3 class="resource-info-tab__heading">
                  {{ item.heading }}
                </h3>
              </base-tab-item>
            </base-tabs>
          </div>
        </div>

        <div class="resource-info__content">
          <ul class="resource-info__content-list">
            <resource-tile
              v-for="(item, index) in tiles"
              :key="index"
              :data="item"
              :featured="index === 0 ? true : false"
            />
          </ul>
          <p class="resource-info__content-empty" v-if="tiles.length === 0">
            No resourses...
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { resource } from "@/data/staticData.js";

export default {
  name: 'ResourceInfo',
  data: () => ({
    activeAsset: '',
    activeTopic: '',
    assets: resource.assets,
    topics: resource.topics,
    tiles: resource.tiles,
    backupTiles: [],
  }),
  watch: {
    activeAsset() {
      this.filterList();
    },
    activeTopic() {
      this.filterList();
    },
  },
  methods: {
    filterList() {
      const activeAsset = this.activeAsset;
      const activeTopic = this.activeTopic;

      if (activeAsset === 'all' && activeTopic === 'all') {
        this.tiles = this.backupTiles;
        return;
      }

      if (activeAsset === 'all' && activeTopic !== 'all') {
        this.tiles = this.backupTiles.filter(item =>
          item.topicCategory === activeTopic
        );
        return;
      }

      if (activeAsset !== 'all' && activeTopic === 'all') {
        this.tiles = this.backupTiles.filter(item =>
          item.assetCategory === activeAsset
        );
        return;
      }

      if (activeAsset !== 'all' && activeTopic !== 'all') {
        this.tiles = this.backupTiles.filter(item =>
          item.topicCategory === activeTopic && item.assetCategory === activeAsset
        );
        return;
      }
    },
  },
  created() {
    this.activeAsset = this.assets[0].name;
    this.activeTopic = this.topics[0].name;
    this.backupTiles = this.tiles;
  },
};
</script>

<style lang="sass" src="./ResourceInfo.sass" />
