<template>
  <div class="header">
    <div class="wrapper">
      <h1 class="header__title">Finance App</h1>
      <div class="header__container">
        <div class="header__menu">
          <router-link to="/home">
            <button class="header__menu-item">
              <img
                class="header__menu-item-img"
                src="../../assets/UI/home.svg"
                alt="Return to home page"
              />
              <p class="header__menu-item-text">Home</p>
            </button>
          </router-link>

          <router-link to="/exchange">
            <button class="header__menu-item">
              <img
                class="header__menu-item-img"
                src="../../assets/UI/repeat.svg"
                alt="Currency exchange page"
              />
              <p class="header__menu-item-text">Currency Exchange</p>
            </button>
          </router-link>

          <router-link to="/history">
            <button class="header__menu-item">
              <img
                class="header__menu-item-img"
                src="../../assets/UI/history.svg"
                alt="Transaction history page"
              />
              <p class="header__menu-item-text">Transaction History</p>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: none;
  position: relative;
  width: 300px;
  height: 100vh;
  top: 0;
  left: 0;
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
    color: #fff;
    margin-top: 6rem;
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
    display: flex;
    &__menu-item {
      display: flex;
      align-items: center;
      padding: 2rem;
      cursor: pointer;
      &-text {
        margin: 0;
      }
      &-img {
        margin-right: 2rem;
        height: 20px;
      }
    }
  }
}
</style>
