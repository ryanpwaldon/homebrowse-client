<template>
  <div class="dashboard-content-properties">
    <BaseLoader v-if="loading"/>
    <div class="properties-container" v-else-if="properties.length">
      <BasePropertyCard
        v-for="(property, index) in properties"
        :property="property"
        :key="index"
      />
      <template v-if="!hasReachedLastPage">
        <BasePropertyCardPlaceholder
          v-init-auto-paginate-listener="n === 1"
          ref="base-property-card-placeholder"
          v-for="n in (3 - properties.length % 3) + (properties.length % 3 === 0 ? 0 : 3)"
          :key="'placeholder' + n"
        />
      </template>
    </div>
    <BaseLabel text="No properties found" v-else/>
  </div>
</template>

<script>
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import BasePropertyCard from '@/components/BasePropertyCard/BasePropertyCard'
import BasePropertyCardPlaceholder from '@/components/BasePropertyCardPlaceholder/BasePropertyCardPlaceholder'
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import get from 'lodash/get'
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    BaseLoader,
    BasePropertyCard,
    BasePropertyCardPlaceholder,
    BaseLabel
  },
  computed: {
    ...mapState('suburbs/properties', {
      loading: state => state.loading
    }),
    ...mapGetters('suburbs/properties', [
      'properties'
    ]),
    ...mapGetters('suburbs', [
      'selectedSuburb'
    ]),
    hasReachedLastPage () {
      return get(this.selectedSuburb, 'properties.hasReachedLastPage', false)
    }
  },
  directives: {
    initAutoPaginateListener: {
      inserted (el, binding, vnode) {
        const isFirst = binding.value
        if (!isFirst) return
        el.observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) setTimeout(() => vnode.context.$store.dispatch('suburbs/properties/updateData', true), 1000)
        })
        el.observer.observe(el)
      },
      unbind (el) {
        if (el.observer) el.observer.disconnect()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.properties-container {
  width: 100%;
  display: grid;
  grid-gap: var(--spacing-2);
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
