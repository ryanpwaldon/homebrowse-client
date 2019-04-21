<template>
  <div class="suburbs-container">
    <SidebarTitle text="Suburbs"/>
    <BaseFieldSelectTabs
      orientation="vertical"
      :options="[
        { value: 'Mossman', display: 'Mossman' },
        { value: 'Glebe', display: 'Glebe' },
        { value: 'Haymarket', display: 'Haymarket' },
        { value: 'Milsons Point', display: 'Milsons Point' },
        { value: 'Waverley', display: 'Waverley' },
        { value: 'Zetland', display: 'Zetland' },
        { value: 'Kensington', display: 'Kensington' },
      ]"
      selected="Glebe"
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
.suburbs-container {
  width: 100%;
}
</style>
