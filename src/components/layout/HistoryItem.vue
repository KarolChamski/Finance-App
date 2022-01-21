<template>
  <div class="history">
    <div class="history-date">
      <header>
        <slot name="date"></slot>
      </header>
    </div>

    <main>
      <div class="item">
        <div class="item__image">
          <slot name="firstCurrencyImage"></slot>
        </div>

        <p class="item__value">
          <slot name="firstCurrencyValue"></slot>
        </p>

        <p class="item__currency">
          <slot name="firstCurrency"></slot>
        </p>
      </div>

      <div class="item">
        <img
          class="item__icon"
          src="../../assets/UI/swap_horiz.png"
          alt="replace arrows icon"
        />
      </div>

      <div class="item">
        <div class="item__image">
          <slot class="item__image" name="secondCurrencyImage"></slot>
        </div>

        <p class="item__value">
          <slot name="secondCurrencyValue"></slot>
        </p>

        <p class="item__currency">
          <slot name="secondCurrency"></slot>
        </p>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.history {
  width: 100%;
}
.history-date {
  display: flex;
  margin-top: 1rem;
  font-size: 12px;
  color: #949292;
}
main {
  display: flex;
  justify-content: space-between;
}
.item {
  display: flex;
  align-items: center;
  &__value {
    margin-right: 0.2rem;
    font-weight: 600;
  }
  &__image {
    margin-right: 0.6rem;
  }
  &__icon {
    height: 28px;
  }
}
</style>
