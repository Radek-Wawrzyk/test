<template>
  <nav class="mobile-menu">
    <div class="container">
      <ul class="mobile-menu__list">
        <li
          v-for="item in menu"
          :key="item.node.label"
          :title="item.node.label"
          class="mobile-menu__item"
        >
          <g-link
            v-if="!item.node.menuItems.length"
            :to="item.node.url"
            class="mobile-menu__link mobile-menu__link--group"
            @click.native="closeMobileMenu()"
          >
            <div class="mobile-menu__text">
              {{ item.node.label }}
            </div>
            <ChevronDownIcon
              v-if="item.node.menuItems.length"
              size="1.25x"
              class="mobile-menu__icon"
              :class="[
                item.node.status ? 'mobile-menu__icon--active' : '',
              ]"
            />
          </g-link>

          <button
            v-else
            class="mobile-menu__link mobile-menu__link--group"
            @click="openSubMenu(item.node.label)"
          >
            <div class="mobile-menu__text">
              {{ item.node.label }}
            </div>
            <ChevronDownIcon
              v-if="item.node.menuItems.length"
              size="1.25x"
              class="mobile-menu__icon"
              :class="[
                item.node.status ? 'mobile-menu__icon--active' : '',
              ]"
            />
          </button>

          <div v-if="item.node.menuItems.length > 1 && item.node.status" class="mobile-menu__sub-menu">
            <g-link
              v-for="menuItem in item.node.menuItems"
              :key="menuItem.label"
              :to="menuItem.url"
              class="mobile-menu__sub-link"
              @click.native="closeMobileMenu()"
            >
              {{ menuItem.label }}
            </g-link>
          </div>
        </li>
      </ul>
      <div class="mobile-menu__actions">
        <base-button
          class="mobile-menu__actions-button"
          size="small"
          type="outline"
          title="Get started for free"
          mode="light"
        >
          Get started for free
        </base-button>
        <base-button
          class="mobile-menu__actions-button"
          size="small"
          type="outline"
          title="Sign in"
          mode="light"
        >
          Sign in
        </base-button>
      </div>
    </div>
  </nav>
</template>

<static-query>
query {
  navbarItems: allNavbarItem(order: ASC) {
    edges {
      node {
        label
        url
        menuItems {
          label
          url
        }
      }
    }
  }
}
</static-query>

<script>
import { ChevronDownIcon } from 'vue-feather-icons';

export default {
  name: 'MainMobileMenu',
  components: {
    ChevronDownIcon,
  },
  data: () => ({
    menu: [],
  }),
  methods: {
    closeMobileMenu() {
      this.$store.dispatch('toggleMenu');
    },
    openSubMenu(payload) {
      const menuList = this.menu;
      const clickedItem = menuList.find(item => item.node.label === payload);

      this.menu = menuList.map(item => {
        item.node.label === payload ? item.node.status = !item.node.status : false;
        return item
      });
    },
  },
  created() {
    const menu = this.$static.navbarItems.edges;

    // Set variable for open/hide status
    menu.forEach(item => {
      item.node.menuItems.length > 1 ? item.node.status = false : false;
    });

    menu[0].node.menuItems.unshift({
      label: 'Platform Overview',
      url: '/platform',
    });

    this.menu = menu;
  },
};
</script>

<style lang="sass" src="./MainMobileMenu.sass" />
