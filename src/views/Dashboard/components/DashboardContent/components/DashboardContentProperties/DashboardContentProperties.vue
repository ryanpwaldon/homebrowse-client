<template>
  <div class="properties">
    <BaseLoader v-if="loading"/>
    <div class="properties-container" v-else-if="properties.length">
      <BasePropertyCard
        v-for="(property, index) in properties"
        :property="property"
        :key="index"
      />
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
  created () {
    this.$store.dispatch('suburbs/properties/updateData')
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
</style>
