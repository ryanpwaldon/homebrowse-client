<template>
  <transition
    @enter="animateEnter"
    @leave="animateLeave"
    :css="false">
    <div
      class="base-modal-overlay"
      v-if="condition"
      @keyup.escape="close()">
      <div class="slot-underlay" @click="close()"/>
      <div ref="content">
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
import anime from 'animejs'
export default {
  props: {
    condition: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    animateEnter (el, done) {
      anime({
        targets: el,
        opacity: [0, 1],
        complete: done,
        easing: 'easeInOutQuad',
        duration: 200
      })
      anime({
        targets: this.$refs['content'],
        scale: [0.9, 1],
        easing: 'easeInOutQuad',
        duration: 200
      })
    },
    animateLeave (el, done) {
      anime({
        targets: el,
        opacity: [1, 0],
        complete: done,
        easing: 'easeInOutQuad',
        duration: 200
      })
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-modal-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-overlay);
  z-index: 2;
  will-change: opacity;
}
.slot-underlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
