// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      script: [
        {
          src: "/bootstrap.bundle.min.js"
        }
      ]
    }
  },
  ssr: false,

  routeRules: {
    "/random": {
      redirect: {
        to: "/random/neko",
        statusCode: 302
      }
    },
  },

  ...(process.env.NODE_ENV === 'development' && {
    vite: {
      server: {
        proxy: {
          "/api": {
            target: "http://localhost:3001",
            changeOrigin: true
          }
        }
      }
    }
  }),

  modules: [
    "@nuxt/scripts"
  ]
})