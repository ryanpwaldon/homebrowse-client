<template>
  <div class="properties">
    <BaseLoader v-if="loading"/>
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
    this.$store.dispatch('dashboard/properties/updateData')
  },
  computed: {
    ...mapState('dashboard/properties', {
      loading: state => state.loading
    }),
    ...mapGetters('dashboard/properties', {
      properties: 'selected'
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
