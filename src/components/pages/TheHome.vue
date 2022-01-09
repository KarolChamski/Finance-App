<template>
    <div class="home">
        <div class="wrapper">
    <h2 @click="getCurrentRate">{{$store.state.accountBalancePLN + "zł"}}</h2>
    <h2 @click="getCurrentRate">{{$store.state.accountBalanceEUR + "€"}}</h2>
    <h2 @click="getCurrentRate">{{$store.state.accountBalanceUSD + "$"}}</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>