<template>
  <div class="base-image-gallery">
    <div class="swiper-main-container">
      <div class="swiper-main" ref="swiper-main">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(image, i) in images" :key="i">
            <div class="image" :style="{backgroundImage: `url(${image})`}"/>
          </div>
        </div>
      </div>
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
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
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
    swiperMain: null
  }),
  methods: {
    initSwiper () {
      this.swiperMain = new Swiper(this.$refs['swiper-main'], {
        effect: 'fade',
        thumbs: {
          swiper: {
            el: this.$refs['swiper-thumbs'],
            slidesPerView: 4,
            allowTouchMove: true,
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
}
.swiper-main-container {
  position: relative;
  width: 100%;
  padding-top: calc(100% / 2);
  height: 0;
  margin-bottom: var(--spacing-2);
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
  border-radius: var(--border-radius-2);
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
