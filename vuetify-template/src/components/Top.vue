<template>
  <v-row class="text-center">
    <v-col>
      <v-btn large color="primary" @click="transPage('SendSentence')">文章の確認</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Top',
  data: function() {
    return {
      sentence: null,
    }
  },
  mounted: function() {
    // let that = this
    // that.senctence = '夏、海沿いの静かな町。幸せな夏休みを送るはずだった瑞穂の親友が殺された。瑞穂は密室の謎に叔父である弁護士とともに挑む。その犯人とは。'
  },
  methods: {
    transPage: function(page) {
      let that = this
      that.$parent.$parent.$parent.currentPage = page
    },
  }
}
</script>