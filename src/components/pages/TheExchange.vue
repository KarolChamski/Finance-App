<template>
<div class="wrapper">

<div class="wallet">
    <p class="wallet__title">Twój portfel</p>
    
    <p @click="getCurrentRate">{{$store.state.accountBalancePLN + "zł"}}</p>
    <p @click="getCurrentRate">{{$store.state.accountBalanceEUR + "€"}}</p>
</div>

<div class="exchange">

    <select v-model="selectedCurrency">
    <option disabled value="">Wybierz walutę</option>
    <option>PLN</option>
    <option>€</option>
    <option>$</option>
  </select>

</div>
    <button @click="exchange">Wymień waluty na €</button>



    
</div>

</template>

<script>
export default{
    data(){
        return{
            selectedCurrency: ''
        }
    },
    methods:{
        exchange(){
             this.$store.dispatch('getCurrentRate')
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