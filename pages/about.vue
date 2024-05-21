<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="elevation-2 mt-5">
          <v-img src="/images/about-banner.jpg" height="200px"></v-img>
          <v-card-title>
            <div>
              <h3 class="headline mb-0">About Me</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <p>This is the about page. Here you can write about your background, skills, and experiences.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style scoped>
.v-card {
  margin: 20px 0;
}
</style>
