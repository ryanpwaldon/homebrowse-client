<template>
  <div class="base-gallery">
    <div class="image-container">
      <div class="image-holder" ref="image-holder" v-for="(path, index) in images" :key="index">
        <div class="image" :style="{backgroundImage: `url(${path})`}"/>
      </div>
    </div>
    <div class="button left" @click="updateGallery(selectedImageIndex - 1)">←</div>
    <div class="button right" @click="updateGallery(selectedImageIndex + 1)">→</div>
  </div>
</template>

<script>
import { TweenMax, Power4 } from 'gsap'
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  mounted () {
    window.addEventListener('keyup', this.keyControlsHandler)
    this.setTweens()
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.keyControlsHandler)
  },
  data () {
    return {
      selectedImageIndex: 0
    }
  },
  methods: {
    setTweens () {
      TweenMax.set([...this.$refs['image-holder'].filter((item, i) => i !== this.selectedImageIndex)], { alpha: 0 })
    },
    keyControlsHandler (e) {
      if (e.keyCode === 37) this.updateGallery(this.selectedImageIndex - 1)
      if (e.keyCode === 39) this.updateGallery(this.selectedImageIndex + 1)
    },
    updateGallery (index) {
      if (index === -1) index = this.images.length - 1
      if (index === this.images.length) index = 0
      const next = this.$refs['image-holder'][index]
      const prev = this.$refs['image-holder'][this.selectedImageIndex]
      const others = this.$refs['image-holder'].map((item, i) => { if (i !== index && i !== this.selectedImageIndex) return item })
      TweenMax.set(others, { alpha: 0 })
      TweenMax.to(next, 0.5, { alpha: 1, ease: Power4.easeOut, onStart: () => TweenMax.set(next, { zIndex: 1 }) })
      TweenMax.to(prev, 0.5, { alpha: 0, ease: Power4.easeIn, onStart: () => TweenMax.set(prev, { zIndex: 0 }) })
      this.selectedImageIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.base-gallery {
  width: 100%;
  position: relative;
  margin-bottom: 2em;
  &:hover .button { opacity: 1; }
}
.image-container {
  padding-top: 55%;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  box-shadow: var(--box-shadow-1);
}
.image-holder {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--color-white-1);
}
.image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}
.button {
  position: absolute;
  width: 4em;
  height: 4em;
  background: rgba(0, 0, 0, 0.8);
  color: var(--color-white-1);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  cursor: pointer;
  transition: all 120ms ease-in-out;;
  z-index: 2;
  &.left {
    left: 0;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  &.right {
    right: 0;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
}
</style>
