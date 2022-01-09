<template>
<div class="wrapper">
    <div class="item">


  <header>
    <slot name="date"></slot>
  </header>

  <main>
    
    <slot name="firstCurrency"></slot>
    <img src="../../assets/UI/swap_horiz.png" alt="">
    <slot name="secondCurrency"></slot>
    
  </main>



    </div>
</div>
</template>


<style lang="scss" scoped>

</style>