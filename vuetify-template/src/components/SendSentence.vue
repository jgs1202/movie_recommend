<template>
  <div id='SendSentence'>
    <v-card>
      <v-card-text>
        {{sentence}}
      </v-card-text>
    </v-card>
    <v-row class='text-center'>
      <v-col>
        <v-btn outlined large color='primary'>送信</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'SendSentence',
  data: function() {
    return {
      sentence: null,
    }
  },
  mounted: function() {
    let that = this
    console.log('send sentence')
    that.sentence = '夏、海沿いの静かな町。幸せな夏休みを送るはずだった瑞穂の親友が殺された。瑞穂は密室の謎に叔父である弁護士とともに挑む。その犯人とは。'
  }
}
</script>

<style>
#SendSentence {
  text-align: center;
}
</style>