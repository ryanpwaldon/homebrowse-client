<template>
  <div class="home">
    <BaseSidebar/>
    <div class="main">
      <BaseNav/>
      <div class="content">
        <div class="listings-container">
          <BaseListings/>
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
import BaseListings from '@/components/BaseListings/BaseListings'
import BaseSidebar from '@/components/BaseSidebar/BaseSidebar'
import BaseSearch from '@/components/BaseSearch/BaseSearch'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    BaseNav,
    BaseMap,
    BaseListings,
    BaseSidebar,
    BaseSearch
  },
  computed: mapState({
    searchState: state => state.globalModule.searchState
  })
}
</script>

<style lang="scss" scoped>
.home {
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
.listings-container,
.base-map {
  flex: 1;
}
.listings-container {
  padding: var(--spacing-1);
  overflow: auto;
}
</style>
