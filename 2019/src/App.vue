<template>
  <div id="app">
    <Header></Header>
    <BigHead></BigHead>
    <One />
    <Two />
    <Three />
    <Four />
    <Five />
    <Six />
    <Seven />
    <Eight />
    <Nine />
    <Ten />

    <div class="bg-after" ref="bg"></div>
    <Page id="thanks">
      <div class="static" style="min-height: unset;">
        <div class="std">
          <p class="-big">
            以上就是全部内容了
            <br />
            <small>感谢有你。</small>
            <br />
            <small>在新的一年里，还请你和我做朋友。</small>
          </p>
          <div class="finish">
            <div class="btn" @click="handleClick" ref="finish_btn">
              <span>{{ !ok ? '嗯！' : '好耶！' }}</span>
            </div>
          </div>
        </div>
      </div>
    </Page>

    <div class="page-navigation" ref="navigation">
      <div class="arrow"></div>
    </div>
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
import Six from './components/Pages/6'
import Seven from './components/Pages/7'
import Eight from './components/Pages/8'
import Nine from './components/Pages/9'
import Ten from './components/Pages/10'
import Page from './components/FullPage'

import A1 from './animations/1'
import A2 from './animations/2'

export default {
  components: {
    BigHead,
    Header,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Page
  },
  computed: {
    ...mapGetters(['viewport'])
  },
  data() {
    return {
      scroller: new ScrollMagic.Controller(),
      scenes: [],
      timeLines: [],
      tweeners: [],
      ok: 0
    }
  },
  methods: {
    ...mapActions(['updateViewport']),
    setupScenes() {
      const scenesElements = document.querySelectorAll('.scene')
      for (let [i, scenesElement] of Array.from(scenesElements).entries()) {
        this.tweeners[i] = new TimelineMax()
        this.timeLines[i] = new TimelineMax({ paused: true })
        this.scenes[i] = new ScrollMagic.Scene({
          triggerElement: scenesElement,
          // offset: -this.viewport.h / 2,
          duration: scenesElement.offsetHeight
        })
          .setTween(this.tweeners[i])
          .addTo(this.scroller)
          .reverse(true)
          .setClassToggle(scenesElement, 'active')
        this.tweeners[i]
          .fromTo(
            '.static-container',
            1,
            { autoAlpha: 0, filter: 'blur(5px)' },
            { autoAlpha: 1, filter: 'blur(0px)' }
          )
          .to(scenesElement, 1, { autoAlpha: 1 })
          .fromTo(
            '.static-container',
            1,
            { autoAlpha: 1, filter: 'blur(0px)' },
            { autoAlpha: 0, filter: 'blur(5px)' }
          )
          .eventCallback('onUpdate', () => {
            TweenMax.to(this.timeLines[i], 0.5, {
              progress: this.tweeners[i].progress()
            })
          })
      }
    },
    buildLoops() {
      A1.build()
      A2.build()
    },
    hookLoops() {
      this.scenes[0].on('enter', e => {
        if (e.scrollDirection === 'FORWARD') {
          A1.play()
        }
        if (e.scrollDirection === 'REVERSE') {
          A1.stop()
        }
      })
      this.scenes[1].on('enter', e => {
        if (e.scrollDirection === 'FORWARD') {
          A1.play()
          A2.play()
        }
        if (e.scrollDirection === 'REVERSE') {
          A1.play()
          A2.stop()
        }
      })
      this.scenes[2].on('enter', e => {
        if (e.scrollDirection === 'FORWARD') {
          A1.stop()
          A2.play()
        }
        if (e.scrollDirection === 'REVERSE') {
          A1.play()
          A2.play()
          // console.log('reverse')
        }
      })

      this.scenes[8].on('enter', e => {
        if (e.scrollDirection === 'REVERSE') {
          TweenMax.to('.page-navigation', {
            autoAlpha: 1
          })
          this.$refs.navigation.classList.remove('hide')
        }
      })
      this.scenes[9].on('enter', e => {
        if (e.scrollDirection === 'FORWARD') {
          TweenMax.to('.page-navigation', {
            autoAlpha: 0
          })
          this.$refs.navigation.classList.add('hide')
        }
        if (e.scrollDirection === 'REVERSE') {
          this.$refs.bg.style.top = '0'
          this.$refs.bg.style.left = '0'
          this.$refs.bg.classList.remove('active')
          this.$refs.finish_btn.classList.remove('active')
          this.ok = 0
        }
      })
    },
    sceneA1() {
      this.timeLines[1]
        .set('#scene-1', {
          autoAlpha: 0,
          scale: 0,
          xPercent: -100,
          yPercent: 50
        })
        .addLabel('start', 0)
        .to('#scene-1', {
          autoAlpha: 1,
          scale: 1,
          xPercent: 0,
          yPercent: 0
        })
        .to('#scene-1', {
          autoAlpha: 0,
          scale: 0,
          xPercent: -100,
          yPercent: -350
        })
    },
    sceneA2() {
      this.timeLines[2]
        .set('#scene-2', {
          autoAlpha: 0,
          scale: 0,
          xPercent: -100,
          yPercent: 50
        })
        .addLabel('start', 0)
        .to('#scene-2', {
          autoAlpha: 1,
          scale: 1,
          xPercent: 0,
          yPercent: 100
        })
        .to('#scene-2', {
          autoAlpha: 0,
          scale: 0,
          xPercent: -100,
          yPercent: 400
        })
    },
    sceneA3() {
      this.timeLines[5]
        .set('#wave', {
          autoAlpha: 0,
          xPercent: -100,
          yPercent: 50
        })
        .addLabel('start', 0)
        .to('#wave', {
          autoAlpha: 1,
          scale: 1,
          xPercent: 0,
          yPercent: 100
        })
        .to('#wave', {
          autoAlpha: 0,
          scale: 0,
          xPercent: -100
          // yPercent: 400,
        })
    },
    handleClick(e) {
      // console.log(e);

      this.$refs.bg.style.top = e.y + 'px'
      this.$refs.bg.style.left = e.x + 'px'
      this.$refs.bg.classList.add('active')
      this.$refs.finish_btn.classList.add('active')
      this.ok = 1
    }
  },
  created() {
    this.updateViewport()
    window.addEventListener('resize', this.updateViewport)
    window.addEventListener('beforeunload', () => window.scroll(0, 0))
  },
  mounted() {
    this.setupScenes()
    this.buildLoops()
    this.hookLoops()
    this.sceneA1()
    this.sceneA2()
    this.sceneA3()
  }
}
</script>
<style>
@import './app.css';
@import './font.css';
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
.static
  padding calc(50vh - 3.5rem) 0 0
  margin 0 25vw
  position relative
@media (max-width: 550px)
  .static-container
    margin 0 12vw
</style>
