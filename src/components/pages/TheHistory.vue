<template>  
  <div class="wrapper">
    <div class="the-history">
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
  </div>
  </div>
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
<style lang="scss" scoped>
.the-history{
  display: block;
  top: 0;
}
</style>
