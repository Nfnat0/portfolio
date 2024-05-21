<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <nuxt-link to="/" style="color: white; text-decoration: none;">My Portfolio</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/projects">Projects</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <v-col class="text-center">
        &copy; {{ new Date().getFullYear() }} My Portfolio
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
.v-btn {
  margin: 0 10px;
}

.v-app-bar, .v-footer {
  border-radius: 15px;
}
</style>
