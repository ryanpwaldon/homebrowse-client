<template>
  <div class="base-field-select-stretch">
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
    <div class="label">
      <div class="text">{{ label }}</div>
      <img class="icon" src="@/assets/img/expand.svg" v-if="selected === ''">
    </div>
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
.base-field-select-stretch {
  width: 100%;
  position: relative;
  * {
    font-weight: var(--font-weight-medium);
    font-size: 14px;
  }
}
.label {
  color: var(--color-gray);
  padding: var(--button-hover-padding-vertical) var(--button-hover-padding-horizontal);
  transition: background-color 120ms ease-in-out 0s;
  border-radius: var(--border-radius-3);
  background: var(--color-transparent);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon {
  height: 0.9em;
}
.select {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: 1.6em;
  text-align-last: right;
  padding: 0 var(--button-hover-padding-horizontal);
  cursor: pointer;
}
.select:hover ~ .label {
  background: var(--color-light-gray-5);
}
</style>
