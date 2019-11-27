<template>
  <ps class="ps">
    <Header></Header>
    <BigHead></BigHead>
    <one></one>
    <two></two>
    <three></three>
    <four></four>
    <five />
  </ps>
</template>

<script>
import * as ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

import { mapActions } from 'vuex'

import Header from './components/Header'
import BigHead from './components/BigHead'
import One from './components/Pages/1'
import Two from './components/Pages/2'
import Three from './components/Pages/3'
import Four from './components/Pages/4'
import Five from './components/Pages/5'
// import Six from './components/Pages/6'
export default {
  components: {
    BigHead,
    Header,
    One,
    Two,
    Three,
    Four, Five
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions(['updateViewport'])
  },
  created () {
    this.updateViewport()
    window.addEventListener('resize', this.updateViewport)
    window.addEventListener('beforeunload', () => window.scroll(0, 0))
  }
}
</script>
<style>
@import './app.css';
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+SC:500&display=swap&subset=chinese-simplified');
</style>

<style lang="stylus">
body, html
  margin 0
  padding 0
  font-family 'Noto Serif SC', serif
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
