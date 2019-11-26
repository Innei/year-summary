<template>
  <div class="page">
    <slot />
  </div>
</template>

<style lang="stylus" scoped>
.page
  height 100vh
  width calc(100vw - 16px)
  position relative
</style>
