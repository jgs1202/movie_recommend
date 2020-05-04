<template>
  <div>
    <MovieCard v-for="movie in movies"
    v-bind:key="movie.id" v-bind:title="movie.title" v-bind:abstract='movie.abstract' v-bind:imgSrc="movie.img_src" v-bind:url="movie.url"/>
   <!--  <MovieCard v-bind:title="movies[0].title" v-bind:imgSrc="movies[0].img_src" v-bind:abstract="movies[0].abstract"/> -->
  </div>
</template>

<script>
import MovieCard from './MovieCard'
export default {
  name: 'Result',
  components: {
    MovieCard
  },
  data: function() {
    return {
      sentence: null,
      movies: [],
    }
  },
  mounted: function() {
    let that = this
    that.movies = that.$parent.$parent.$parent.recommends
    // console.log(data)
  },
  methods: {
    transPage: function(page) {
      let that = this
      that.$parent.$parent.$parent.currentPage = page
    },
  }
}
</script>

<style>
</style>