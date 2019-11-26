<template>
  <page>
    <div class="wrap">
      <div class="title">
        {{ year }}·年鉴
        <br />
        <span class="theme">{{ theme }}</span>
      </div>
    </div>
  </page>
</template>

<script>
import page from './FullPage'
import { mapGetters } from 'vuex'

export default {
  components: {
    page
  },

  computed: {
    ...mapGetters(['year', 'theme', 'viewport'])
  }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/_color'
.wrap
  position absolute
  top 50%
  left 30%
  perspective 300
.title
  font-size 50px
  transform rotateX(62deg)
  position relative
  border-left 2px solid blue
  animation appear 1.5s ease-out forwards
  padding-left 30px
  transform-origin bottom
.title::before
  content ''
  position absolute
  left 0
  top 50%
  width 12px
  height 12px
  border-radius 50%
  background blue
  transform translate(-50%, -50%)
  animation buling 1.5s infinite
.theme
  font-size 20px
  line-height 20px
  color grey
@keyframes appear
  0%
    opacity 0
    transform rotateX(60deg) translateZ(180px) translateY(-180px)
  to
    opacity 1
    transform rotateX(0)
@keyframes buling
  0%
    opacity 0
  50%
    opacity 1
  to
    opacity 0
</style>
