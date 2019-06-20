<template>
  <div class="dashboard-sidebar">
    <DashboardSidebarSuburbs/>
  </div>
</template>

<script>
import DashboardSidebarSuburbs from './components/DashboardSidebarSuburbs/DashboardSidebarSuburbs'
export default {
  components: {
    DashboardSidebarSuburbs
  }
}
</script>

<style lang="scss" scoped>
.dashboard-sidebar {
  top: 0;
  height: 100%;
  position: sticky;
  padding: var(--spacing-1);
}
</style>
