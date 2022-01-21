<template>
  <div class="wrapper">
    <div class="the-history">
      <h2 class="the-history__title">Transaction History</h2>
      <p
        v-if="$store.state.exchangeHistory.length == 0"
        class="the-history__empty"
      >
        Make an exchange to see your transaction history here!
      </p>
      <history-item
        v-for="item in this.$store.state.exchangeHistory"
        :key="item.inputAmount"
      >
        <template v-slot:date>
          {{ item.date }}
        </template>

        <template v-slot:firstCurrencyImage>
          <img
            :src="require('../../../public/UI/' + item.firstCurrency + '.png')"
            :alt="item.firstCurrency + 'flag'"
            class="the-history__image"
          />
        </template>
        <template v-slot:firstCurrencyValue>
          {{ item.inputAmount }}
        </template>
        <template v-slot:firstCurrency>
          {{ item.firstCurrency }}
        </template>

        <template v-slot:secondCurrencyImage>
          <img
            :src="require('../../../public/UI/' + item.secondCurrency + '.png')"
            :alt="item.firstCurrency + 'flag'"
            class="the-history__image"
          />
        </template>
        <template v-slot:secondCurrencyValue>
          {{ item.resultAmount.toFixed(2) }}
        </template>
        <template v-slot:secondCurrency>
          {{ item.secondCurrency }}
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
  methods: {},
};
</script>
<style lang="scss" scoped>
.the-history {
  display: block;
  position: relative;
  top: 0;
  right: 0;
  width: 350px;
  &__title {
    text-align: left;
    font-size: 20px;
    font-weight: 600;
  }
  &__empty {
    text-align: left;
  }
  &__image {
    height: 28px;
  }
}
</style>
