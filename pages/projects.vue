<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="elevation-2 mt-5">
          <v-card-title>
            <div>
              <h3 class="headline mb-0">My Projects</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="project in projects" :key="project.id">
                <v-list-item-content>
                  <v-list-item-title>{{ project.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ project.description }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: [
        { id: 1, name: 'Project One', description: 'Description for project one.' },
        { id: 2, name: 'Project Two', description: 'Description for project two.' },
        // Add more projects here
      ]
    }
  }
}
</script>

<style scoped>
.v-card {
  margin: 20px 0;
}
</style>
