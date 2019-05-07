<template>
  <div class="base-statistic">
    <BaseLabel :text="title"/>
    <div class="statistic-container">
      <div class="statistic">{{ value | formatNumber(format) }}</div>
      <BaseLabelSmall :text="subtitle"/>
    </div>
  </div>
</template>

<script>
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import BaseLabelSmall from '@/components/BaseLabelSmall/BaseLabelSmall'
export default {
  components: {
    BaseLabel,
    BaseLabelSmall
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: false
    },
    format: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-label {
  margin-bottom: var(--spacing-4);
}
.statistic-container {
  margin-bottom: var(--spacing-1);
  border-radius: var(--border-radius-2);
  background: var(--color-gray-5);
  padding: var(--spacing-2);
  text-align: right;
}
.statistic {
  font-size: 24px;
  color: var(--color-black);
  font-weight: var(--font-weight-bold);
}
</style>
