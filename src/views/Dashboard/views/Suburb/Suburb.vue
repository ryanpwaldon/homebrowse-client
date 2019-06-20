<template>
  <div class="suburb">
    <div class="title-container">
      <div class="title">{{ selectedSuburb.details.name }}</div>
      <div class="subtitle">{{ selectedSuburb.details.state }} {{ selectedSuburb.details.postCode }}</div>
    </div>
    <DashboardContentNav/>
    <router-view/>
  </div>
</template>

<script>
import DashboardContentNav from './components/DashboardContentNav/DashboardContentNav'
import { mapGetters } from 'vuex'
export default {
  components: {
    DashboardContentNav
  },
  computed: {
    ...mapGetters('suburbs', [
      'selectedSuburb'
    ])
  }
}
</script>

<style lang="scss" scoped>
.suburb {
  align-self: flex-start;
  padding: var(--spacing-1) 0;
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
