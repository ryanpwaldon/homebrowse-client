<template>
  <div class="property" v-if="item">
    <div class="content">
      <div class="title-container">
        <div class="title">{{ item.displayAddress }}</div>
        <div class="subtitle">{{ item.suburb }} {{ item.state }} {{ item.postcode }}</div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/store'
export default {
  computed: mapState('entities/properties', {
    item: state => state.items[state.selectedId]
  }),
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
  padding: var(--spacing-1) 0;
}
.content {
  max-width: 700px;
  margin: 0 auto;
}
.title-container {
  margin-bottom: var(--spacing-1);
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
</style>
