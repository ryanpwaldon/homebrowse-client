<template>
  <div class="property" v-if="item">
    <div class="content">
      <div class="header">
        <div class="title-container">
          <div class="title">{{ item.displayAddress }}</div>
          <div class="subtitle">{{ item.suburb }} {{ item.state }} {{ item.postcode }}</div>
        </div>
        <div class="price">{{ item.price }}</div>
      </div>
      <div class="sub-header">
        <div class="features">
          <BaseButtonSmall :text="listingTypeFormatted"/>
          <BaseButtonSmall :text="item.bedrooms.toString()" :icon="require('@/assets/img/bed.svg')"/>
          <BaseButtonSmall :text="item.bathrooms.toString()" :icon="require('@/assets/img/bath.svg')"/>
          <BaseButtonSmall :text="item.carspaces.toString()" :icon="require('@/assets/img/car.svg')"/>
        </div>
        <a :href="item.url" target="_blank">
          <BaseButtonSmall
            class="domain-button"
            text="Open in Domain"
            :icon="require('@/assets/img/domain-icon.svg')"
            icon-position="right"
          />
        </a>
      </div>
      <BaseNav :items="[{ text: 'Detail', link: '/workspace/property/detail' }]"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/store'
import BaseNav from '@/components/BaseNav/BaseNav'
import BaseButtonSmall from '@/components/BaseButtonSmall/BaseButtonSmall'
export default {
  components: {
    BaseNav,
    BaseButtonSmall
  },
  beforeDestroy () {
    this.$store.commit('entities/properties/setSelectedId', null)
  },
  computed: {
    ...mapState('entities/properties', {
      item: state => state.items[state.selectedId]
    }),
    listingTypeFormatted () {
      if (this.item.listingType === 'buy') return 'For sale'
      if (this.item.listingType === 'sale') return 'For rent'
      if (this.item.listingType === 'sold') return 'Sold'
      return ''
    }
  },
  watch: {
    item: {
      immediate: true,
      handler: function (item) {
        if (!item) {
          if (this.$store.state.entities.suburbs.ids.length) this.$router.push('/workspace/suburb')
          else this.$router.push('/')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.property {
  align-self: flex-start;
}
.content {
  max-width: 700px;
  margin: 0 auto;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-2);
}
.title {
  font-size: 24px;
  color: var(--color-black-2);
  font-weight: var(--font-weight-bold);
}
.subtitle {
  font-size: 14px;
  color: var(--color-gray-1);
  font-weight: var(--font-weight-bold);
}
.price {
  font-size: 24px;
  color: var(--color-black-2);
  font-weight: var(--font-weight-bold);
}
.sub-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-1);
}
.features {
  display: flex;
  *:not(:last-child) {
    margin-right: var(--spacing-4);
  }
}
.domain-button {
  cursor: pointer;
}
::v-deep .domain-button .icon {
  height: 0.8em;
}
</style>
