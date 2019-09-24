<template>
  <video
    class="base-video"
    :src="path"
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
  background: var(--color-white-1);
}
</style>
