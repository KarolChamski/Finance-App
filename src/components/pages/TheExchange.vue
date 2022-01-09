<template>
  <div class="wrapper">
    <div class="the-exchange">

    
    <div class="wallet">
      <p class="wallet__title">Current Balance</p>

      <p class="wallet__currency" @click="getCurrentRate">{{ $store.state.accountBalancePLN + "zł" }}</p>
      <p class="wallet__currency" @click="getCurrentRate">{{ $store.state.accountBalanceEUR + "€" }}</p>
      <p class="wallet__currency" @click="getCurrentRate">{{ $store.state.accountBalanceUSD + "$" }}</p>

    </div>

    <div class="exchange">
      <div class="exchange__box">
        <select class="exchange__select" v-model="currency.selectedFirstCurrency">
          <option disabled value="">Wybierz walutę</option>
          <option value="PLN">PLN</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
        <input
          class="exchange__input"
          v-model="currency.exchangeInput"
          type="number"
        />
      </div>

      <img src="../../assets/UI/swap.png" alt="" />

      <div class="exchange__box">
        <select class="exchange__select" v-model="currency.selectedSecondCurrency">
          <option disabled value="">Wybierz walutę</option>
          <option value="PLN">PLN</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
        <button class="exchange__button" @click="getRate">Sprawdź kurs</button>
      </div>

    </div>

    <div class="prediction__box" v-if="prediction">
      <p>Otrzymasz:</p>
      <p>
        {{ currency.exchangeInput }} {{ currency.selectedFirstCurrency }} =
        {{ $store.state.exchangeResult }} {{ currency.selectedSecondCurrency }}
      </p>
      <p>
        1 {{ currency.selectedFirstCurrency }} = {{ $store.state.currentRate }} {{currency.selectedSecondCurrency}}
      </p>


      <button @click="acceptExchange">Akceptuj</button>
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
        exchangeInput: "",
      },
      prediction: false,
      currentAccount: 0
    };
  },
  methods: {
    getRate() {
      this.$store.dispatch("getCurrentRate", this.currency);
      this.getCurrentAccount();
      // Basic validation
      if(this.currency.exchangeInput > 0 && this.currency.selectedSecondCurrency != '' && this.currency.selectedFirstCurrency != ''){
        this.prediction = true
      }
    },
    acceptExchange(){
      if(this.currency.exchangeInput < this.currentAccount){
        this.$store.dispatch("acceptExchange", this.currency);
        this.prediction = false
      }
    },
    // To validate before acceptation exchange sets currentAccount data to selected value - protection against overdraft
    getCurrentAccount(){
      if(this.currency.selectedFirstCurrency == 'PLN'){
        this.currentAccount = this.$store.state.accountBalancePLN
      } else if (this.currency.selectedFirstCurrency == 'EUR'){
        this.currentAccount = this.$store.state.accountBalanceEUR
      } else if (this.currency.selectedFirstCurrency == 'USD'){
        this.currentAccount = this.$store.state.accountBalanceUSD
      }
    }
  },

};
</script>

<style lang="scss" scoped>
.the-exchange{
  display: block;
}
.exchange{
  &__box{
    display: flex;
    justify-content: center;
    left: 0;
    height: 50px;
  }
  &__select{
    width: 200px;
    left: 0;
  }
  &__button{
    width: 200px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
  &__input{
    width: 200px;
    left: 0;
  }
}
.wallet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__money {
    display: flex;
    flex-direction: row;
  }
  &__currency{
    margin: 0;
  }
}
</style>
