<template>
  <div class="map">
    <BaseMap>
      <MapMarkers :marker-data-arr="propertiesInViewMarkers"/>
      <MapMarkers :marker-data-arr="[propertySelectedMarker]" primary/>
      <MapMarkers :marker-data-arr="[propertyHoveredMarker]" primary/>
    </BaseMap>
  </div>
</template>

<script>
import BaseMap from '@/components/BaseMap/BaseMap'
import MapMarkers from '@/components/BaseMap/components/MapMarkers/MapMarkers'
import { mapState } from 'vuex'
export default {
  components: {
    BaseMap,
    MapMarkers
  },
  computed: {
    ...mapState('entities/properties', {
      properties: state => state.items,
      propertySelectedMarker (state) {
        if (state.selectedId) return { id: state.selectedId, lngLat: [this.properties[state.selectedId].lng, this.properties[state.selectedId].lat] }
      }
    }),
    ...mapState('ui', {
      propertiesInViewMarkers (state) {
        return state.propertiesInViewById.map(id => ({ id, lngLat: [this.properties[id].lng, this.properties[id].lat] }))
      },
      propertyHoveredMarker (state) {
        if (state.propertyHoveredId) return { id: state.propertyHoveredId, lngLat: [this.properties[state.propertyHoveredId].lng, this.properties[state.propertyHoveredId].lat] }
      }
    })
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
