<template>
  <div class="wrapper">
    <div class="home">
      <p class="home__title">Your wallet</p>
      <div class="home__wallet">
        <div class="home__wallet-title">
          <p>Current Balance</p>
          <img
            class="home__wallet-logo"
            src="../../assets/UI/mastercard_logo.png"
            alt="mastercard logo"
          />
        </div>
        <div class="home__wallet-box">
          <p class="home__wallet-balance" @click="getCurrentRate">
            {{ "PLN " + $store.getters.fixedPlnAccount }}
          </p>
          <p class="home__wallet-balance" @click="getCurrentRate">
            {{ "€ " + $store.getters.fixedEurAccount }}
          </p>
          <p class="home__wallet-balance" @click="getCurrentRate">
            {{ "$ " + $store.getters.fixedUsdAccount }}
          </p>
        </div>
      </div>

      <div class="home__history">
        <div class="home__history-header">
          <p class="home__history-header--title">Transaction history</p>
          <router-link
            class="home__history-header--link"
            v-if="$store.state.exchangeHistory.length > 0"
            to="/history"
            >See All</router-link
          >
        </div>

        <p
          class="home__history--text"
          v-if="$store.state.exchangeHistory.length == 0"
        >
          It looks like you don't have any transaction...
        </p>

        <div
          class="home__history-box"
          v-if="$store.state.exchangeHistory.length > 0"
        >
          <history-item
            v-for="item in this.$store.state.exchangeHistory.slice(0, 3)"
            :key="item.inputAmount"
          >
            <template v-slot:date>
              {{ item.date }}
            </template>

            <template v-slot:firstCurrencyImage>
              <img
                :src="
                  require('../../../public/UI/' + item.firstCurrency + '.png')
                "
                :alt="item.firstCurrency + 'flag'"
                class="home__history--image"
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
                :src="
                  require('../../../public/UI/' + item.secondCurrency + '.png')
                "
                :alt="item.secondCurrency + 'flag'"
                class="home__history--image"
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 280px;
    height: 200px;
    padding: 0.2rem 2rem;
    border-radius: 20px;
    background: rgb(255, 98, 0);
    background: linear-gradient(
      45deg,
      rgb(226, 115, 46) 0%,
      rgb(224, 41, 130) 100%
    );
    &-title {
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      margin-top: 1.2rem;
    }
    &-box {
      margin-bottom: 1.6rem;
    }
    &-balance {
      text-align: left;
      font-weight: 600;
      font-size: 20px;
      color: rgb(255, 255, 255);
      margin: 0.3rem 0;
      letter-spacing: 1px;
    }
    &-logo {
      height: 50px;
    }
  }
  &__history {
    margin-bottom: 60px;
    width: 100%;
    &--image {
      height: 28px;
    }
    &--text {
      margin: 0;
    }
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;
      &--link {
        color: #000;
      }
      &--title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 1rem;
      }
    }
  }
}

@media (min-width: 768px) {
  .home {
    &__wallet {
      width: 300px;
      padding: 0.8rem 4rem;
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
