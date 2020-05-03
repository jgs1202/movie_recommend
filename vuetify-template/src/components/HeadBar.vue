<template>
<div id='HeadBar'>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        てけとー映画診断
       <!--  <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>
</div>
</template>

<script>
export default {
  name: 'HeadBar',
  data: function() {
    return {

    }
  }
}
</script>

<style>
</style>