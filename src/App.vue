<template>
<the-header></the-header>
  <h2>{{$store.state.accountBalance}}</h2>

</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
components:{
  TheHeader
}
}
</script>

<style lang="scss">
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}



</style>


