<template>
  <div class="map">
    <BaseMap>
      <MapMarkers :marker-data-arr="propertiesInViewMarkers"/>
      <MapMarkers :marker-data-arr="[selectedPropertyMarker]" primary/>
      <MapMarkers :marker-data-arr="[hoveredPropertyMarker]" primary/>
      <MapFilter layer="suburb-outline-focus" :expression="expressionIncludeSuburb"/>
      <MapFilter layer="place-label-focus" :expression="expressionIncludeSuburb"/>
      <MapFilter layer="suburb-fill-default" :expression="expressionExcludeSuburb"/>
      <MapHover layer="suburb-fill-default"/>
      <MapPosition :lng-lat="suburb && suburb.boundingBox"/>
    </BaseMap>
  </div>
</template>

<script>
import BaseMap from '@/components/BaseMap/BaseMap'
import MapMarkers from '@/components/BaseMap/components/MapMarkers/MapMarkers'
import MapFilter from '@/components/BaseMap/components/MapFilter/MapFilter'
import MapPosition from '@/components/BaseMap/components/MapPosition/MapPosition'
import MapHover from '@/components/BaseMap/components/MapHover/MapHover'
import { mapState } from 'vuex'
export default {
  components: {
    BaseMap,
    MapMarkers,
    MapFilter,
    MapPosition,
    MapHover
  },
  computed: {
    ...mapState('entities/suburbs', {
      suburbs: state => state.items,
      selectedSuburbId: state => state.selectedId
    }),
    ...mapState('entities/properties', {
      properties: state => state.items,
      selectedPropertyId: state => state.selectedId
    }),
    ...mapState('ui', {
      propertiesInViewById: state => state.propertiesInViewById,
      propertyHoveredId: state => state.propertyHoveredId
    }),
    selectedPropertyMarker () {
      return this.selectedPropertyId ? { id: this.selectedPropertyId, lngLat: [this.properties[this.selectedPropertyId].lng, this.properties[this.selectedPropertyId].lat] } : null
    },
    hoveredPropertyMarker () {
      return this.propertyHoveredId ? { id: this.propertyHoveredId, lngLat: [this.properties[this.propertyHoveredId].lng, this.properties[this.propertyHoveredId].lat] } : null
    },
    propertiesInViewMarkers () {
      return this.propertiesInViewById.map(id => ({ id, lngLat: [this.properties[id].lng, this.properties[id].lat] }))
    },
    suburb () {
      return this.suburbs[this.selectedSuburbId]
    },
    expressionIncludeSuburb () {
      return ['all', ['==', ['get', 'STE_NAME16'], this.suburb ? this.suburb.stateLong : null], ['==', ['get', 'SSC_NAME16'], this.suburb ? this.suburb.name : null]]
    },
    expressionExcludeSuburb () {
      return ['!', ['all', ['==', ['get', 'STE_NAME16'], this.suburb ? this.suburb.stateLong : null], ['==', ['get', 'SSC_NAME16'], this.suburb ? this.suburb.name : null]]]
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  padding: var(--spacing-1) var(--spacing-1) var(--spacing-1) 0;
  position: sticky;
  height: 100%;
  top: 0;
}
</style>
