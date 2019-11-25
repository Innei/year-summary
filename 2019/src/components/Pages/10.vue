<template>
  <BasicLayout :id="'five'">
    <p class="-big">
      远方
      <br />
    </p>
    <blockquote>
      这个世界不只有眼前的苟且，还有诗与远方。
      新的一年，不仅把握现实的自己，更要去追求一些没有尝试过的东西。
    </blockquote>

    <li>多结识新朋友</li>
    <li>加入一个团队</li>
    <li>再或者参加一个比赛</li>
    <li>尝试新事物</li>

    <p>世界很大，我想去试试。</p>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../BasicLayout'
export default {
  components: {
    BasicLayout
  }
}
</script>
