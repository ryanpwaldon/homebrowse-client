<template>
  <div class="base-field-select-stretch">
    <div class="label">
      <div class="text">{{ label }}</div>
      <img class="expand-icon" src="@/assets/img/expand.svg" v-if="selected === ''">
    </div>
    <select
      class="select"
      :value="selected"
      @input="$emit('select', $event.target.value)"
      :style="{opacity: selected === '' ? 0 : 1}"
      >
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
* {
  font-weight: var(--font-weight-medium);
  font-size: 14px;
}
.base-field-select-stretch {
  width: 100%;
  position: relative;
  margin-bottom: var(--spacing-4);
}
.label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-gray-1);
}
.expand-icon {
  height: 0.9em;
}
.select {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align-last: right;
  cursor: pointer;
}
</style>
