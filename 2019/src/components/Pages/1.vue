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
          <blockquote>
            在默默里算着，八千多日子已经从我手中溜去；像针尖上一滴水滴在大海里，我的日子滴在时间的流里，没有声音，也没有影子。我不禁头涔涔而泪潸潸了。
          </blockquote>
          <p>时间总是在不经意间，流逝了。</p>
          <p>而我又做了些什么。</p>
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
  components: {
    Page
  },
  computed: {
    ...mapGetters(['viewport'])
  }
}

</script>

<style lang="stylus" scoped>
pre
  text-align center
  display flex
  justify-content center
</style>
