<template>
  <div class="app">
    <the-header></the-header>
    <router-view></router-view>
  </div>
  <menu-bar></menu-bar>
</template>

<script>
import TheHeader from "./components/layout/SideMenu.vue";
import MenuBar from "./components/layout/MobileBar.vue";

export default {
  components: {
    TheHeader,
    MenuBar,
  },
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
  top: 0;
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
a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}
.active {
  font-weight: 600;
  color: rgb(226, 115, 46);
  filter: invert(60%) sepia(62%) saturate(1400%) hue-rotate(341deg)
    brightness(92%) contrast(91%);
}
.app {
  display: flex;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@media (min-width: 1024px) {
  .active {
    font-weight: normal;
  }
}
</style>
