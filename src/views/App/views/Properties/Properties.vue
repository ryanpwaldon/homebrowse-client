<template>
  <BaseListings/>
</template>

<script>
import BaseListings from '@/components/BaseListings/BaseListings'
export default {
  components: {
    BaseListings
  },
  created () {
    this.$store.commit('globalModule/setFilterState', 'properties')
  }
}
</script>
