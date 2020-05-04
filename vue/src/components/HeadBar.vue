<template>
<div id='HeadBar'>
    <v-app-bar app dense color="primary" dark>
      <v-btn text height=100% color="white" @click="toTop">
      てけとー映画診断
    </v-btn>

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
  },
  methods: {
    toTop: function() {
      let that = this
      that.$parent.$parent.currentPage = 'Top'
    }
  }
}
</script>

<style>
</style>