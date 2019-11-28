<template>
  <page>
    <section class="scene" id="one" ref="scene-1">
      <div class="static-container">
        <div class="std">
          <p class="-big">
            时光匆匆，
            <br />
            <b>2019已悄然过去</b>
          </p>
          <p>人生还剩下多少。</p>
          <p>回首今年，我做了什么。</p>

          <pre ref="code">[{{process}}]</pre>
        </div>
      </div>

      <div class="container"></div>
    </section>
  </page>
</template>

<script>
import Page from '../../components/FullPage'
import { mapGetters } from 'vuex'

export default {
  props: {
    go: Boolean
  },
  components: {
    Page
  },
  computed: {
    ...mapGetters(['viewport'])
  },
  data () {
    return {
      process: '======================='
    }
  },
  mounted () {
    this.processInit()
    this.$watch('go', (v) => {
      if (v) {
        this.processGo()
      } else {
        this.processInit()
      }
    }, { deep: true })
  },
  methods: {
    processInit() {
       this.process = '='.repeat(this.$refs.code.offsetWidth / 8)
    },
    processGo () {
    
      let i = 0
      let length = this.process.length
      const timer = setInterval(() => {
        const arr = this.process.split('')
        arr[i++] = '#'
        this.process = arr.join('')
        if (i === length) {
          clearInterval(timer)
        }
      }, 40);
    }
  }
}

// function sleep (time) {
//   return new Promise(r => {
//     setTimeout(r, time);
//   })
// }
</script>

<style lang="stylus" scoped>
pre
  text-align center
  display flex
  justify-content center
</style>