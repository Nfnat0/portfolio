<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="elevation-2 mt-5 rounded-card">
          <v-card-title>
            <h3 class="headline mb-0">Welcome to My Portfolio</h3>
          </v-card-title>
          <v-card-text>
            <p>This is the home page. Explore my projects and learn more about me.</p>
            <v-btn color="primary" class="mt-4" rounded to="/projects">View Projects</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.rounded-card {
  border-radius: 15px;
}
</style>
