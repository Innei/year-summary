<template>
  <BasicLayout :id="'five'">
    <p class="-big">
      梦想
      <br />
      <b>路漫漫其修远兮</b>
    </p>
    <p>曾经，我的梦想是当一名软件<del>开发工程师</del>，走着走着，阴差阳错走上了全栈的道路，但是梦想可不能就此止步。</p>
    <p>新的一年{{isNextYear? '就要来了': '已经来了'}}，平平无奇的我会在新的一年中接触什么新的事物呢。</p>
    <small>当！然！是！Golang</small>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../BasicLayout'
export default {
  components: {
    BasicLayout
  },
  computed: {
    isNextYear () {
      if ((new Date()).getFullYear > 2019) return true
      return false
    }
  }
}
</script>

