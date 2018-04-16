<template>
  <v-form v-model="valid" class="signInForm" @submit="signIn()">
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="password"
      type="password"
      :rules="passwordRules"
      :counter="10"
      required
    ></v-text-field>
    <v-btn 
      depressed small color="primary"
      class="mt-4"
      type="submit">Ввійти</v-btn>
    </v-form>
</template>

<script>
  export default {
    name: 'SignInForm',
    data: () => ({
      valid: false,
      password: '',
      passwordRules: [
        v => !!v || 'password is required',
        v => v.length >= 10 || 'Password must be at least 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods: {
      signIn () {
        console.log(this.password, this.email)
      }
    }
  }
</script>
<style scoped lang='sass'>
.signInForm
  padding: 20px
  text-align: right
</style>
