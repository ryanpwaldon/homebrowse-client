<template>
  <div>
    <BaseLoader v-if="loading"/>
    <div class="content" v-else-if="items.length">
      <BasePropertyCard
        @click.native="onClick(item.id)"
        v-for="(item, index) in items"
        :property="item"
        :key="index"
      />
      <BasePropertyCardPlaceholder
        v-init-auto-paginate-listener="n === 1"
        ref="base-property-card-placeholder"
        v-for="n in (3 - items.length % 3) + (items.length % 3 === 0 ? 0 : 3)"
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
  mounted () {
  },
  computed: {
    ...mapState('entities/suburbs', {
      selectedSuburbId: state => state.selectedId
    }),
    ...mapState('entities/properties', {
      loading: state => state.loading,
      lists: state => state.lists,
      properties: state => state.items,
      pages: state => state.pages
    }),
    items () {
      return this.lists[this.selectedSuburbId].map(id => this.properties[id])
    },
    hasReachedLastPage () {
      return this.pages[this.selectedSuburbId] === -1
    }
  },
  methods: {
    onClick (id) {
      this.$store.dispatch('entities/properties/addId', id)
      if (!this.$route.fullPath.includes('/workspace/property')) this.$router.push('/workspace/property')
    }
  },
  watch: {
    selectedSuburbId: {
      immediate: true,
      handler: function (selectedSuburbId) {
        this.$store.dispatch('entities/properties/fetchItems', { id: selectedSuburbId })
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
          if (entry.isIntersecting) setTimeout(() => vnode.context.$store.dispatch('entities/properties/fetchItems', { id: vnode.context.selectedSuburbId, nextPage: true }), 1000)
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
.content {
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
