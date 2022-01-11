<template>
  <div class="wrapper">
    <div class="home">
      <p class="home__title">Your wallet</p>
      <div class="home__wallet">
        <div class="home__wallet-title">Current Balance</div>
        <h2 class="home__wallet-balance" @click="getCurrentRate">
          {{ "PLN " + $store.state.accountBalancePLN }}
        </h2>
        <h2 class="home__wallet-balance" @click="getCurrentRate">
          {{ "€ " + $store.state.accountBalanceEUR }}
        </h2>
        <h2 class="home__wallet-balance" @click="getCurrentRate">
          {{ "$ " + $store.state.accountBalanceUSD }}
        </h2>
      </div>

      <div class="home__history" v-if="$store.state.exchangeHistory.length > 0">
          <div class="home__history-header">
              <p class="home__history-header--title">Transaction history</p>
              <router-link class="home__history-header--link" to="/history">See All</router-link>
          </div>
        <history-item
          v-for="item in this.$store.state.exchangeHistory.slice(0, 3)"
          :key="item.inputAmount"
        >
          <template v-slot:date>
            {{ item.date }}
          </template>

          <template v-slot:firstCurrency>
            <img
              :src="
                require('../../../public/UI/' + item.firstCurrency + '.png')
              "
              alt=""
            />
            {{ item.firstCurrency }} {{ item.inputAmount }}
          </template>

          <template v-slot:secondCurrency>
            <img
              :src="
                require('../../../public/UI/' + item.secondCurrency + '.png')
              "
              alt=""
            />
            {{ item.secondCurrency }} {{ item.resultAmount.toFixed(2) }}
            <!-- {{item.rateValue}} -->
          </template>
        </history-item>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__title {
    text-align: left;
    font-size: 18px;
  }
  &__wallet {
    width: 300px;
    background: rgb(240,65,65);
background: linear-gradient(45deg, rgba(240,65,65,1) 0%, rgba(196,80,141,1) 50%, rgba(113,85,121,1) 100%);
    border-radius: 10px;
    padding: 0.8rem 1.5rem;
    &-title {
      color: #aca4a4;
      text-align: left;
    }
    &-balance {
      color: rgb(255, 255, 255);
      font-weight: 300;
      text-align: left;
    }
  }
  &__history{
      &-header{
          display: flex;
          align-items: center;
          justify-content: space-between;
          &--link{
              color: #000;
          }
      }
  }
}
</style>
<script>
import HistoryItem from "../layout/HistoryItem.vue";
export default{
      components: {
    HistoryItem,
  },
}
</script>
