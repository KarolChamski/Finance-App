<template>
<the-header></the-header>
  <h2>{{$store.state.accountBalance}}</h2>
<menu-bar></menu-bar>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import MenuBar from './components/layout/MenuBar.vue';

export default {
components:{
  TheHeader,
  MenuBar
}
}
</script>

<style lang="scss">
body{
  margin: 0;
  min-height: 100vh;
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


