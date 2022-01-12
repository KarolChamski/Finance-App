<template>
  <div class="wrapper">
    <div class="home">
      <p class="home__title">Your wallet</p>
      <div class="home__wallet">
        <div class="home__wallet-title">
          <p>Current Balance</p>
          <img src="../../assets/UI/mastercard_logo.png" alt="" />
        </div>
        <h2 class="home__wallet-balance" @click="getCurrentRate">
          {{ "PLN " + $store.getters.fixedPlnAccount }}
        </h2>
        <h2 class="home__wallet-balance" @click="getCurrentRate">
          {{ "€ " + $store.getters.fixedEurAccount }}
        </h2>
        <h2 class="home__wallet-balance" @click="getCurrentRate">
          {{ "$ " + $store.getters.fixedUsdAccount }}
        </h2>
      </div>


      <div class="home__history" >
        <div class="home__history-header">
          <p class="home__history-header--title">Transaction history</p>
          <router-link class="home__history-header--link" v-if="$store.state.exchangeHistory.length > 0" to="/history"
            >See All</router-link
          >
        </div>

        <p class="home__history--text" v-if="$store.state.exchangeHistory.length == 0">It looks like you don't have any transaction...</p>



        <div class="home__history-box" v-if="$store.state.exchangeHistory.length > 0">
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
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__title {
    text-align: left;
    font-size: 20px;
    font-weight: 600;
  }
  &__wallet {
    width: 300px;
    background: rgb(140,57,36);
    background: linear-gradient(180deg, rgba(140,57,36,1) 0%, rgba(210,56,56,1) 50%, rgba(125,66,66,1) 100%);
    border-radius: 20px;
    padding: 0.8rem 4rem;
    &-title {
      color: #aca4a4;
      display: flex;
      justify-content: space-between;
    }
    &-balance {
      color: rgb(255, 255, 255);
      font-weight: 300;
      text-align: left;
    }
  }
  &__history {
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &--link {
        color: #000;
      }
      &--title{
            font-size: 20px;
    font-weight: 600;
      }
    }
  }
}
</style>
<script>
import HistoryItem from "../layout/HistoryItem.vue";
export default {
  components: {
    HistoryItem,
  },
};
</script>
