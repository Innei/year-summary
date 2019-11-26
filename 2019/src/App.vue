<template>
  <ps class="ps">
    <Header></Header>
    <BigHead></BigHead>
    <BigHead></BigHead>
  </ps>
</template>

<script>
import { mapActions } from 'vuex'

import BigHead from './components/BigHead'
import Header from './components/Header'
export default {
  components: {
    BigHead,
    Header
  },
  methods: {
    ...mapActions(['updateViewport'])
  },
  created () {
    this.updateViewport()
    window.addEventListener('resize', this.updateViewport)
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-family 'Roboto Mono', monospace, 'Noto Serif TC', serif
body, html
  margin 0
  padding 0
html
  background #eee
::-webkit-scrollbar
  height 0
  width 0
.ps__thumb-y
  z-index 99
.ps
  height 100vh
</style>

<style lang="stylus" scoped></style>