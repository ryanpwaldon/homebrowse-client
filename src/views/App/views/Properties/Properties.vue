<template>
  <div class="properties">
    <BaseLoader v-if="isLoading"/>
    <BaseListings v-else/>
  </div>
</template>

<script>
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import BaseListings from '@/components/BaseListings/BaseListings'
import { mapState } from 'vuex'
export default {
  components: {
    BaseLoader,
    BaseListings
  },
  created () {
    this.$store.commit('globalModule/setFilterState', 'properties')
  },
  computed: mapState({
    isLoading: state => state.suburbsModule.isLoading
  })
}
</script>

<style lang="scss" scoped>
</style>
