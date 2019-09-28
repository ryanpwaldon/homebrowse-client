<template>
  <div class="demo">
    <div class="header">
      <div class="label">Demo</div>
      <div class="altcopy" v-if="$mq === 'sm'">Swipe video →</div>
    </div>
    <div class="container">
      <div class="wrapper">
        <BaseVideo class="video" :path="require('@/assets/vid/demo.mp4')"/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseVideo from '@/components/BaseVideo/BaseVideo'
export default {
  name: 'home',
  components: {
    BaseVideo
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.label {
  color: var(--color-white-1);
  background: var(--color-black-1);
  padding: var(--spacing-5) var(--spacing-4);
  border-radius: var(--border-radius-2);
  margin-right: var(--spacing-4);
}
.altcopy {
  color: var(--color-gray-1);
}
.sm .container {
  position: relative;
  width: calc(100% + var(--spacing-1) * 2);
  left: calc(-1 * var(--spacing-1));
  overflow-x: auto;
}
.wrapper {
  padding-top: var(--spacing-2);
}
.sm .wrapper {
  width: 150vw;
  padding: var(--spacing-2) var(--spacing-1);
}
.video {
  background: white;
  border-radius: 5px;
  border: solid 1px var(--color-black-1);
}
</style>
