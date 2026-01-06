export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      title: 'Oswan - eCommerce',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Oswan eCommerce Template' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700%7CPoppins:300,400,500,600,700' }
      ]
    }
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/bundle.css',
    '~/assets/css/animate.css',
    '~/assets/css/owl.carousel.min.css',
    '~/assets/css/icofont.min.css',
    '~/assets/css/themify-icons.css',
    '~/assets/css/font-awesome.min.css',
    '~/assets/css/meanmenu.min.css',
    '~/assets/css/style.css',
    '~/assets/css/responsive.css'
  ],

  modules: [],

  vite: {
    css: {
      preprocessorOptions: {}
    }
  }
})
