<template>
  <div class="base-sidebar">
    <SidebarLogo/>
    <SidebarSpacer/>
    <SidebarSearchButton/>
    <SidebarSpacer/>
    <SuburbsContainer/>
    <SidebarSpacer/>
    <FilterContainer/>
  </div>
</template>

<script>
import SidebarLogo from './components/SidebarLogo/SidebarLogo'
import SuburbsContainer from './components/SuburbsContainer/SuburbsContainer'
import FilterContainer from './components/FilterContainer/FilterContainer'
import SidebarSpacer from './components/SidebarSpacer/SidebarSpacer'
import SidebarSearchButton from './components/SidebarSearchButton/SidebarSearchButton'
export default {
  components: {
    SidebarLogo,
    SuburbsContainer,
    FilterContainer,
    SidebarSpacer,
    SidebarSearchButton
  }
}
</script>

<style lang="scss" scoped>
.base-sidebar {
  height: 100%;
  width: 280px;
  background: var(--color-light-gray-2);
}
</style>
