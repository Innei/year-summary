<template>
  <BasicLayout :id="'five'">
    <p class="-big">
      你们
      <br />
      <small>感谢你们对我的帮助。</small>
    </p>
    <p>
      前进的道路注定离不开你们，对，就是屏幕前的你们，还有我周围以及网络上认识的小伙伴。
    </p>
    <p>今年，我很庆幸认识了</p>
    <div class="img-b">
      <img src="../../assets/paul.png" alt="Dreamer-Paul" class="avatar" />
      <label>Dreamer-Paul</label>
    </div>
    <div class="img-b">
      <img src="../../assets/sohajin.jpeg" alt="Soha Jin" class="avatar" />
      <label>Soha Jin</label>
    </div>
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

<style lang="stylus" scoped>
.img-b
  position relative
  display inline-block
  margin-right 40px
  label
    position absolute
    bottom -60px
    left 0
    right 0
    display flex
    justify-content center
@media (max-width: 568px)
  .scene.active img.avatar
    width 60px
  .img-b label
    font-size .5rem
    bottom -2rem
</style>
