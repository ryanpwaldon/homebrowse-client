<template>
  <div :class="['base-field-select-tabs', orientation]">
    <SidebarButton
      v-for="(option, index) in options"
      :key="index"
      :text="option.display"
      :selected="selected === option.value"
      />
  </div>
</template>

<script>
import SidebarButton from '@/components/BaseSidebar/components/SidebarButton/SidebarButton'
export default {
  components: {
    SidebarButton
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    },
    orientation: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.base-field-select-tabs {
  width: 100%;
  color: var(--color-gray);
  font-weight: var(--font-weight-regular);
  font-size: 14px;
  display: flex;
  &.vertical {
    flex-direction: column;
    align-items: flex-start;
    .base-button:not(:last-child) {
      margin-bottom: var(--spacing-3);
    }
  }
  &.horizontal {
    flex-flow: row wrap;
    white-space: nowrap;
    .base-button:not(:last-child) {
      margin-right: var(--spacing-2);
    }
  }
}
</style>
