<template>
  <div class="dashboard">
    <template v-if="suburbs.length">
      <DashboardSidebar/>
      <DashboardContent/>
    </template>
    <DashboardSearch v-else/>
    <DashboardMap/>
    <BaseSearchModal/>
  </div>
</template>

<script>
import DashboardSearch from './components/DashboardSearch/DashboardSearch'
import DashboardSidebar from './components/DashboardSidebar/DashboardSidebar'
import DashboardContent from './components/DashboardContent/DashboardContent'
import DashboardMap from './components/DashboardMap/DashboardMap'
import BaseSearchModal from '@/components/BaseSearchModal/BaseSearchModal'
import { mapState } from 'vuex'
export default {
  name: 'dashboard',
  components: {
    DashboardSearch,
    DashboardSidebar,
    DashboardContent,
    DashboardMap,
    BaseSearchModal
  },
  created () {
    if (!this.suburbs.length) this.$router.push('/dashboard')
  },
  computed: {
    ...mapState('suburbs', [
      'suburbs'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  display: flex;
}
.dashboard-sidebar {
  width: 210px;
  flex-shrink: 0;
}
.dashboard-search,
.dashboard-content,
.dashboard-map {
  flex: 1;
}
</style>
