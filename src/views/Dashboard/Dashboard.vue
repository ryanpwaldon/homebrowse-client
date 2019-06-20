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
  overflow: auto;
  justify-content: space-between;
  background: var(--color-gray-5);
  flex: 1;
  .dashboard-search { flex: 1 }
  .dashboard-sidebar { width: 260px }
  .dashboard-content { flex: 1 }
  .dashboard-map { width: 50% }
}
</style>
