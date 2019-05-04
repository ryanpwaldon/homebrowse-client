<template>
  <div class="dashboard-content">
    <div class="title-container">
      <div class="title">{{ suburb.name }}</div>
      <div class="subtitle">{{ suburb.state }} {{ suburb.postCode }}</div>
    </div>
    <BaseNavSecondary
      :items="[
        { text: 'Properties', link: '/dashboard/properties' },
        { text: 'Statistics', link: '/dashboard/statistics' }
      ]"
    />
    <router-view/>
  </div>
</template>

<script>
import BaseNavSecondary from '@/components/BaseNavSecondary/BaseNavSecondary'
import { mapGetters } from 'vuex'
export default {
  components: {
    BaseNavSecondary
  },
  computed: mapGetters('suburbsModule', [
    'suburb'
  ])
}
</script>

<style lang="scss" scoped>
.dashboard-content {
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: var(--spacing-1);
}
.title-container {
  margin-bottom: var(--spacing-1);
}
.title {
  font-size: 24px;
  color: var(--color-black);
  font-weight: var(--font-weight-bold);
}
.subtitle {
  font-size: 14px;
  color: var(--color-gray-1);
  font-weight: var(--font-weight-bold);
}
</style>
