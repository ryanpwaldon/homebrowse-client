<template>
  <video
    class="base-video"
    :src="path"
    :playsinline="playsinline"
    :autoplay="autoplay"
    :controls="controls"
    muted
    loop
  />
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    playsinline: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-video {
  width: 100%;
  height: auto;
  display: block;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  &:focus { outline: none }
}
</style>
