<template>
  <div class="header">
    <div class="wrapper">
      <div class="header__container">
        <h1 class="header__title"><router-link to="/home">FinanceApp</router-link></h1>
        <div class="header__menu">
          <button class="header__menu-item"><router-link to="/exchange">Wymień waluty</router-link></button>
          <button class="header__menu-item"><router-link to="/history">Historia Transakcji</router-link></button>
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
