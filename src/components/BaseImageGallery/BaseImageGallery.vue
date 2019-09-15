<template>
  <div class="base-image-gallery">
    <div class="swiper-main-container" @click="fullScreenState = true">
      <div class="swiper-main" ref="swiper-main">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(image, i) in images" :key="i">
            <div class="image" :style="{backgroundImage: `url(${image})`}"/>
          </div>
        </div>
      </div>
      <template v-if="images.length > 1">
        <div class="button left" @click.stop="swiperMain.slidePrev()">←</div>
        <div class="button right" @click.stop="swiperMain.slideNext()">→</div>
      </template>
    </div>
    <div class="swiper-thumbs" ref="swiper-thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image, i) in images" :key="i">
          <div class="thumbnail-image-container">
            <div class="thumbnail-image" :style="{backgroundImage: `url(${image})`}"/>
          </div>
        </div>
      </div>
    </div>
    <BaseModalOverlay :condition="fullScreenState" @close="fullScreenState = false">
      <ImageGalleryFullScreen v-if="swiperMain" :initial-slide="swiperMain.realIndex" :images="images"/>
    </BaseModalOverlay>
  </div>
</template>

<script>
import Swiper from 'swiper'
import BaseModalOverlay from '@/components/BaseModalOverlay/BaseModalOverlay'
import ImageGalleryFullScreen from './partials/ImageGalleryFullScreen/ImageGalleryFullScreen'
import 'swiper/dist/css/swiper.css'
export default {
  components: {
    BaseModalOverlay,
    ImageGalleryFullScreen
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.initSwiper()
  },
  data: () => ({
    swiperMain: null,
    fullScreenState: false
  }),
  methods: {
    initSwiper () {
      this.swiperMain = new Swiper(this.$refs['swiper-main'], {
        effect: 'fade',
        loop: true,
        fadeEffect: { crossFade: true },
        allowTouchMove: false,
        thumbs: {
          swiper: {
            el: this.$refs['swiper-thumbs'],
            slidesPerView: 5,
            allowTouchMove: false,
            spaceBetween: 10
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.base-image-gallery {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:hover .button { opacity: 1; }
}
.swiper-main-container {
  position: relative;
  width: 100%;
  padding-top: calc(100% / 2);
  height: 0;
  margin-bottom: var(--spacing-2);
  cursor: zoom-in;
}
.swiper-main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-2);
  background: var(--color-white-1);
  overflow: hidden;
}
.image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-color: var(--color-white-1);
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
.swiper-thumbs {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.thumbnail-image-container {
  position: relative;
  width: 100%;
  padding-top: calc(100% / 2);
  height: 0;
}
.thumbnail-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-color: var(--color-white-1);
  border-radius: var(--border-radius-2);
  background-repeat: no-repeat;
  overflow: hidden;
  cursor: pointer;
}
.thumbnail-image::after {
  content: '';
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-2);
  border: solid 2px var(--color-transparent);
  transition: border-color .2s;
}
.swiper-thumbs .swiper-slide-thumb-active .thumbnail-image::after {
  border-color: var(--color-black-1);
}
</style>
