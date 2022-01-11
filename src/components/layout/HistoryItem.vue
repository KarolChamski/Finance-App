<template>
<div class="history-date">
  <header>
    <slot name="date"></slot>
  </header>
</div>

  <main>

    <div class="item">
    <slot name="firstCurrency"></slot>
    </div>

  <div class="item">
    <img src="../../assets/UI/swap_horiz.png" alt="">
  </div>

  <div class="item">
    <slot name="secondCurrency"></slot>
  </div>
    
  </main>

</template>


<style lang="scss" scoped>
  .history-date{
    display: flex;
    font-size: 12px;
    color: #949292;
    margin-top: 1rem;
  }
main{
  display: flex;
  justify-content: space-between;
  align-items: space-between;
}

</style>