<template>
  <SidebarButton
    class="search-button"
    text="Search"
    :icon="require('@/assets/img/search.svg')"
    @click.native="$store.commit('globalModule/toggleSearchState')"
  />
</template>

<script>
import SidebarButton from '../SidebarButton/SidebarButton'
import { mapState } from 'vuex'
export default {
  components: {
    SidebarButton
  }
}
</script>
