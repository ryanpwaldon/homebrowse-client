<template>
  <div class="dashboard-content-properties">
    <BaseLoader v-if="loading"/>
    <div class="properties-container" v-else-if="properties.length">
      <BasePropertyCard
        v-for="(property, index) in properties"
        :property="property"
        :key="index"
      />
      <div class="load-more" @click="$store.dispatch('suburbs/properties/updateData', true)">Load more...</div>
    </div>
    <BaseLabel text="No properties found" v-else/>
  </div>
</template>

<script>
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import BasePropertyCard from '@/components/BasePropertyCard/BasePropertyCard'
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    BaseLoader,
    BasePropertyCard,
    BaseLabel
  },
  computed: {
    ...mapState('suburbs/properties', {
      loading: state => state.loading
    }),
    ...mapGetters('suburbs/properties', [
      'properties'
    ])
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
.load-more {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-1);
  background: var(--color-white);
  box-shadow: var(--box-shadow-3);
  border-radius: var(--border-radius-1);
  font-weight: var(--font-weight-bold);
  align-self: stretch;
  cursor: pointer;
}
</style>
