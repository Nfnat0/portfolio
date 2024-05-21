export default {
  head: {
    title: 'My Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My personal portfolio website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' }
    ]
  },
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics'
  ],
  pwa: {
    manifest: {
      name: 'My Portfolio',
      short_name: 'Portfolio',
      lang: 'en'
    }
  },
  // googleAnalytics: {
  //   id: 'UA-XXXXXX-X'
  // },
  vuetify: {
    theme: {
      dark: true, // Enable dark mode
      themes: {
        dark: {
          primary: '#1e88e5', // A more muted blue
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          button: '#616161', // Custom button color for dark mode
          buttonText: '#ffffff' // Text color for buttons
        },
        light: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          button: '#1e88e5', // Button color for light mode
          buttonText: '#ffffff' // Text color for buttons
        }
      }
    }
  }
}
