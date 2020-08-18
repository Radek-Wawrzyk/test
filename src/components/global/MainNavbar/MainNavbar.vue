<template>
  <div class="main-navbar">
    <div
      v-for="item in $static.navbarItems.edges"
      :key="item.node.label"
      class="main-navbar__item"
    >
      <main-navbar-item
        :label="item.node.label"
        :url="item.node.url"
        :menu-items="item.node.menuItems"
      />
    </div>
  </div>
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
  name: 'MainNavbar',
}
</script>

<style lang="sass" src="./MainNavbar.sass" />
