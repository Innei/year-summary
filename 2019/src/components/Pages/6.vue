<template>
  <BasicLayout :id="'five'">
    <p class="-big">
      暑假，
      <br />
      <b>
        是不是应该好好的
        <del>Van</del> 呢 <br />快滚去学习
      </b>
    </p>
    <p>于是我正式步入了前端工程化的学习，</p>
    <p>同时开始学习Node后端开发。</p>

    <template #full>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="display:block;"
        width="154px"
        height="154px"
        viewBox="0 0 100 100"
        id="wave"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="39"
          stroke="#fe718d"
          stroke-width="6"
          fill="none"
        />
        <path
          d="M 17 50 Q 33.5 35.0841 50 50 Q 66.5 64.9159 83 50 A 33 33 0 0 1 17 50"
          fill="#46dff0"
        >
          <animate
            attributeName="d"
            repeatCount="indefinite"
            dur="1.6393442622950818s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="M17 50 Q33.5 35 50 50 Q66.5 65 83 50 A33 33 0 0 1 17 50;M17 50 Q33.5 65 50 50 Q66.5 35 83 50 A33 33 0 0 1 17 50;M17 50 Q33.5 35 50 50 Q66.5 65 83 50 A33 33 0 0 1 17 50"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          />
        </path>
      </svg>
    </template>
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
