<template>
  <div class="suburbs-container">
    <SidebarTitle text="Suburbs"/>
    <SidebarButton
      v-for="(suburb, index) in suburbs" :key="index"
      :selected="index === selectedSuburbIndex"
      :text="suburb.name"
      @click.native="$store.commit('filterModule/updateSelectedSuburbIndex', index)"
    />
  </div>
</template>

<script>
import SidebarTitle from '@/components/BaseSidebar/components/SidebarTitle/SidebarTitle'
import SidebarButton from '@/components/BaseSidebar/components/SidebarButton/SidebarButton'
import { mapState } from 'vuex'
export default {
  components: {
    SidebarTitle,
    SidebarButton
  },
  computed: mapState({
    suburbs: state => state.suburbModule.suburbs,
    selectedSuburbIndex: state => state.filterModule.selectedSuburbIndex
  })
}
</script>

<style lang="scss" scoped>
.suburbs-container {
  width: 100%;
}
</style>
