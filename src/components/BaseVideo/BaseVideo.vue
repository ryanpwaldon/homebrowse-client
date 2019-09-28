<template>
  <video
    class="base-video"
    :src="path"
    playsinline
    autoplay
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
}
</style>
