<template>
  <v-app>
    <!-- including <v-bar> -->
      <HeadBar/>
    <v-content>
      <component :is="currentPage"></component>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import HeadBar from './components/HeadBar'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeadBar,
  },
  data: () => ({
    currentPage: HelloWorld,
  }),
};
</script>
