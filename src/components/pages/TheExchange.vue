<template>
  <div class="wrapper">
    <div class="the-exchange">

    
    <div class="wallet">
      <p class="wallet__title">Current Balance</p>

      <p class="wallet__currency" @click="getCurrentRate">{{'PLN ' +  $store.state.accountBalancePLN}}</p>
      <p class="wallet__currency" @click="getCurrentRate">{{'€ ' + $store.state.accountBalanceEUR}}</p>
      <p class="wallet__currency" @click="getCurrentRate">{{'$ ' + $store.state.accountBalanceUSD}}</p>

    </div>

    <div class="exchange">
      <p class="exchange__title">Currency Exchange</p>
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
          step="any"
          min="5"
        />
      </div>

      <img class="exchange__img" src="../../assets/UI/swap.png" alt="" />

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
      <p class="prediction__box-heading">Otrzymasz:</p>
      <p class="prediction__box-text">
        {{ currency.exchangeInput.toFixed(0) }} {{ currency.selectedFirstCurrency }} = 
        <span class="prediction__box-bold">{{ $store.state.exchangeResult.toFixed(3) }} {{ currency.selectedSecondCurrency }}</span> 
      </p>
      <p class="prediction__box-rate">
        1 {{ currency.selectedFirstCurrency }} = {{ $store.state.currentRate }} {{currency.selectedSecondCurrency}}
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
  &__img{
    margin: 1rem;
  }
  &__box{
    display: flex;
    justify-content: space-around;  
    left: 0;
    height: 40px;
  }
  &__select{
    width: 120px;
    left: 0;
  }
  &__button{
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border: 0;
    width: 100%;
    margin-left: 1rem;
  }
  &__input{
    margin: 0;
    padding: 0;
    width: 100%;
    margin-left: 1rem;
  }
  &__title{
    font-weight: 600;
    text-align: left;
  }
}
.wallet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  &__title{
    color: #ACA4A4;
  }
  &__money {
    display: flex;
    flex-direction: row;
  }
  &__currency{
    margin: 0;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 1px;
  }
}
.prediction{
  &__box{
    display: flex;
    flex-direction: column;
    
    &-bold{
      font-weight: 600;
    }
    &-text{
      font-size: 24px;
    }
    &-heading{
      font-size: 12px;
      align-self: start;
      color: #ACA4A4;
    }
    &-rate{
      color: #ACA4A4;
    }
  }
}
.accept-button{
  border: 1px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  align-self: center;
  width: 50%;
  height: 50px;
}

</style>
