<template>
  <div class="sesion_view">
      <v-tabs
        centered
        color="white"
        slot="extension"
        :fixed-tabs="false"
        slider-color="blue">
        <v-tab :key="`SignUp`" :href="`#tab-SignUp`">
          Sign Up
        </v-tab>
        <v-tab :key="`SignIn`" :href="`#tab-SignIn`">
          Sign In
        </v-tab>
      </v-tabs>
    <v-tabs-items>
      <v-tab-item :key="`SignUp`" :id="`tab-signUp`">
      </v-tab-item>
      <v-tab-item :key="`SignIn`" :id="`tab-signIn`">
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="sass">
session_view
  color: green
</style>
