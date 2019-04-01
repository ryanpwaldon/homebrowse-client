<template>
<transition name="fade">
  <form
    class="base-search"
    v-if="showSearch"
    @click="exitSearch"
    autocomplete="off"
    @submit.prevent
  >
    <div class="search-container" @click.stop>
      <div class="search-main">
        <BaseSearchInputSuburb/>
        <img class="feature-icon" src="@/assets/img/bed.svg">
        <select class="input-feature input-bedrooms">
          <option value="-">Any</option>
          <option value="S">S</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <img class="feature-icon" src="@/assets/img/bath.svg">
        <select class="input-feature input-bathrooms">
          <option value="-">Any</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <img class="feature-icon" src="@/assets/img/car.svg">
        <select class="input-feature input-carspaces">
          <option value="-">Any</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
  </form>
</transition>
</template>

<script>
import BaseSearchInputSuburb from './components/BaseSearchInputSuburb/BaseSearchInputSuburb'
import { mapState } from 'vuex'
export default {
  components: {
    BaseSearchInputSuburb
  },
  mounted () {
    this.addEscapeListener()
  },
  beforeDestroy () {
    this.removeEscapeListener()
  },
  data () {
    return {
      escapeHandler: e => {
        if (e.code === 'Escape') this.exitSearch()
      }
    }
  },
  computed: mapState([
    'showSearch'
  ]),
  methods: {
    addEscapeListener () {
      window.addEventListener('keyup', this.escapeHandler)
    },
    removeEscapeListener () {
      window.removeEventListener('keyup', this.escapeHandler)
    },
    exitSearch () {
      this.$store.commit('updateShowSearch', false)
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
  background: rgba(0, 0, 0, 0.8);
  padding: var(--spacing-1);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 10;
}
.search-container {
  width: 100%;
  max-width: 800px;
}
.search-main {
  width: 100%;
  padding: var(--spacing-2);
  background: var(--color-white);
  border-radius: var(--border-radius-1);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.base-search-input-suburb {
  width: 100%;
  font-size: 18px;
  font-weight: bolder;
}
.feature-icon {
  height: 18px;
  margin-left: var(--spacing-2);
}
.input-feature {
  margin-left: var(--spacing-3);
  font-size: 18px;
  font-weight: bolder;
  overflow: visible;
  text-align: center;
  display: flex;
  justify-content: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
