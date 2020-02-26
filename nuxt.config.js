module.exports = {
    build:{
      vendor: ['axios']
    },
    plugins: [],
    srcDir: 'nuxt/',
    modules: ['bootstrap-vue/nuxt', 'semantic-ui-vue/nuxt', '@nuxtjs/axios'],
    buildModules: [
      '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
      configPath: '~/config/tailwind.config.js',
      cssPath: '~/assets/css/tailwind.css',
      purgeCSSInDev: false
    },
    generate: {
      dir: 'public',
    },
    axios: {
      baseURL: process.env.BASE_URL || 'http://localhost:4593'
    }
}