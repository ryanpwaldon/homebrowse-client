<template>
  <div class="app">
    <BaseSidebar/>
    <div class="main">
      <BaseNav/>
      <div class="content">
        <div class="router-container">
          <router-view/>
        </div>
        <BaseMap/>
      </div>
    </div>
    <BaseSearch/>
  </div>
</template>

<script>
import BaseNav from '@/components/BaseNav/BaseNav'
import BaseMap from '@/components/BaseMap/BaseMap'
import BaseSidebar from '@/components/BaseSidebar/BaseSidebar'
import BaseSearch from '@/components/BaseSearch/BaseSearch'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    BaseNav,
    BaseMap,
    BaseSidebar,
    BaseSearch
  },
  computed: mapState({
    searchState: state => state.globalModule.searchState
  })
}
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  display: flex;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  width: 100%;
  height: 100%;
  display: flex;
}
.router-container,
.base-map {
  flex: 1;
}
.router-container {
  padding: var(--spacing-1);
  overflow: auto;
}
</style>
