<template>
<div class="wrapper">

<div class="wallet">
    <p class="wallet__title">Twój portfel</p>
    
    <p @click="getCurrentRate">{{$store.state.accountBalancePLN + "zł"}}</p>
    <p @click="getCurrentRate">{{$store.state.accountBalanceEUR + "€"}}</p>
</div>

<div class="exchange">

<div class="exchange__first-currency">
    <select v-model="selectedFirstCurrency">
    <option disabled value="">Wybierz walutę</option>
    <option>PLN</option>
    <option>€</option>
    <option>$</option>
  </select>
  <input class="exchange__input" v-model="exchangeInput" type="text">
</div>

<img src="../../assets/UI/swap.png" alt="">


<div class="exchange__second-currency">
    <select v-model="selectedSecondCurrency">
    <option disabled value="">Wybierz walutę</option>
    <option value="PLN">PLN</option>
    <option value="EUR">EUR</option>
    <option value="USD">$</option>
  </select>
    <button @click="getRate">Sprawdź kurs</button>
</div>

<p>Otrzymam:</p>
<p>{{exchangeInput}} = </p>

<p>Obecny kurs:</p>
<p>{{$store.state.currentRate}}</p>

<button>Akceptuj</button>

</div>

</div>
</template>

<script>
export default{
    data(){
        return{
            selectedFirstCurrency: '',
            selectedSecondCurrency: '',
            exchangeInput: ''
        }
    },
    methods:{
        exchange(){
             this.$store.dispatch('exchangeCurrency')
        },
        getRate(){
            this.$store.dispatch('getCurrentRate', this.selectedSecondCurrency)
        }
    }
}
</script>

<style lang="scss" scoped>
.wallet{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__money{
        display: flex;
        flex-direction: row;
    }
}


</style>