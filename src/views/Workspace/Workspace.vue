<template>
  <div class="workspace">
    <div class="workspace-content">
      <Sidebar/>
      <Content/>
      <Map/>
      <BaseModalOverlay
        :condition="this.$store.state.ui.searchModalStatus"
        @close="() => this.$store.commit('ui/setSearchModalStatus', false)">
        <BaseSearch/>
      </BaseModalOverlay>
    </div>
  </div>
</template>

<script>
import Map from './partials/Map/Map'
import Sidebar from './partials/Sidebar/Sidebar'
import Content from './partials/Content/Content'
import BaseModalOverlay from '@/components/BaseModalOverlay/BaseModalOverlay'
import BaseSearch from '@/components/BaseSearch/BaseSearch'
export default {
  name: 'workspace',
  components: {
    Map,
    Sidebar,
    Content,
    BaseModalOverlay,
    BaseSearch
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.workspace {
  width: 100%;
  height: 100%;
  position: relative;
}
.workspace-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  justify-content: space-between;
  background: var(--color-gray-5);
  flex: 1;
  .sidebar { width: 260px }
  .content { flex: 1 }
  .map { flex: 1}
}
</style>
