<template>

  <history-item
    v-for="item in this.$store.state.exchangeHistory"
    :key="item.inputAmount"
  >
    <template v-slot:date>
      {{item.date}}
    </template>


    <template v-slot:firstCurrency>
      <img :src="require('../../../public/UI/' + item.firstCurrency + '.png')" alt="">
      {{item.firstCurrency}} {{item.inputAmount}}
    </template>

    <template v-slot:secondCurrency>
      <img :src="require('../../../public/UI/' + item.secondCurrency + '.png')" alt="">
      {{item.secondCurrency}} {{item.resultAmount}}
      {{item.rateValue}}
    </template>
    
  </history-item>
</template>

<script>
import HistoryItem from "../layout/HistoryItem.vue";
export default {
  components: {
    HistoryItem,
  },
  methods:{
    
  }
};
</script>
