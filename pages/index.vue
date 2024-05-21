<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="elevation-2 mt-5">
          <v-img src="/images/home-banner.jpg" height="200px"></v-img>
          <v-card-title>
            <div>
              <h3 class="headline mb-0">Welcome to My Portfolio</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <p>This is the home page.</p>
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
.v-card {
  margin: 20px 0;
}
</style>
