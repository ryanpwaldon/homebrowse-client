<template>
  <div class="base-sidebar">
    <SuburbsContainer/>
    <SidebarDivider/>
    <FilterContainer/>
  </div>
</template>

<script>
import SuburbsContainer from './components/SuburbsContainer/SuburbsContainer'
import FilterContainer from './components/FilterContainer/FilterContainer'
import SidebarDivider from './components/SidebarDivider/SidebarDivider'
export default {
  components: {
    SuburbsContainer,
    FilterContainer,
    SidebarDivider
  }
}
</script>

<style lang="scss" scoped>
.base-sidebar {
  height: 100%;
  width: 220px;
  flex-shrink: 0;
  padding: var(--spacing-2-5) var(--spacing-3);
  background: var(--color-light-gray-2);
}
</style>
