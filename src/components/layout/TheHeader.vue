<template>
  <div class="header">
    <div class="wrapper">
        <h1 class="header__title">Finance App</h1>
      <div class="header__container">
        <div class="header__menu">
          <button class="header__menu-item">
              <img
                class="header__menu-item-img"
                src="../../assets/UI/home.png"
                alt="Return to home page"
              />
            <router-link to="/home">
              <p class="header__menu-item-text">Home</p>
            </router-link>
          </button>

          <button class="header__menu-item">
              <img
                class="header__menu-item-img"
                src="../../assets/UI/repeat.png"
                alt="Currency exchange page"
              />
            <router-link to="/exchange">
              <p class="header__menu-item-text">Currency Exchange</p>
            </router-link>
          </button>

          <button class="header__menu-item">
              <img
                class="header__menu-item-img"
                src="../../assets/UI/history.png"
                alt="Transaction history page"
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
      &-text{
        margin: 0;
      }
      &-img{
        margin-right: 2rem;
        height: 30px;
      }
    }
  }
}
</style>
