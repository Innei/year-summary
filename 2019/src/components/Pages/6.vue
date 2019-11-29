<template>
  <BasicLayout :id="'five'">
    <p class="-big">
      暑假，
      <br />
      <b>
        是不是应该好好的
        <del>Van</del> 呢
        <br />快滚去学习
      </b>
    </p>
    <p>于是我正式步入了前端工程化的学习，</p>
    <p>同时开始学习Node后端开发。</p>
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

