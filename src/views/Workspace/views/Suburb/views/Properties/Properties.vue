<template>
  <div class="properties">
    <BaseLoader v-if="loading"/>
    <div class="properties-container" v-else-if="properties.length">
      <BasePropertyCard
        v-for="(property, index) in properties"
        :property="property"
        :key="index"
      />
      <BasePropertyCardPlaceholder
        v-init-auto-paginate-listener="n === 1"
        ref="base-property-card-placeholder"
        v-for="n in (3 - properties.length % 3) + (properties.length % 3 === 0 ? 0 : 3)"
        :key="'placeholder' + n"
        :style="{opacity: hasReachedLastPage ? 0 : 1}"
      />
    </div>
    <BaseLabel text="No properties found" v-else/>
  </div>
</template>

<script>
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import BasePropertyCard from '@/components/BasePropertyCard/BasePropertyCard'
import BasePropertyCardPlaceholder from '@/components/BasePropertyCardPlaceholder/BasePropertyCardPlaceholder'
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import { mapState, mapGetters } from 'vuex'
import router from '@/router'
export default {
  components: {
    BaseLoader,
    BasePropertyCard,
    BasePropertyCardPlaceholder,
    BaseLabel
  },
  computed: {
    ...mapState('entities/suburbs', [
      'selectedId'
    ]),
    ...mapState('entities/listings', [
      'loading'
    ]),
    properties () {
      return this.$store.state.entities.listings.collections[this.selectedId].map(id => this.$store.state.entities.listings.items[id])
    },
    hasReachedLastPage () {
      return this.$store.state.entities.listings.pages[this.selectedId] === -1
    }
  },
  watch: {
    selectedId: {
      immediate: true,
      handler: function (selectedId) {
        this.$store.dispatch('entities/listings/fetchItems', { id: selectedId })
      }
    }
  },
  directives: {
    initAutoPaginateListener: {
      inserted (el, binding, vnode) {
        const isFirst = binding.value
        if (!isFirst) return
        el.observer = new IntersectionObserver(([entry]) => {
          if (vnode.context.hasReachedLastPage) return el.observer.disconnect()
          if (entry.isIntersecting) setTimeout(() => vnode.context.$store.dispatch('entities/listings/fetchItems', { id: vnode.context.selectedId, nextPage: true }), 1000)
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
.base-property-card-placeholder {
  transition: opacity 120ms ease-in-out;
}
</style>
