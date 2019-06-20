<template>
  <div class="dashboard-search">
    <BaseFieldSuburb
      placeholder="Search for a suburb"
      @suburb-selected="onSuburbSelected"
    />
  </div>
</template>

<script>
import BaseFieldSuburb from '@/components/BaseFieldSuburb/BaseFieldSuburb'
export default {
  components: {
    BaseFieldSuburb
  },
  methods: {
    async onSuburbSelected (suburb) {
      this.$store.dispatch('suburbs/addSuburb', await suburb)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-search {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-1);
}
.base-field-suburb {
  width: 100%;
  max-width: 540px;
  border: var(--border-1);
}
</style>
