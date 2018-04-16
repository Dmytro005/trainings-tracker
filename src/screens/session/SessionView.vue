<template>
  <div class="session_view">
      <v-tabs
        centered
        v-model="active"
        color="white"
        slot="extension"
        :fixed-tabs="false"
        slider-color="blue"
        class="session_tabs elevation-2"
        >
        <v-tab key="SignUp">
          <h4>Ввійти</h4>
        </v-tab>
        <v-tab key="SignIn">
          <h4>Реєстрація</h4>
        </v-tab>
        <v-tabs-items v-model="active">
          <v-tab-item key="SignUp">
            <v-card flat>
                <sign-in-form></sign-in-form>
            </v-card>
          </v-tab-item>
          <v-tab-item key="SignIn">
            <v-card flat>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
  </div>
</template>
<script>
import SignInForm from '@/components/session/SignInForm'

export default {
  data () {
    return {
      active: null
    }
  },
  components: {
    SignInForm
  }
}
</script>

<style scoped lang="sass">
.session_view
  display: flex
  align-items: center
  justify-content: center
  min-height: 100%
  .session_tabs
    trasnsition: all .2s ease
    width: 400px
    min-height: 250px
</style>
