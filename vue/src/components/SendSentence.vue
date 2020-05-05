<template>
  <div id='SendSentence'>
    <v-row class='text-center' justify='center'>
      <v-col aligin='center' cols=9>
        <v-card >
          <v-card-text>
            {{sentence}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class='text-center'>
      <v-col>
        <v-btn color='success' @click='sendData'
        class='ma-2' :loading='loading'>確定</v-btn>
      </v-col>
      <v-col>
      <v-btn color='primary' @click='backToChars'
        class='ma-2'>やり直す</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'SendSentence',
  data: function() {
    return {
      sentence: null,
      loading: false,
    }
  },
  mounted: function() {
    let that = this
    console.log('send sentence')
    that.sentence = that.$parent.$parent.$parent.completeSentence
  },
  methods: {
    sendData: function() {
      let that = this
      that.loading = true
      const params = new URLSearchParams()
      params.set('sentence', this.sentence)
      const url = `http://140.227.124.201/uwsgi/data/${params.toString()}`

      $.ajax({
          url: url,
          type: "GET",
          timeout: 10000,
      })
      .done(function(res) {
          // 成功時の動作
          that.loading = false
          console.log(res)
          that.$parent.$parent.$parent.recommends = res.data
          that.$parent.$parent.$parent.currentPage = 'Result'
      })
      .fail(function(XMLHttpRequest, textStatus, errorThrown) {
          // 失敗時の動作
          console.log('error!')
          console.log(XMLHttpRequest)
          console.log(textStatus)
          console.log(errorThrown)
      })
    },
    backToChars: function() {
      let that = this
      that.$parent.$parent.$parent.currentPage = 'Drafting'
    },
    backToSenteces: function() {
    }
  }
}
</script>

<style>
#SendSentence {
  text-align: center;
}
</style>