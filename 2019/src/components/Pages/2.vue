<template>
  <page>
    <section class="scene" id="two">
      <div class="static-container">
        <div class="std">
          <p class="-big">
            二月，
            <br />
            <b>我建立了博客，</b>
            <br />
            <b>开始记录生活和感想。</b>
          </p>
          <p>这是梦想起航的开始。</p>
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
  },
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>