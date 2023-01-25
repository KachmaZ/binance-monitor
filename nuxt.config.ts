// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    build: {
        transpile: ['vuetify'],
    },

    // modules: [
    //     '@nuxtjs/composition-api/module'
    //   ],

    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
