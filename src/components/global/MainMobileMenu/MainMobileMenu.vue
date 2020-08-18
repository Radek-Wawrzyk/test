<template>
  <nav class="mobile-menu">
    <div class="container">
      <ul class="mobile-menu__list">
        <li
          v-for="item in $static.navbarItems.edges"
          :key="item.node.label"
          :title="item.node.label"
          class="mobile-menu__item"
        >
          <g-link
            :to="item.node.url"
            class="mobile-menu__link"
          >
            <div class="mobile-menu__text">
              {{ item.node.label }}
            </div>
            <!-- <ChevronDownIcon
              v-if="item.node.menuItems"
              size="1.25x"
              class="mobile-menu__icon"
            /> -->
          </g-link>
          <div v-if="item.node.menuItems.length" class="mobile-menu__sub-menu">
            <g-link
              v-for="menuItem in item.node.menuItems"
              :key="menuItem.label"
              :to="menuItem.url"
              class="mobile-menu__sub-link"
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
export default {
  name: 'MainMobileMenu'
}
</script>

<style lang="sass" src="./MainMobileMenu.sass" />
