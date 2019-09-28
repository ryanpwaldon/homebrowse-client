<template>
  <div class="demo" @click="toggleFullScreen">
    <div class="header">
      <div class="label">Demo</div>
      <div class="altcopy" v-if="$mq === 'sm'">Tap for full screen →</div>
    </div>
    <div class="container">
      <div class="wrapper">
        <div class="inner">
          <BaseVideo class="video" ref="video" :path="require('@/assets/vid/demo.mp4')" autoplay playsinline/>
          <BaseVideo class="video-fs" ref="video-fs" :path="require('@/assets/vid/demo.mp4')"/>
        </div>
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
  },
  methods: {
    toggleFullScreen () {
      if (this.$mq !== 'sm') return
      const video = this.$refs['video'].$el
      const videoFs = this.$refs['video-fs'].$el
      if (video.requestFullScreen) return video.requestFullScreen()
      else if (video.webkitRequestFullScreen) return video.webkitRequestFullScreen()
      else videoFs.play()
    }
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
  position: relative;
  margin-top: var(--spacing-2);
}
.sm .wrapper {
  width: 150vw;
  padding: var(--spacing-2) var(--spacing-1);
  margin-top: 0;
}
.inner {
  width: 100%;
  position: relative;
}
.video {
  background: white;
  border: solid 1px var(--color-black-1);
  border-radius: 5px;
}
.video-fs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
}
</style>
