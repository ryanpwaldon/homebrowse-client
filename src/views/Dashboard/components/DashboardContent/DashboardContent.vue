<template>
  <div class="dashboard-content">
    <template v-if="selectedSuburb">
      <div class="title-container">
        <div class="title">{{ selectedSuburb.details.name }}</div>
        <div class="subtitle">{{ selectedSuburb.details.state }} {{ selectedSuburb.details.postCode }}</div>
      </div>
      <BaseNavSecondary
        :items="[
          { text: 'Properties', link: '/dashboard/properties' },
          { text: 'Statistics', link: '/dashboard/statistics' }
        ]"
      />
      <router-view/>
    </template>
    <template v-else>
      <BaseLabel text="Search for a suburb"/>
    </template>
  </div>
</template>

<script>
import BaseNavSecondary from '@/components/BaseNavSecondary/BaseNavSecondary'
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import { mapGetters } from 'vuex'
export default {
  components: {
    BaseNavSecondary,
    BaseLabel
  },
  created () {
    if (!this.selectedSuburb) this.$router.push('/dashboard')
  },
  computed: mapGetters('dashboard', [
    'selectedSuburb'
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
