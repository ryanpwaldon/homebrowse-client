<template>
  <div class="properties">
    <BaseLoader v-if="isLoading"/>
    <div class="properties-container" v-else>
      <BasePropertyCard
        v-for="(property, index) in properties"
        :property="property"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import BasePropertyCard from '@/components/BasePropertyCard/BasePropertyCard'
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    BaseLoader,
    BasePropertyCard
  },
  created () {
    this.$store.commit('globalModule/setFilterState', 'properties')
  },
  computed: {
    ...mapState({
      isLoading: state => state.dashboardModule.isLoading
    }),
    ...mapGetters({
      properties: 'dashboardModule/properties'
    })
  }
}
</script>

<style lang="scss" scoped>
.properties-container {
  width: 100%;
  display: grid;
  grid-gap: var(--spacing-1);
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  position: relative;
}
</style>
