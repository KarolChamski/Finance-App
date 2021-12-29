<template>
    <h2 @click="getCurrentRate">{{$store.state.accountBalance}}</h2>
</template>

<script>
// export default{
//     data(){
//         return{
//             elo: ''
//         }
//     },
    
//     methods:{
//         getCurrentRate(){
//                 fetch ('https://api.vatcomply.com/rates?base=PLN')
//                 .then((response) => {
//                     if (response.ok) {
//                         return response.json()
//                     }
//                 })
//                 .then((data) => {
//                     this.elo = data.rates
//                     console.log(this.elo.EUR);
//                 })
           
//             }
//     }

// }
</script>