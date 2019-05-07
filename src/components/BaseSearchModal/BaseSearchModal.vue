<template>
  <transition
    @enter="animateEnter"
    @leave="animateLeave"
    :css="false">
    <div
      class="base-search"
      v-if="searchModalStatus"
      @click="$store.commit('ui/setSearchModalStatus', false)"
      @keyup.escape="$store.commit('ui/setSearchModalStatus', false)">
      <form class="form" ref="form" @submit.prevent="submit" @click.stop>
        <BaseFieldSuburb
          placeholder="Search for a suburb"
          @suburb-selected="onSuburbSelected"
        />
      </form>
    </div>
  </transition>
</template>

<script>
import BaseFieldSuburb from '@/components/BaseFieldSuburb/BaseFieldSuburb'
import { mapState } from 'vuex'
import anime from 'animejs'
export default {
  components: {
    BaseFieldSuburb
  },
  computed: mapState('ui', [
    'searchModalStatus'
  ]),
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
        targets: this.$refs['form'],
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
    async onSuburbSelected (suburb) {
      this.$store.commit('ui/setSearchModalStatus', false)
      this.$store.dispatch('suburbs/addSuburb', await suburb)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-search {
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
}
</style>
