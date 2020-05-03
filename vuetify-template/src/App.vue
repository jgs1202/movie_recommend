<template>
  <v-app>
    <v-container>
      <HeadBar/>
      <v-content>
        <component :is="currentPage"></component>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import HeadBar from './components/HeadBar'
import HelloWorld from './components/HelloWorld'
import SendSentence from './components/SendSentence'
import Top from './components/Top'

export default {
  name: 'App',
  components: {
    HeadBar,
    SendSentence,
    Top,
    HelloWorld
  },
  data: function() {
    return {
      currentPage: 'Top',
      active: true,
    }
  },
  mounted: function() {
    let that = this
    console.log(that.currentPage)
  },
  methods: {
    transPage: function(page) {
      let that = this
      that.currentPage = page
    }
  }
};
</script>
