<template>
  <page>
    <section class="scene" :id="id">
      <div class="static-container">
        <div class="std">
          <slot></slot>
        </div>
      </div>

      <div class="container">
        <slot name="full"></slot>
      </div>
    </section>
  </page>
</template>

<script>
import Page from './FullPage'
import { mapGetters } from 'vuex'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    Page
  },
  computed: {
    ...mapGetters(['viewport'])
  }
}
</script>
