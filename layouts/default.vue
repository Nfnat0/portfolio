<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/projects">Projects</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
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
