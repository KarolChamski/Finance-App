<template>
  <div class="wrapper">
    <div class="the-exchange">
      <div class="wallet">
        <p class="wallet__title">Current Balance</p>

        <p class="wallet__currency" @click="getCurrentRate">
          {{ "PLN " + $store.getters.fixedPlnAccount }}
        </p>
        <p class="wallet__currency" @click="getCurrentRate">
          {{ "€ " + $store.getters.fixedEurAccount }}
        </p>
        <p class="wallet__currency" @click="getCurrentRate">
          {{ "$ " + $store.getters.fixedUsdAccount }}
        </p>
      </div>

      <div class="exchange">
        <p class="exchange__title">Currency Exchange</p>
        <div class="exchange__box">
          <select
            @click="hidePrediction"
            class="exchange__select"
            v-model="currency.selectedFirstCurrency"
          >
            <option disabled value="">Select a currency</option>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <input
            class="exchange__input"
            v-model="currency.exchangeInput"
            step="any"
            type="number"
            min="1"
            max="999999999"
            @click="selectClick"
          />
        </div>

        <img class="exchange__img" src="../../assets/UI/swap.png" alt="exchange arrows icon" />

        <div class="exchange__box">
          <select
            @click="hidePrediction"
            class="exchange__select"
            v-model="currency.selectedSecondCurrency"
          >
            <option disabled value="">Select a currency</option>
            <option value="PLN">PLN</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <button class="exchange__button" @click="getRate">Check rate</button>
        </div>
      </div>
      <p class="exchange__error" v-if="error1">
        You have to choose both currency
      </p>
      <p class="exchange__error" v-if="error2">
        You have to fill empty amount input
      </p>
      <p class="exchange__error" v-if="error3">
        You don't have enough money to make an exchange
      </p>
      <p class="exchange__error" v-if="error4">
        Selected currencies are the same
      </p>

      <div class="prediction__box" v-if="prediction">
        <p class="prediction__box-heading">Otrzymasz:</p>
        <p class="prediction__box-text">
          {{ currency.exchangeInput.toFixed(0) }}
          {{ currency.selectedFirstCurrency }} =
          <span class="prediction__box-bold"
            >{{ $store.state.exchangeResult.toFixed(2) }}
            {{ currency.selectedSecondCurrency }}</span
          >
        </p>
        <p class="prediction__box-rate">
          1 {{ currency.selectedFirstCurrency }} =
          {{ $store.state.currentRate }} {{ currency.selectedSecondCurrency }}
        </p>

        <button class="accept-button" @click="acceptExchange">Akceptuj</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Created a currency object because its easier to put into action as payload
      currency: {
        selectedFirstCurrency: "",
        selectedSecondCurrency: "",
        exchangeInput: null,
      },
      error1: false,
      error2: false,
      error3: false,
      error4: false,
      selectedError: false,
      prediction: false,
      currentAccount: 0,
    };
  },
  methods: {
    selectClick() {
      this.currency.exchangeInput = null;
      this.prediction = false;
      this.$store.commit("resetExchange");
      this.error3 = false;
    },
    getRate() {
      this.$store.dispatch("getCurrentRate", this.currency);
      this.getCurrentAccount();
      // Validation
      if (
        this.currency.selectedSecondCurrency == "" ||
        this.currency.selectedFirstCurrency == ""
      ) {
        this.error1 = true;
        this.error2 = false;
      } else if (this.currency.exchangeInput == null) {
        this.error1 = false;
        this.error2 = true;
      } else if (
        this.currency.selectedFirstCurrency ==
        this.currency.selectedSecondCurrency
      ) {
        this.error4 = true;
        this.error1 = false;
        this.error2 = false;
      }

      if (
        this.currency.exchangeInput !== null &&
        this.currency.selectedSecondCurrency !== "" &&
        this.currency.selectedFirstCurrency !== "" &&
        this.currency.selectedFirstCurrency !==
          this.currency.selectedSecondCurrency
      ) {
        this.prediction = true;
        this.error1 = false;
        this.error2 = false;
        this.error4 = false;
      }
    },
    hidePrediction() {
      this.prediction = false;
      this.error3 = false;
    },
    acceptExchange() {
      if (this.currency.exchangeInput <= this.currentAccount) {
        this.$store.dispatch("acceptExchange", this.currency);
        this.prediction = false;
        this.currency.exchangeInput = null;
      } else if (this.currency.exchangeInput > this.currentAccount) {
        this.error3 = true;
      }
    },
    // To validate before acceptation exchange sets currentAccount data to selected value - protection against overdraft
    getCurrentAccount() {
      if (this.currency.selectedFirstCurrency == "PLN") {
        this.currentAccount = this.$store.state.accountBalancePLN;
      } else if (this.currency.selectedFirstCurrency == "EUR") {
        this.currentAccount = this.$store.state.accountBalanceEUR;
      } else if (this.currency.selectedFirstCurrency == "USD") {
        this.currentAccount = this.$store.state.accountBalanceUSD;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.the-exchange {
  display: block;
}
.exchange {
  &__img {
    margin: 1rem;
  }
  &__box {
    display: flex;
    justify-content: space-around;
    height: 40px;
    left: 0;
  }
  &__select {
    width: 120px;
    left: 0;
  }
  &__button {
    width: 100%;
    margin-left: 1rem;
    border: 0;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
  &__input {
    width: 100%;
    margin-left: 1rem;
    margin: 0;
    padding: 0;
  }
  &__title {
    text-align: left;
    font-weight: 600;
  }
  &__error {
    color: rgb(255, 0, 0);
  }
}
.wallet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &__title {
    color: #aca4a4;
  }
  &__money {
    display: flex;
    flex-direction: row;
  }
  &__currency {
    margin: 0;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 1px;
  }
}
.prediction {
  &__box {
    display: flex;
    flex-direction: column;

    &-bold {
      font-weight: 600;
    }
    &-text {
      font-size: 24px;
    }
    &-heading {
      align-self: start;
      font-size: 12px;
      color: #aca4a4;
    }
    &-rate {
      color: #aca4a4;
    }
  }
}
.accept-button {
  align-self: center;
  width: 50%;
  height: 50px;
  margin-bottom: 1rem;
  border: 1px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
}
</style>
