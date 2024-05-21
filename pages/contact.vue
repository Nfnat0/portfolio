<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="elevation-2 mt-5">
          <v-card-title>
            <div>
              <h3 class="headline mb-0">Contact Me</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
              ></v-text-field>
              <v-textarea
                v-model="message"
                :rules="messageRules"
                label="Message"
                required
              ></v-textarea>
              <v-btn
                :disabled="!valid"
                color="primary"
                @click="submit"
              >
                Send
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
        v => v.length <= 500 || 'Message must be less than 500 characters'
      ]
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Handle form submission
        alert('Form submitted!')
      }
    }
  }
}
</script>

<style scoped>
.v-card {
  margin: 20px 0;
}
</style>
