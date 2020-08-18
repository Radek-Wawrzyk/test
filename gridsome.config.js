const path = require('path')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/abstract/_variables.sass'),
        path.resolve(__dirname, './src/assets/sass/abstract/_mixins.sass'),
      ],
    })
}

module.exports = {
  siteName: 'Lottify',
  plugins: [
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        resources: '@/assets/sass/abstract/_variables.sass',
      }
    },
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'czwwiq8hegxx',
        accessToken: 'X51xQPOWSBwdO4DhyQ694Rxuspvub6pcdEyLahex-Z0',
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
        fieldName: 'Contentful'
      }
    }
  ],
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal',]

    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })
  },
}
