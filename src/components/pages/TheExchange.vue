<template>
<p>{{$store.state.accountBalance}}</p>
 
    <button @click="exchange">Wymień waluty</button>
</template>

<script>
export default{
    methods:{
        exchange(){
             this.$store.dispatch('getCurrentRate')
        }
    }
}
</script>