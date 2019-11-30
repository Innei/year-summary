<template>
  <header>
    <div class="year">
      <span>{{ year }}</span>
      <span class="dot">·</span>
      <span>年鉴</span>
    </div>
    <div class="theme">
      <span>{{ theme }}</span>
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['year', 'theme', 'viewport'])
  }
}
</script>
<style lang="stylus" scoped>
header
  position sticky
  top 0
  height 30px
  line-height 30px
  padding 0.5rem 1rem
  background rgba(255, 255, 255, 0.2)
  backdrop-filter blur(5px)
  display flex
  justify-content space-between
  user-select none
  z-index 9
</style>
