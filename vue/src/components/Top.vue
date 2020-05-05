<template>
  <v-row class="text-center" justify='center'>
    <v-col cols=10>
      <v-img src='http://drive.google.com/uc?export=view&id=1aYihPqyZrFiCA6-TlxVV1arqBch39-KX'></v-img>
    </v-col>
    <v-col cols=10>
      <div>あなたがてけとーに作成した文章に類似したAmazon Prime Videoの映画をてけとーにお勧めするよ！</div><br>
      <v-btn large color="primary" @click="transPage('Drafting')">診断開始！</v-btn>
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