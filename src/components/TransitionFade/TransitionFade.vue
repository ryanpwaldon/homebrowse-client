<template>
  <transition
    @enter="animateEnter"
    @leave="animateLeave"
    :css="false">
    <slot/>
  </transition>
</template>

<script>
import anime from 'animejs'
export default {
  methods: {
    animateEnter (el, done) {
      anime({
        targets: el,
        opacity: [0, 1],
        complete: done,
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
    }
  }
}
</script>
