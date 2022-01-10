<template>
  <div class="menu">
    <button class="menu__item">
      <router-link to="/home"
        ><img class="menu__item-img" src="../../assets/UI/home.png" alt="Powrót na stronę główną"
      /> <p class="menu__item-text">Home</p> </router-link>
    </button>
    <button class="menu__item">
      <router-link to="/exchange"
        ><img class="menu__item-img" src="../../assets/UI/repeat.png" alt="Wymiana walut"
      /> <p class="menu__item-text">Exchange</p> </router-link>
    </button>
    <button class="menu__item">
      <router-link to="/history"
        ><img class="menu__item-img" src="../../assets/UI/history.png" alt="Historia transakcji"
      /> <p class="menu__item-text">History</p> </router-link>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  &__item {
    background: none;
    border: none;
    height: 50px;
    &-img {
      color: rgb(255, 255, 255);
    }
    &-text{
      margin: 0;
      padding: 0;
    }
  }
}
@media (min-width: 1024px) {
  .menu {
    display: none;
  }
}
</style>
