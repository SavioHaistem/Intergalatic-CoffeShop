// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/public/css/main.css'],
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/svgs/coffee-bean.svg',
        },
      ],
      title: 'Intergalatic CoffeeShop',
    },
  },
})
