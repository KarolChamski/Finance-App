<template>
  <div class="header">
    <div class="wrapper">
      <div class="header__container">
        <h1 class="header__title">Hello World</h1>
        <div class="header__menu">
          <button class="header__menu-item">
              <img
                class="header__menu-item-img"
                src="../../assets/UI/home.svg"
                alt="Powrót na stronę główną"
              />
            <router-link to="/home">
              <p class="header__menu-item-text">Home</p>
            </router-link>
          </button>

          <button class="header__menu-item">
              <img
                class="header__menu-item-img"
                src="../../assets/UI/repeat.svg"
                alt="Wymień waluty"
              />
            <router-link to="/exchange">
              <p class="header__menu-item-text">Currency Exchange</p>
            </router-link>
          </button>

          <button class="header__menu-item">
              <img
                class="header__menu-item-img"
                src="../../assets/UI/history.svg"
                alt="Historia Transakcji"
              />
            <router-link to="/history">
              <p class="header__menu-item-text">Transaction History</p>
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: none;
  position: fixed;
  width: 300px;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  &__container {
    display: flex;
    flex-direction: column;
    color: rgb(255, 255, 255);
  }

  &__menu {
    display: flex;
    flex-direction: column;
    &-item {
      display: none;
    }
  }

  &__title {
    font-size: 24px;
  }

  button {
    margin: 0 1rem;
    background: none;
    border: none;
    color: rgb(255, 255, 255);
  }
}
@media (min-width: 1024px) {
  .header {
    display: block;
    &__menu-item {
      display: flex;
    }
  }
}
</style>
