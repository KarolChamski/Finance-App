<template>
  <div class="header">
    <div class="wrapper">
      <div class="header__container">
        <h1 class="header__title">FinanceApp</h1>
        <div class="header__menu">
          <button class="header__menu-item">Wymień waluty</button>
          <button class="header__menu-item">Historia transakcji</button>
        </div>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.header {
    width: 100%;
    position: sticky;
    background-color: rgb(112, 145, 182);
  &__container {
    display: flex;
    justify-content: center;
    color: rgb(255, 255, 255);
  }

  &__menu {
      display: flex;
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
@media (min-width: 768px) {
    .header {
        &__container{
            justify-content: space-between;
      }
    &__menu-item {
      display: block;
    }
  }
}
</style>
