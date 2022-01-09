<template>
  <div class="menu">
    <button class="menu__item">
      <router-link to="/home"
        ><img class="menu__item-img" src="../../assets/UI/home.svg" alt="Powrót na stronę główną"
      /> <p class="menu__item-text">Home</p> </router-link>
    </button>
    <button class="menu__item">
      <router-link to="/exchange"
        ><img class="menu__item-img" src="../../assets/UI/repeat.svg" alt="Wymiana walut"
      /> <p class="menu__item-text">Exchange</p> </router-link>
    </button>
    <button class="menu__item">
      <router-link to="/history"
        ><img class="menu__item-img" src="../../assets/UI/history.svg" alt="Historia transakcji"
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
  background-color: rgb(112, 145, 182);
  &__item {
    background: none;
    border: none;
    &-img {
      height: 34px;
      color: rgb(255, 255, 255);
    }
    &-text{
      margin: 0;
      padding: 0;
    }
  }
}
@media (min-width: 768px) {
  .menu {
    display: none;
  }
}
</style>
