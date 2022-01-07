<template>
    <ul v-for="item in this.$store.state.exchangeHistory" :key="item.inputAmount">
        <li>{{item.date}}</li>
        <li>{{item.firstCurrency}}</li>
        <li>{{item.secondCurrency}}</li>
        <li>{{item.inliutAmount}}</li>
        <li>{{item.resultAmount}}</li>
    </ul>
    
    <button @click="history">Historia</button>

</template>


