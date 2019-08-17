<template>
  <div id="app">
    <Header
      :numCorrect="numCorrect"
      :numTotal="numTotal"
     />
    <QuestionBox
      :currentQuestion="records[index]"
      :next="next"
      :increment="increment"
    />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import QuestionBox from '@/components/QuestionBox.vue'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    QuestionBox
  },
  data: function () {
    return {
      apiUrl: 'https://api.airtable.com/v0/',
      base: 'appg6cNTfOGeUe50e/Table%201',
      apiKey: process.env.VUE_APP_AIRTABLE_KEY,
      records: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    };
  },
  mounted: function () {
    this.getData();
  },
  methods: {
    getData: function () {
      axios({
        url: this.apiUrl + this.base,
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      }).then((res) => {
        this.records = res.data.records;
      });
    },
    next: function() {
      this.index++
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
      this.numTotal++
    }
  }
}
</script>

