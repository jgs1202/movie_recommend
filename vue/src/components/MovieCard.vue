<template>
  <div>
    <v-card v-if="isMobileDevice" class="mx-auto" @click='newTab(url)'>
      <v-img height='10rem' v-bind:src="imgSrc"></v-img>
        <v-card-title >{{title}}</v-card-title>
        <v-card-text class="text--primary">
          <div>{{abstract}}</div>
        </v-card-text>
    </v-card>
    <v-card v-else class="mx-auto" @click='newTab(url)'>
      <v-container>
        <v-row align='center'>
          <v-col cols="4">
            <v-img width='20rem' height='15rem' v-bind:src="imgSrc"></v-img>
          </v-col>
          <v-col cols='8' max-width='50%'>
            <v-card-title >{{title}}</v-card-title>
            <v-card-text class="text--primary">
              <div>{{abstract}}</div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import isMobile from 'ismobilejs'
export default {
  name: 'MovieCard',
  props: ['title', 'imgSrc', 'abstract', 'url'],
  data: function() {
    return {
      isMobileDevice: false
    }
  },
  mounted: function() {
    let that = this
    that.isMobileDevice = isMobile.any
    that.isMobileDevice = true
    console.log(isMobile.any)
    // console.log(that.title, that.imgSrc, that.abstract)
  },
  methods: {
    newTab: function(url) {
      window.open(url, '_blank')
    }
  }
}
</script>