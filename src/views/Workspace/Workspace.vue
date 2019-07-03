<template>
  <div class="workspace">
    <Sidebar/>
    <Content/>
    <BaseModalOverlay
      :condition="this.$store.state.ui.searchModalStatus"
      @close="() => this.$store.commit('ui/setSearchModalStatus', false)">
      <BaseSearch/>
    </BaseModalOverlay>
  </div>
</template>

<script>
import Sidebar from './partials/Sidebar/Sidebar'
import Content from './partials/Content/Content'
import Map from './partials/Map/Map'
import BaseModalOverlay from '@/components/BaseModalOverlay/BaseModalOverlay'
import BaseSearch from '@/components/BaseSearch/BaseSearch'
export default {
  name: 'workspace',
  components: {
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
  display: flex;
  overflow: auto;
  justify-content: space-between;
  background: var(--color-gray-5);
  flex: 1;
  .search { flex: 1 }
  .sidebar { width: 260px }
  .content { flex: 1 }
  .map { width: 50% }
}
</style>
