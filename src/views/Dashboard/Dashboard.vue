<template>
  <div class="dashboard">
    <div class="main-container">
      <DashboardSearch v-if="!suburbs.length"/>
      <template v-else>
        <DashboardSidebar/>
        <DashboardContent/>
      </template>
    </div>
    <div class="map-container">
      <DashboardMap/>
    </div>
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
  background: var(--color-gray-5);
  overflow: hidden;
}
.main-container {
  flex: 1.1;
  min-width: 560px;
  display: flex;
  .dashboard-sidebar { width: 210px }
  .dashboard-content { flex: 1 }
}
.map-container {
  flex: 1;
  display: flex;
  .dashboard-map { flex: 1 }
}
</style>
