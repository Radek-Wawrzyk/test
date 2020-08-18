// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allContentfulStory {
          edges {
            node {
              id,
              slug
            }
          }
        }
      }
    `);

    data.allContentfulStory.edges.forEach((item) => {
      createPage({
        path: `/customers/${item.node.slug}`,
        component: './src/templates/CustomerStory.vue',
        context: {
          id: Number(item.node.id),
          slug: item.node.slug,
        },
      });
    });
  });

  api.loadSource(async actions => {
    const FooterColumns = require('./src/data/footerColumns.json')

    const collection = actions.addCollection({
      typeName: 'FooterColumn'
    })

    for (const column of FooterColumns) {
      collection.addNode(column)
    }
  })

  api.loadSource(async actions => {
    const NavbarItems = require('./src/data/navbarItems.json')

    const collection = actions.addCollection({
      typeName: 'NavbarItem'
    })

    for (const item of NavbarItems) {
      collection.addNode(item)
    }
  })
}
