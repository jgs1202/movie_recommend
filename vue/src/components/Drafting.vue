<template>
  <v-container>
    <v-row class="text-center" justify='center' v-if="flagShowForm">
      <v-col cols='8'>
        <v-form ref="form">
          <v-row class="text-center" justify='center'>
            <v-col>登場人物を設定してね</v-col>
          </v-row>
          <v-text-field v-model="hero" label="主人公" required></v-text-field>
          <v-text-field v-model="friend_a" label="登場人物A" required></v-text-field>
          <v-text-field v-model="friend_b" label="登場人物B" required></v-text-field>
          <v-btn color="primary" class="mr-4" :loading='loading' @click="define">決定</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-container v-if="flagShowSelection">
      <v-row class="text-center" justify='center'>
        <v-col>文章を選択してね</v-col>
      </v-row>
      <v-row>
        <v-col cols=6 justify='center'>
          <v-card class="mx-auto" @click='selectSentence(sentences[0])'>
            <v-card-text class="text--primary">{{sentences[0]}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols=6>
          <v-card class="mx-auto" @click='selectSentence(sentences[1])'>
            <v-card-text class="text--primary">{{sentences[1]}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols=6 justify='center'>
          <v-card class="mx-auto" @click='selectSentence(sentences[2])'>
            <v-card-text class="text--primary">{{sentences[2]}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols=6>
          <v-card class="mx-auto" @click='selectSentence(sentences[3])'>
            <v-card-text class="text--primary">{{sentences[3]}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Drafting',
  data: function() {
    return {
      sentences: [0,1,2,3],
      sentence0: 0,
      hero: '',
      friend_a: '',
      friend_b: '',
      flagShowForm: true,
      flagShowSelection: false,
      flagShowComplete: false,
      stage: 0,
      loading: false,
      draftData: null,
      complete: '',
    }
  },
  mounted: function() {
  },
  methods: {
    transPage: function(page) {
      let that = this
      that.$parent.$parent.$parent.currentPage = page
    },
    define: function() {
      let that = this
      that.loading = true
      if (that.hero == '') {
        that.hero = '主人公'
      }
      if (that.friend_a == '') {
        that.friend_a = '太郎さん'
      }
      if (that.friend_b == '') {
        that.friend_b = '桃子さん'
      }
      that.sendRequest()
    },
    updateSelection: function() {
      let that = this
      for (let i=0; i<4; ++i) {
        that.$set(that.sentences, i, that.draftData[that.stage][i].sentence)
        // that.sentences[i] = that.draftData[that.stage][i].sentence
      }
      that.stage += 1
    },
    sendRequest: function() {
      let that = this
      const params = new URLSearchParams()
      params.set('hero', that.hero)
      params.set('friend_a', that.friend_a)
      params.set('friend_b', that.friend_b)
      const url = `http://asdfd/uwsgi/draft/${params.toString()}`

      $.ajax({
          url: url,
          type: "GET",
          timeout: 10000,
      })
      .done(function(res) {
          // 成功時の動作
          that.loading = false
          that.draftData = res.data
          that.loading = false
          that.flagShowForm = false
          that.flagShowSelection= true
          that.updateSelection()
      })
      .fail(function(XMLHttpRequest, textStatus, errorThrown) {
          // 失敗時の動作
          console.log('error!')
          console.log(XMLHttpRequest)
          console.log(textStatus)
          console.log(errorThrown)
      })
    },
    selectSentence: function(sentence) {
      let that = this
      that.complete += '' + sentence
      if (that.stage < 4) {
        that.updateSelection()
      } else {
        console.log(that.complete)
        that.showComplete()
      }
    },
    showComplete: function() {
      let that = this
      that.flagShowSelection = false
      that.$parent.$parent.$parent.completeSentence = that.complete
      that.$parent.$parent.$parent.currentPage = 'sendSentence'
    }
  }
}
</script>