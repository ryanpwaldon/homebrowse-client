<template>
  <transition
    @enter="animateEnter"
    @leave="animateLeave"
    :css="false">
    <div
      class="base-search"
      v-show="searchState"
      @click="$store.commit('toggleSearchState')"
      @keyup.escape="$store.commit('toggleSearchState')"
      >
      <form class="form" ref="form" @submit.prevent="submit" @click.stop>
        <BaseFieldPlace
          placeholder="Search for a suburb"
          @place-selected="onPlaceSelected"
          @place-detials-retrieved="onPlaceDetailsRetrieved"
        />
      </form>
    </div>
  </transition>
</template>

<script>
import BaseFieldPlace from '@/components/BaseFieldPlace/BaseFieldPlace'
import { mapState } from 'vuex'
import anime from 'animejs'
export default {
  components: {
    BaseFieldPlace
  },
  computed: mapState({
    searchState: state => state.globalModule.searchState,
    search: state => state.listingsModule.search
  }),
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
    updateSearch ({ property, value }) {
      this.$store.commit('updateSearch', { property, value })
    },
    onPlaceSelected () {
      console.log('he')
      this.$store.commit('updateIsLoading', true)
      this.$store.commit('toggleSearchState')
    },
    onPlaceDetailsRetrieved (place) {
      console.log('ho')
      this.updateSearch({ property: 'search.location', value: place })
      this.$store.dispatch('fetchResults')
      this.$store.commit('updateIsLoading', false)
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
  background: var(--overlay-medium);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
