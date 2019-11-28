<template>
  <div>
    <Header></Header>
    <BigHead></BigHead>
    <one :go="completed === 1" />
    <two></two>
    <three></three>
    <four></four>
    <five />
  </div>
</template>

<script>
import * as ScrollMagic from 'scrollmagic'

import { TweenMax, TimelineMax } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

import { mapActions, mapGetters } from 'vuex'

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
    Four,
    Five
  },
  computed: {
    ...mapGetters(['viewport'])
  },
  data () {
    return {
      scroller: new ScrollMagic.Controller(),
      scenes: [],
      timeLines: [],
      tweeners: [],
      completed: -1
    }
  },
  methods: {
    ...mapActions(['updateViewport']),
    setupScenes () {
      const scenesElements = document.querySelectorAll(".scene");
      for (let [i, scenesElement] of Array.from(scenesElements).entries()) {
        this.tweeners[i] = new TimelineMax();
        this.timeLines[i] = new TimelineMax({ paused: true });
        // create scenes on ScrollMagic
        this.scenes[i] = new ScrollMagic.Scene({
          // trigger on the scene element
          triggerElement: scenesElement,
          // start half screen before
          offset: -this.viewport.h / 4,
          // offset: 0,
          // lasts for the scene element height
          // duration: scenesElement.offsetHeight / 1.8
          duration: scenesElement.offsetHeight
        })
          .setTween(this.tweeners[i])
          .addTo(this.scroller).reverse(true)
          .setClassToggle(scenesElement, "active");
        this.tweeners[i]
          .fromTo(scenesElement, 2, { autoAlpha: 0, filter: "blur(5px)" }, { autoAlpha: 1, filter: "blur(0px)" })
          .eventCallback('onComplete', () => {
            // console.log(i);
            this.completed = i + 1
          })
          .fromTo(scenesElement, 1, { autoAlpha: 1, filter: "blur(0px)" }, { autoAlpha: 0, filter: "blur(5px)" })
      }



    }
  },
  created () {
    this.updateViewport()
    window.addEventListener('resize', this.updateViewport)
    window.addEventListener('beforeunload', () => window.scroll(0, 0))
  },
  mounted () {
    this.setupScenes();
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
