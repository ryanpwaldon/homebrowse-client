<template>
  <select
    class="base-field-select"
    v-model="selected">
    <option
      v-for="(option, index) in options"
      :value="option.value"
      :key="index">
      {{ option.display }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: string,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.base-field-select {
  background: var(--color-white);
  border-radius: var(--border-radius-1);
  font-weight: var(--font-weight-bold);
  box-shadow: var(--box-shadow-1);
  padding: var(--spacing-2);
  font-size: 18px;
  line-height: normal;
}
</style>
