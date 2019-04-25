<template>
  <div class="sidebar-field-select">
    <div class="label">{{ label }}</div>
    <select
      class="select"
      :value="selected"
      @input="$emit('select', $event.target.value)">
      <option
        v-for="(option, index) in options"
        :value="option.value"
        :key="index">
        {{ option.display }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-field-select {
  width: 100%;
  font-size: 14px;
  transition: background 120ms ease-in 0s;
  padding: var(--spacing-4) var(--spacing-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.sidebar-field-select:hover {
  background: var(--color-hover);
}
.label {
  color: var(--color-gray);
  margin-right: var(--spacing-3-5);
  font-weight: var(--font-weight-medium);
}
.select {
  font-size: 14px;
  color: var(--color-black);
  font-weight: var(--font-weight-medium);
  text-decoration: underline;
  text-align-last: right;
}
</style>
