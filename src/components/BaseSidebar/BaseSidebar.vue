<template>
  <div class="base-sidebar">
    <SuburbsContainer/>
    <SidebarSpacer/>
    <FilterContainer/>
  </div>
</template>

<script>
import SuburbsContainer from './components/SuburbsContainer/SuburbsContainer'
import FilterContainer from './components/FilterContainer/FilterContainer'
import SidebarSpacer from './components/SidebarSpacer/SidebarSpacer'
export default {
  components: {
    SuburbsContainer,
    FilterContainer,
    SidebarSpacer
  }
}
</script>

<style lang="scss" scoped>
.base-sidebar {
  height: 100%;
  width: 220px;
  flex-shrink: 0;
  padding: var(--spacing-2);
  background: var(--color-light-gray-2);
}
</style>
