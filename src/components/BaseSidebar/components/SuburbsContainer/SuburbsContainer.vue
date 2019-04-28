<template>
  <div class="suburbs-container">
    <template v-if="suburbs.length">
      <SidebarTitle text="Suburbs"/>
      <BaseButtonStretch
        class="suburb-item"
        v-for="(suburb, index) in suburbs" :key="index"
        :selected="index === selectedSuburbIndex"
        :text="suburb.name"
        @click.native="$store.dispatch('filterModule/updateSelectedSuburbIndex', index)"
      />
    </template>
    <SidebarSearchButton/>
  </div>
</template>

<script>
import SidebarTitle from '@/components/BaseSidebar/components/SidebarTitle/SidebarTitle'
import BaseButtonStretch from '@/components/BaseButtonStretch/BaseButtonStretch'
import SidebarSearchButton from '@/components/BaseSidebar/components/SidebarSearchButton/SidebarSearchButton'
import { mapState } from 'vuex'
export default {
  components: {
    SidebarTitle,
    BaseButtonStretch,
    SidebarSearchButton
  },
  computed: mapState({
    suburbs: state => state.suburbsModule.suburbs,
    selectedSuburbIndex: state => state.filterModule.selectedSuburbIndex
  })
}
</script>

<style lang="scss" scoped>
.suburbs-container {
  width: 100%;
}
.suburb-item {
  margin-bottom: var(--spacing-3);
}
</style>
