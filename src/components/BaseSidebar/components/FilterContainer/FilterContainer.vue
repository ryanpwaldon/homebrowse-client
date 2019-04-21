<template>
  <div class="suburbs-container">
    <SidebarTitle text="Filter"/>
    <BaseFieldSelectTabs
      orientation="horizontal"
      :options="[
        { value: 'buy', display: 'Buy' },
        { value: 'rent', display: 'Rent' },
        { value: 'sold', display: 'Sold' }
      ]"
      selected="buy"
    />
    <BaseFieldSelectTabs
      orientation="horizontal"
      :options="[
        { value: 'all', display: 'All' },
        { value: 'house', display: 'House' },
        { value: 'unit', display: 'Unit' },
        { value: 'land', display: 'Land' }
      ]"
      selected="all"
    />
  </div>
</template>

<script>
import SidebarTitle from '@/components/BaseSidebar/components/SidebarTitle/SidebarTitle'
import BaseFieldSelectTabs from '@/components/BaseFieldSelectTabs/BaseFieldSelectTabs'
export default {
  components: {
    SidebarTitle,
    BaseFieldSelectTabs
  }
}
</script>

<style lang="scss" scoped>
</style>
