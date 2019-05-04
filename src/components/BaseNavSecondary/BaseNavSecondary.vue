<template>
  <div class="base-nav-secondary">
    <BaseButtonNav
      v-for="(item, index) in items"
      :key="index"
      :text="item.text"
      :link="item.link"
    />
  </div>
</template>

<script>
import BaseButtonNav from '@/components/BaseButtonNav/BaseButtonNav'
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    BaseButtonNav
  }
}
</script>

<style lang="scss" scoped>
.base-nav-secondary {
  display: flex;
  justify-content: flex-start;
  border-bottom: var(--border-1);
  padding-bottom: var(--spacing-2);
  margin-bottom: var(--spacing-1);
}
.base-button-nav {
  margin-right: var(--spacing-2);
}
</style>
